var ViewModel = function() {
  var self = this;
  var map = {};
  var bounds = {};
  var infowindow = {};

  self.searchField = ko.observable("");
  self.locations = ko.observableArray();
  self.topPicks = ko.observableArray();
  self.warningMessage = ko.observable();

  // Create and return marker.
  self.createMarker = function(title, content, position, color, id) {
    // Create a marker for this location.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      icon: "http://maps.google.com/mapfiles/ms/icons/" + color + "-dot.png",
      id: id
    });

    // Keep content string and color into marker.
    // Red is location, green for topPick.
    marker.content = content;
    marker.color = color;

    // Extends this bounds to contain the given point.
    bounds.extend(marker.position);

    // Add click listener.
    marker.addListener("click", function() {
      self.showLocationInfoFromMarker(marker);
    });

    return marker;
  };

  // Reset the user interface.
  self.reset = function() {
    // Reset search field.
    self.searchField("");

    // Create map.
    map = new google.maps.Map(document.getElementById("myMap"), {
      zoom: 10,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    // Instantiate some objects.
    bounds = new google.maps.LatLngBounds();
    infowindow = new google.maps.InfoWindow();

    self.locations.removeAll();

    // Create marker for each location.
    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];

      var title = location.title;
      var content = location.fact + " <a href=\"" + 
                    location.source_url + "\" target=\"_blank\">" + 
                    location.source_name + "</a>.";
      var position = location.position;

      // Create a marker for this location.
      var marker = self.createMarker(title, content, position, "red", i);

      // Keep marker object into location.
      location.marker = marker;

      // Add "visible" and "active" properties to location.
      location.visible = ko.observable(true);
      location.active = ko.observable(false);

      // Populate locations array.
      self.locations.push(location);
    }

    // Extend the boundaries of the map for each marker.
    map.fitBounds(bounds);

    google.maps.event.addDomListener(window, "resize", function() {
      map.fitBounds(bounds); 
    });
    
    self.removeTopPicks();
    self.warningMessage = ko.observable("");
  };

  // Show marker on google map.
  self.showMarker = function(marker) {
    if (marker) {
      marker.setVisible(true);
    }
  };

  // Show marker on google map.
  self.hideMarker = function(marker) {
    if (marker) {
      marker.setVisible(false);
    }
  };

  // Filter the location list.
  self.search = function(data, event) {
    var filter = self.searchField().toUpperCase();

    // Loop through all list items, and hide those who don't match the search query.
    ko.utils.arrayForEach(self.locations(), function(location) {
      if (location.title.toUpperCase().indexOf(filter) > -1) {
        location.visible(true);
        self.showMarker(location.marker);
      } else {
        location.visible(false);
        self.hideMarker(location.marker);
      }
    });
  };

  // Remove all Foursquare top picks.
  self.removeTopPicks = function() {
    ko.utils.arrayForEach(self.topPicks(), function(venue) {
      self.hideMarker(venue.marker);
    });
    self.topPicks.removeAll();
  };

  // Show infowindow.
  self.showInfoWindow = function(marker) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      // Stop animation of previous infowindow marker.
      if (infowindow.marker) {
        infowindow.marker.setAnimation(null);
      }

      // Set content of infowindow.
      if (marker.content) {
        infowindow.setContent("<b>" + marker.title + "</b><div class=\"infowindow_content\">" + marker.content + "</div>");
      } else {
        infowindow.setContent(marker.title);
      }

      // Open infowindow and start marker animatiion.
      infowindow.open(map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);

      // Keep marker into infowindow.
      infowindow.marker = marker;

      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener("closeclick", function() {
        infowindow.marker = null;
        marker.setAnimation(null);
      });
    } 
  };

  // Show location info window from marker.
  self.showLocationInfoFromMarker = function(marker) {    
    // Location or Foursquare top pick.
    if (marker.color == "red") {
      self.showLocationInfo(marker.id);
    } else {
      self.showTopPickInfo(marker.id);
    }
  };

  // Show location info window.
  self.showLocationInfo = function(index) {
    // Reset search field.
    self.searchField("");
    
    // Show or hide list item.
    ko.utils.arrayForEach(self.locations(), function(location) {
      if (location.marker.id == index) {
        location.visible(true);
        location.active(true);
        self.showMarker(location.marker);
      } else {
        location.visible(false);
        location.active(false);
        self.hideMarker(location.marker);
      }
    });
    
    // Show infowindow.
    self.showInfoWindow(locations[index].marker);

    // Set marker as center and zoom.
    map.setCenter(locations[index].marker.position);
    map.setZoom(24);

    // Reset bounds.
    bounds = new google.maps.LatLngBounds();
    bounds.extend(locations[index].marker.position);

    // Remove all Foursquare top picks.
    self.removeTopPicks();

    // Get 5 top picks from Foursquare.
    var foursquareUrl = "https://api.foursquare.com/v2/venues/";
    var foursquareParams = $.param({
        "client_id": "LOW1I1K4BFN15QLOYPA5QXG24ZYRG0AIF5XYDX1PG3P3A5QJ",
        "client_secret": "TFBK2JIU1YMZDMEJ2OL3F41P1Q0QSI051XWXBHTLO5JMSUX2",
        "v": "20161016"
    });

    var query = "search?ll=" + locations[index].position.lat + "," + locations[index].position.lng + 
      "&locale=en&limit=5&section=topPicks";
    var url = foursquareUrl + query + "&" + foursquareParams;

    $.getJSON(url, function(result, status) {
      $.each(result.response.venues, function(i, venue) {
        // Add "active" property.
        venue.active = ko.observable(false);

        // Get position.
        var position = new google.maps.LatLng(venue.location.lat, venue.location.lng);

        // Get image.
        var icon = venue.categories[0].icon;
        var content = "<img style=\"float: left; margin: 0px 5px 5px 0px;\" src=\"" + 
                      icon.prefix + "bg_32" + icon.suffix + "\">";
        content += venue.categories[0].name;

        if (venue.location.address) {
          content += "<br>Address: " + venue.location.address;
        }
        
        if (venue.contact.formattedPhone) {
          content += "<br>Phone: " + venue.contact.formattedPhone;
        }
        
        if (venue.contact.facebookUsername) {
          content += "<br>Facebook: <a href=\"https://www.facebook.com/" + 
                      venue.contact.facebookUsername + "\" target=\"_blank\">" + 
                      venue.contact.facebookUsername + "</a>";
        }
        
        if (venue.contact.instagram) {
          content += "<br>Instagram: <a href=\"https://www.instagram.com/" + 
                      venue.contact.instagram + "\" target=\"_blank\">" + 
                      venue.contact.instagram + "</a>";
        }

        // Create a marker for this location.
        var marker = self.createMarker(venue.name, content, position, "green", i);

        // Keep marker object into venue.
        venue.marker = marker;

        // Populate topPicks array.
        self.topPicks.push(venue);
      });
    })
    .done(function() {
      // Extend the boundaries of the map for each marker.
      map.fitBounds(bounds);
    })
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      self.warningMessage("Foursquare request failed! (" + err + ")");
      $('#foursquareRequestFailed').modal('show');
    });
  };

  // Show foursquare top pick info window.
  self.showTopPickInfo = function(index) {
    // Reset search field.
    self.searchField("");

    // Show or hide list item.
    ko.utils.arrayForEach(self.topPicks(), function(venue) {
      if (venue.marker.id == index) {
        venue.active(true);
        self.showInfoWindow(venue.marker);
      } else {
        venue.active(false);
      }
    });    
  };

  // Reset the user interface.
  self.reset();
};

// Listen for authentication errors.
// If you want to programmatically detect an authentication failure (for example
// to automatically send an beacon) you can prepare a callback function. If the 
// following global function is defined it will be called when the authentication
// fails.
// See https://developers.google.com/maps/documentation/javascript/events#auth-errors
var gm_authFailure = function() { 
  $("#myMap").html("<div class=\"alert alert-danger\" role=\"alert\">" + 
      "We had trouble loading Google Maps. Please refresh your browser and try again." + 
      "</div>");
};

// Error handling for Google Maps.
var mapError = function() {
  gm_authFailure();
};

var startApp = function() {
  ko.applyBindings(new ViewModel());
};
