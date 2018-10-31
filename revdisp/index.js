const messages = {
    fr: {
        language: "English",
        title: "Revenu disponible",
        text1: "Estimez les impôts et cotisations à payer, les transferts que vous pourriez recevoir et ce qu'il vous reste en revenu disponible pour l'année.",
        text2: "Régimes fiscaux",
        province: {
            text3: "Province(s)",
            xx: "Tous",
            nl: "Terre-Neuve-et-Labrador",
            pe: "Île-du-Prince-Édouard",
            ns: "Nouvelle-Écosse",
            nb: "Nouveau-Brunswick",
            qc: "Québec",
            on: "Ontario",
            mb: "Manitoba",
            sk: "Saskatchewan",
            ab: "Alberta",
            bc: "Colombie-Britannique",
            yt: "Yukon",
            nt: "Territoires du Nord-Ouest",
            nu: "Nunavut",
            ca: "Canada",
            error: "Sélectionnez au moins une province."
        },
        fiscal: {
            text4: "Année(s) fiscale(s)",
            error: "Sélectionnez au moins une année fiscale."
        },
        text5: "Situation familiale",
        text6: "Votre situation familiale",
        family: {
            f10: "Personne vivant seule",
            f11: "Famille monoparentale, 1 enfant",
            f12: "Famille monoparentale, 2 enfants",
            f13: "Famille monoparentale, 3 enfants",
            f14: "Famille monoparentale, 4 enfants",
            f15: "Famille monoparentale, 5 enfants",
            f20: "Couple sans enfant",
            f21: "Couple, 1 enfant",
            f22: "Couple, 2 enfants",
            f23: "Couple, 3 enfants",
            f24: "Couple, 4 enfants",
            f25: "Couple, 5 enfants"
        },
        text7: "Votre âge",
        text8: "Âge de votre conjoint(e)",
        adult: {
            a1: "Moins de 18 ans",
            a2: "De 18 à 24 ans",
            a3: "De 25 à 64 ans",
            a4: "65 ans ou plus"
        },
        child: {
            age1: "Âge du premier enfant",
            age2: "Âge du deuxième enfant",
            age3: "Âge du troisième enfant",
            age4: "Âge du quatrième enfant",
            age5: "Âge du cinquième enfant",
            a1: "Moins de 6 ans",
            a2: "De 6 à 17 ans",
            a3: "18 ans ou plus",
            care1: "Frais de garde du premier enfant ($)",
            care2: "Frais de garde du deuxième enfant ($)",
            care3: "Frais de garde du troisième enfant ($)",
            care4: "Frais de garde du quatrième enfant ($)",
            care5: "Frais de garde du cinquième enfant ($)",
            subsidized: "Garde subventionnée"
        },
        table: {
            text1: "Tableaux et graphiques",
            text2: "Choisissez un ou plusieurs tableaux et graphiques",
            text3: "Sélectionnez au moins un tableau ou un graphique.",
            text4: "Taux marginaux implicites de taxation"
        },
        button: {
            text1: "Calculer",
            text2: "Initialiser"
        },
        qc: {
            title: "Québec",
            pit: "Impôt sur le revenu des particuliers",
            sa: "Aide sociale",
            ca: "Soutien aux enfants",
            spss: "Supplément pour l'achat de fournitures scolaires",
            wp: "Prime au travail",
            stc: "Crédit d'impôt pour la solidarité",
            tcce: "Crédit d'impôt pour frais de garde d\"enfants",
            sap: "Allocation-logement",
            rtcme: "Crédit d'impôt remboursable pour frais médicaux",
            total: "Sous-total - Québec"
        },
        ca: {
            title: "Fédéral",
            pit: "Impôt sur le revenu des particuliers",
            ccb: "Allocation canadienne pour enfants",
            gst: "Crédit pour la TPS",
            witb: "Prestation fiscale pour le revenu de travail",
            oasp: "Programme de la Sécurité de la vieillesse",
            rmes: "Supplément remboursable pour frais médicaux",
            total: "Sous-total - Fédéral"
        },
        ctb: {
            title: "Cotisations",
            ei: "Assurance-emploi",
            qpip: "Régime québécois d'assurance parentale",
            qpp: "Régime de rentes du Québec",
            hsf: "Fonds des services de santé",
            hc: "Contribution santé",
            qpdip: "Régime d'assurance médicaments du Québec",
            total: "Sous-total - Cotisations"
        }
    },
    en: {
        language: "Français",
        title: "Disposable income",
        text1: "Estimate the taxes and contributions to pay, the transfers you could receive and what you have in disposable income for the year.",
        text2: "Tax regimes",
        province: {
            text3: "Province(s)",
            xx: "All",
            nl: "Newfoundland and Labrador",
            pe: "Prince Edward Island",
            ns: "Nova Scotia",
            nb: "New Brunswick",
            qc: "Québec",
            on: "Ontario",
            mb: "Manitoba",
            sk: "Saskatchewan",
            ab: "Alberta",
            bc: "British Columbia",
            yt: "Yukon",
            nt: "Northwest Territories",
            nu: "Nunavut",
            ca: "Canada",
            error: "Select at least one province."
        },
        fiscal: {
            text4: "Fiscal year(s)",
            error: "Select at least one fiscal year."
        },
        text5: "Family situation",
        text6: "Your family situation",
        family: {
            f10: "Person living alone",
            f11: "Single-parent family, 1 child",
            f12: "Single-parent family, 2 children",
            f13: "Single-parent family, 3 children",
            f14: "Single-parent family, 4 children",
            f15: "Single-parent family, 5 children",
            f20: "Couple without children",
            f21: "Couple, 1 child",
            f22: "Couple, 2 children",
            f23: "Couple, 3 children",
            f24: "Couple, 4 children",
            f25: "Couple, 5 children"
        },
        text7: "Your age",
        text8: "Your spouse's age",
        adult: {
            a1: "Under 18",
            a2: "from 18 to 24 years old",
            a3: "from 25 to 64 years old",
            a4: "65 years or older"
        },
        child: {
            age1: "Age of the first child",
            age2: "Age of the second child",
            age3: "Age of the third child",
            age4: "Age of the fourth child",
            age5: "Age of the fifth child",
            a1: "Under 6",
            a2: "from 6 to 17 years old",
            a3: "18 years or older",
            care1: "Childcare expenses of the first child ($)",
            care2: "Childcare expenses of the second child ($)",
            care3: "Childcare expenses of the third child ($)",
            care4: "Childcare expenses of the fourth child ($)",
            care5: "Childcare expenses of the fifth child ($)",
            subsidized: "Subsidized childcare"
        },
        table: {
            text1: "Tables and charts",
            text2: "Choose one or more tables and graphs",
            text3: "Select at least one table or chart.",
            text4: "Implicit marginal tax rates"
        },
        button: {
            text1: "Calculate",
            text2: "Initialize"
        },
        qc: {
            title: "Québec",
            pit: "Personal income tax",
            sa: "Social assistance",
            ca: "Child assistance",
            spss: "Supplement for the purchase of school supplies",
            wp: "Work premium",
            stc: "Solidarity tax credit",
            tcce: "Tax credit for childcare expenses",
            sap: "Shelter allowance program",
            rtcme: "Refundable tax credit for medical expenses",
            total: "Subtotal - Québec"
        },
        ca: {
            title: "Federal",
            pit: "Personal income tax",
            ccb: "Child care benefit",
            gst: "GST credit",
            witb: "Working income tax benefit",
            oasp: "Old Age Security program",
            rmes: "Refundable medical expense supplement",
            total: "Subtotal - Federal"
        },
        ctb: {
            title: "Contributions",
            ei: "Employment insurance",
            qpip: "Québec Parental Insurance Plan",
            qpp: "Québec Pension Plan",
            hsf: "Health Services Fund",
            hc: "Health contribution",
            qpdip: "Québec Prescription Drug Insurance Plan",
            total: "Subtotal - Cotisations"
        }
    }
}

