var app = new Vue({ 
    el: '#app',
    data: {
        locale: "en",
        language: "FR",
        title: "Revenu disponible 5",
        isCouple: false,
        numberOfChildren: 0,
        table1: "<span style='color: red'>This should be red.</span>"
    },
    created: function () {
        console.log("created!");
    },
    beforeUpdate: function () {
        console.log("beforeUpdate!");
    },
    updated: function () {
        console.log("updated!");
    },
    methods: {
        changeLanguage: function () {
            this.locale = this.locale === 'en' ? 'fr' : 'en'
            this.language = this.locale === 'en' ? 'FR' : 'EN'
        },
        calculate: function () {
            console.log("calculate!");
        }
    }
});

app.calculate();

$("#alain2").change(function(){
    var selected = $('#alain1 option:selected').val();
    alert(selected);           
});

$("#years").on("change", function() {
    var value = $(this).val();
    var index = $(this).index();
    console.log("years=" + value + ", " + index);
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

$("#family").on("change", function() {
    var value = $(this).val();
    var index = $(this).index();
    console.log("family=" + value + ", " + index);
});
