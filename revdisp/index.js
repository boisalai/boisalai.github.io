var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue4!'
    }
});

$('#alain1').on('changed.bs.select', function (e, clickedIndex, newValue, oldValue) {
    var selected = $(e.currentTarget).val();
    alert("alain1")
});

$("#alain2").change(function(){
    var selected = $('#alain1 option:selected').val();
    alert(selected);           
});

$("#alain1").on("change", function () {
    alert("alain1")
    /*
    switch ($(this).val()) {
        case 'Pop':
        case 'FoyersImposes':
        case 'FoyersFiscaux':
            $('#centrageX option[value="median"]').prop('selected', false);
            $('#centrageX option[value="moyenne"]').prop('selected', false);
            $('#centrageX option[value="pasCentre"]').prop('selected', true);
            $('#dispersionX option[value="minmax"]').prop('selected', false);
            $('#dispersionX option[value="ecarttype"]').prop('selected', false);
            $('#dispersionX option[value="noDispersion"]').prop('selected', true);
            $('#centrageX').prop('disabled', true);
            $('#dispersionX').prop('disabled', true);
            $('.selectpicker').selectpicker('refresh');
            break;    
        case 'PropRetraite':
        case 'PropFoyersImposes':
        case 'RevMoyen':
            $('#centrageX').prop('disabled', false);
            $('#dispersionX').prop('disabled', false);
            $('.selectpicker').selectpicker('refresh');
            break;
    }
    */
});