const numberFormats = {
    en: {
        amount: {
            style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0
        },
        percent: {
            style: "decimal", minimumFractionDigits: 1, maximumFractionDigits: 1
        }
    },
    fr: {
        amount: {
            style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0
        },
        percent: {
            style: "decimal", minimumFractionDigits: 1, maximumFractionDigits: 1
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: "fr", 
    messages,
    numberFormats
})

var self = this;

var app = new Vue({ 
    el: "#app",
    i18n,
    data: {
        provinces: [],
        years: [],
        family: "10",
        isCouple: false,
        numberOfChildren: 0,
        age1: "3",
        age2: "3",
        tables: [],
        table1: "<span style='color: red'>This should be red.{{ $t('qc.pit') }}</span>"
    },
    beforeCreated: function () {
        console.log("beforeCreated!");
    },
    created: function () {
        console.log("created!");
    },
    beforeMount: function () {
        console.log("beforeMount!");
    },
    beforeUpdate: function () {
        console.log("beforeUpdate!");
    },
    watch: {
        family: function (val) {
            app.isCouple = (val.toString().charAt(0) == "2");
            app.numberOfChildren = parseInt(val.toString().charAt(1));
        },
        age1: function (val) {
            console.log(val);
        }
    },
    methods: {
        changeLanguage: function () {
            i18n.locale = i18n.locale === "en" ? "fr" : "en";
        },
        initialize: function () {
            console.log("initialize!");

            app.provinces = [];
            app.years = [];
            app.family = "10";
            app.isCouple = false;
            app.numberOfChildren = 0;
            app.age1 = "3";
            app.age2 = "3";

            $("#provinces-invalid").css("display", "none");
            $("#provinces").removeClass("is-invalid");

            $("#years-invalid").css("display", "none");
            $("#years").removeClass("is-invalid");
        },
        calculate: function () {
            console.log("calculate!");
            
            // Valider les provinces.
            if (app.provinces.length == 0) {
                $("#provinces-invalid").css("display", "block");
                $("#provinces").addClass("is-invalid");
            } else {
                $("#provinces-invalid").css("display", "none");
                $("#provinces").removeClass("is-invalid");
            }

            // Valider les années fiscales.
            if (app.years.length == 0) {
                $("#years-invalid").css("display", "block");
                $("#years").addClass("is-invalid");
            } else {
                $("#years-invalid").css("display", "none");
                $("#years").removeClass("is-invalid");
            }

            let tax = new Tax(app);
            tax.compute();
            app.table1 = tax.createTables();
        },
    }
});

const params = [
    { 
        year: 2018 
    }
];  

let param = {};

class Input {
    constructor(app) {
        this.provinces = this.copy(app.provinces);
        this.numberOfAdults = (app.isCouple) ? 2 : 1;
        this.tables = this.copy(app.tables);
    }

    copy(array_in) {
        let array_out = [];
        for (let i = 0; i < array_in.length; i++) {
            array_out.push(array_in[i]);
        }
        return array_out;
    } 
}

class Result {
    constructor(year) {
        this.year = year;
        this.qc = {
            qc: {
                pit: { // Personal income tax
                    totalIncome1: 0,
                    totalIncome2: 0,
                    deductionForWorkers1: 0,
                    deductionForWorkers2: 0,
                    netIncome1: 0,
                    netIncome2: 0,
                    familyIncome: 0,
                    taxableIncome1: 0,
                    taxableIncome2: 0,
                    basicPersonalAmount1: 0,
                    basicPersonalAmount2: 0,
                    ageAmount1: 0,
                    ageAmount2: 0,
                    nonRefundableTaxCredits1: 0,
                    nonRefundableTaxCredits2: 0,
                    pitBeforeCredits1: 0,
                    pitBeforeCredits2: 0,
                    total1: 0,
                    total2: 0,
                    total: 0
                },
                sa: { // Social assistance.
                    total: 0
                },
                ca: { // Child assistance.
                    total: 0
                },
                spss: { // Supplement for the purchase of school supplies.
                    total: 0
                },
                wp: { // Work premium.
                    total: 0
                },
                stc: { // Solidarity tax credit.
                    total: 0
                },
                tcce: { // Tax credit for childcare expenses.
                    total: 0
                },
                sap: { // Shelter allowance program.
                    total: 0
                },
                rtcme: { // Refundable tax credit for medical expenses.
                    total: 0
                },
                total: { // Subtotal - Québec"
                    total: 0
                }
            },
            ca: {
                pit: { // Personal income tax.
                    total: 0
                },
                ccb: { // Child care benefit.
                    total: 0
                },
                gst: { // GST credit.
                    total: 0
                },
                witb: { // Working income tax benefit.
                    total: 0
                },
                oasp: { // Old Age Security program.
                    total: 0
                },
                rmes: { // Refundable medical expense supplement.
                    total: 0
                },
                total: { // Subtotal - Federal"
                    total: 0
                }
            },
            ctb: {
                ei: { // Employment insurance.
                    total: 0
                },
                qpip: { // Québec Parental Insurance Plan.
                    total: 0
                },
                qpp: { // Québec Pension Plan.
                    total: 0
                },
                hsf: { // Health Services Fund.
                    total: 0
                },
                hc: { // Health contribution.
                    total: 0
                },
                qpdip: { // Québec Prescription Drug Insurance Plan.
                    total: 0
                },
                total: { // Subtotal - Cotisations"
                    total: 0
                }
            }
        }
    }
}

class Tax {
    constructor(app) {
        this.input = new Input(app);

        console.log("input...");
        console.log(this.input);

        this.results = [];
    }

    compute() {
        console.log("compute!");

        // Effacer les extrants.
        this.results = [];

        // Boucler sur les années.
        for (let i = 0; i < app.years.length; i++) {
            let year = app.years[i];
            console.log("year=" + year);

            let result = new Result(year);
            console.log("result=...");
            console.log(result);

            // Calculer la fiscalité des provinces.
            this.computeQuebec(result);

            // Conserver le résultat dans un vecteur.
            this.results.push(result);
            console.log("this.results=...");
            console.log(this.results);
        }
    }
    
    computeQuebec(result) {
        if (!this.input.provinces.includes("QC")) return; 
        console.log("computeQuebec!");
    }

    createTables() {
        console.log("createTables!");
        let output = "";

        // Boucler sur les résultats.
        for (let i = 0; i < this.results.length; i++) {
            let result = this.results[i];
            result.qc.qc.total.total = 888;
            output += this.createTable1(result);
        }
       
        return output;
    }

    createTable1(result) {
        // if (!this.input.tables.includes("1")) return;
        console.log("createTable1!");

        let m = messages[i18n.locale];

        let output = "";
        output += "<p class=\"title\">Impôt sur le revenu des particuliers - 2016</p>";
        output += "<p class=\"parenthesis\">(en dollars)</p>";

        output += "<table class=\"mfq\">";
        output += "<thead>";
        output += "<tr>";
        output += "<th></th>";
        output += "<td>Montant</td>";
        output += "<td>Taux marginal</td>";
        output += "</tr>";
        output += "</thead>";
        output += "<tbody>";
        output += "<tr class=\"line bold\">";
        output += "<th>" + m.province.qc + "</th>";
        output += "<td></td>";
        output += "<td></td>";
        output += "</tr>";
        output += "<tr>";
        output += "<th>" + m.qc.pit + "</th>";
        output += "<td>" + result.qc.qc.pit.total + "</td>";

        /*
                                    <td>{{ result.qc.qc.pit.incomeTax }}</td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.sa') }}</th>
                                    <td>{{ $n(result.qc.qc.sa.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.ca') }}</th>
                                    <td>{{ $n(result.qc.qc.ca.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.spss') }}</th>
                                    <td>{{ $n(result.qc.qc.spss.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.wp') }}</th>
                                    <td>{{ $n(result.qc.qc.wp.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.stc') }}</th>
                                    <td>{{ $n(result.qc.qc.stc.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.tcce') }}</th>
                                    <td>{{ $n(result.qc.qc.tcce.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.sap') }}</th>
                                    <td>{{ $n(result.qc.qc.sap.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('qc.rtcme') }}</th>
                                    <td>{{ $n(result.qc.qc.rtcme.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="subtotal bold">
                                    <th>Total - {{ $t('province.qc') }}</th>
                                    <td>{{ $n(result.qc.qc.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="bold">
                                    <th>{{ $t('province.ca') }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.pit') }}</th>
                                    <td>{{ $n(result.qc.ca.pit.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.uccb') }}</th>
                                    <td>{{ $n(result.qc.ca.uccb.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.cctb') }}</th>
                                    <td>{{ $n(result.qc.ca.cctb.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.ncb') }}</th>
                                    <td>{{ $n(result.qc.ca.ncb.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.gst') }}</th>
                                    <td>{{ $n(result.qc.ca.gst.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.witb') }}</th>
                                    <td>{{ $n(result.qc.ca.witb.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.oasp') }}</th>
                                    <td>{{ $n(result.qc.ca.oasp.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ca.rmes') }}</th>
                                    <td>{{ $n(result.qc.ca.rmes.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="subtotal bold">
                                    <th>Total - {{ $t('province.ca') }}</th>
                                    <td>{{ $n(result.qc.ca.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="bold">
                                    <th>{{ $t('ctb.title') }}</th>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.ei') }}</th>
                                    <td>{{ $n(result.qc.ctb.ei.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.qpip') }}</th>
                                    <td>{{ $n(result.qc.ctb.qpip.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.qpp') }}</th>
                                    <td>{{ $n(result.qc.ctb.qpp.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.hsf') }}</th>
                                    <td>{{ $n(result.qc.ctb.hsf.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.hc') }}</th>
                                    <td>{{ $n(result.qc.ctb.hc.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>{{ $t('ctb.qpdip') }}</th>
                                    <td>{{ $n(result.qc.ctb.qpdip.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="subtotal bold">
                                    <th>Total - {{ $t('ctb.title') }}</th>
                                    <td>{{ $n(result.qc.ctb.ei.total, 'amount') }}</td>
                                    <td></td>
                                </tr>
                                <tr class="line bold">
                                    <th>Frais de garde</th>
                                    <td></td>
                                    <td></td>
                                </tr>
        */

        output += "</tbody>";
        output += "</table>";

        output += m.language;

        return output;
    }
}
