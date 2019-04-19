const messages = {
    fr: {
        language: "English",
        title: "Calculateur de revenu disponible",
        text1: "Estimez les impôts et cotisations à payer, les transferts que vous pourriez recevoir et ce qu'il vous reste en revenu disponible pour l'année.",
        text2: "Régimes fiscaux",
        province: {
            title: "Province",
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
            invalid: "Sélectionnez une province."
        },
        year: {
            title: "Année d'imposition",
            invalid: "Sélectionnez une année d'imposition."
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
        income: {
            work1: "Votre revenu brut de travail",
            work2: "Revenu brut de travail de votre conjoint(e)",
            retirement1: "Votre revenu brut de retraite",
            retirement2: "Revenu brut de retraite de votre conjoint(e)",
            invalid: "Revenu invalide."
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
            title: "Tableaux et graphiques",
            subtitle: "Choisissez un ou plusieurs tableaux et graphiques",
            table: "Tableau",
            chart: "Graphique",
            dollars: "(en dollars)",
            choice1: "Revenu disponible - Tableau sommaire",
            choice2: "Revenu disponible - Tableau détaillé",
            choice3: "Graphique des contributions aux gouvernements",
            choice4: "Graphique des taux marginaux de taxation",
            invalid: "invalide!"
        },
        button: {
            text1: "Calculer",
            text2: "Réinitialiser"
        },
        qc: {
            title: "Québec",
            pit: "Impôt sur le revenu des particuliers",
            ttp: "Transferts aux particuliers",
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
            title: "Canada",
            pit: "Impôt sur le revenu des particuliers",
            pit_url: "https://www.canada.ca/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html",
            ttp: "Transferts aux particuliers",
            ccb: "Allocation canadienne pour enfants",
            gst: "Crédit pour la TPS",
            witb: "Prestation fiscale pour le revenu de travail",
            oasp: "Programme de la Sécurité de la vieillesse",
            rmes: "Supplément remboursable pour frais médicaux",
            total: "Sous-total - Canada"
        },
        ctb: {
            title: "Cotisations",
            ei: "Assurance-emploi",
            qpip: "Régime québécois d'assurance parentale",
            qpp: "Régime de rentes du Québec",
            hsf: "Fonds des services de santé",
            hc: "Contribution santé",
            pdip: "Régime d'assurance médicaments du Québec",
            total: "Sous-total - Cotisations"
        }
    },
    en: {
        language: "Français",
        title: "Disposable income calculator",
        text1: "Estimate the taxes and contributions to pay, the transfers you could receive and what you have in disposable income for the year.",
        text2: "Tax regimes",
        province: {
            title: "Province",
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
            invalid: "Select one province."
        },
        year: {
            title: "Tax year",
            invalid: "Select one tax year."
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
        income: {
            work1: "Your gross work income",
            work2: "Your spouse's gross work income",
            retirement1: "Your gross retirement income",
            retirement2: "Your spouse's gross retirement income",
            invalid: "Invalid income."
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
            title: "Tables and charts",
            subtitle: "Choose one or more tables and graphs",
            table: "Table",
            chart: "Chart",
            dollars: "(dollars)",
            choice1: "Disposable income - Summary table",
            choice2: "Disposable income - Detailed table",
            choice3: "Chart of contributions to governments",
            choice4: "Chart of marginal tax rates",
            invalid: "invalide!"
        },
        button: {
            text1: "Calculate",
            text2: "Reset"
        },
        qc: {
            title: "Québec",
            pit: "Personal income tax",
            ttp: "Transfers to persons",
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
            title: "Canada",
            pit: "Personal income tax",
            pit_url: "https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html",
            ttp: "Transfers to persons",
            ccb: "Child care benefit",
            gst: "GST credit",
            witb: "Working income tax benefit",
            oasp: "Old Age Security program",
            rmes: "Refundable medical expense supplement",
            total: "Subtotal - Canada"
        },
        ctb: {
            title: "Contributions",
            ei: "Employment insurance",
            qpip: "Québec Parental Insurance Plan",
            qpp: "Québec Pension Plan",
            hsf: "Health Services Fund",
            hc: "Health contribution",
            pdip: "Québec Prescription Drug Insurance Plan",
            total: "Subtotal - Cotisations"
        }
    }
}

const numberFormats = {
    en: {
        amount: {
            style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0
        },
        percent: {
            style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1
        }
    },
    fr: {
        amount: {
            style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2
        },
        percent: {
            style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: "fr", 
    messages,
    numberFormats
})


/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 */
function decimalAdjust (type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value)
    }
    value = +value
    exp = +exp
  
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN
    }
  
    // If the value is negative...
    if (value < 0) {
        return -decimalAdjust(type, -value, exp)
    }
  
    // Shift
    value = value.toString().split('e')
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)))
  
    // Shift back
    value = value.toString().split('e')
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))
}
  
// Decimal round
function round10 (value, exp) {
    return decimalAdjust('round', value, exp)
}

/*
https://www.pwc.com/ca/en/services/tax/publications/guides-and-books/facts-figures.html
https://ca.rbcwealthmanagement.com/documents/634020/634036/PWC+Tax+Facts+%26+Figures+2017.pdf/b93674c1-1ace-4252-96c9-148b15779d99
https://www.pwc.com/ca/fr/services/tax/publications/guides-and-books/facts-figures.html
https://home.kpmg.com/ca/en/home/insights/2016/06/tax-facts-2016-2017.html
https://www.mess.gouv.qc.ca/solidarite-sociale/simulation-revenu/categorie3.asp
https://www.sunlife.ca/ca/Learn+and+Plan/Tools+and+Calculators/Retirement+savings+calculator?vgnLocale=fr_CA
*/

let params = [
    {
        year: "2018",
        name: "2018",
        ca: {
            ccd: { // Déduction pour frais de garde. P76.

            },
            pit: { // Impôt sur le revenu des particuliers.
                thresold1: 46605,
                thresold2: 93208,
                thresold3: 144489,
                thresold4: 205842,
                rate1: 0.15,
                rate2: 0.205,
                rate3: 0.26,
                rate4: 0.29,
                rate5: 0.33,
                abattement: 0.165,
                basicPersonalAmount: 11809, // Montant personnel de base.
                creditRate: 0.15 // Taux du crédit.
            },
            ttp: { // Transferts aux particuliers.
            },
            ccb: { // Allocation canadienne pour enfants.
                childAmountUnder6: 6639,
                childAmount: 5602,
                threshold1: 31120,
                threshold2: 67426,
                reductionRate11: 0.07,
                reductionRate12: 0.135,
                reductionRate13: 0.19,
                reductionRate14: 0.23,
                reductionRate21: 0.032,
                reductionRate22: 0.057,
                reductionRate23: 0.08,
                reductionRate24: 0.095
            },
            gst: { // Crédit pour la TPS.
                baseAmount: 290, // Montant de base.
                spouseAmount: 290, // Montant pour conjoint.
                childAmount: 153, // Montant pour enfant.
                plusAmount: 153, // Montant additionnel.
                plusThreshold: 9412, // Seuil de réduction pour montant additionnel.
                plusReductionRate: 0.02, // Taux de réduction pour montant additionnel.
                singleFamilyAmount: 153, // Montant additionnel pour famille monoparentale.
                threshold: 37789, // Seuil de réduction.
                reductionRate: 0.05 // Taux de réduction.
            },
            witb: { // Prestation fiscale pour le revenu de travail.
            },  
            oasp: { // Programme de la Sécurité de la vieillesse.
            },
            rmes: { // Supplément remboursable pour frais médicaux.
            }
        },
        qc: {
            pit: {  // Impôt sur le revenu des particuliers.
                thresold1: 43055,
                thresold2: 86105,
                thresold3: 104765,
                rate1: 0.15,
                rate2: 0.20,
                rate3: 0.24,
                rate4: 0.2575,
                basicPersonalAmount: 15012, // Montant personnel de base.
                deductionForWorkersRate: 0.06,
                deductionForWorkersMax: 9999,
                aloneAmount: 1721, // Montant pour personne vivant seule.
                singleFamilyAmount: 2124, // Montant additionel pour famille monoparentale.
                pensionAmount: 0, // Montant pour revenus de retraite.
                ageAmount: 0, // Montant en raison de l'âge.
                ageReductionThresold: 34030, // Seuil de réduction.
                ageReductionRate: 0.1875, // Taux de réduction.
                creditRate: 0.15 // Taux du crédit.
            },
            ttp: { // Transferts aux particuliers.
            },
            sa: { // Aide sociale.
            },
            ca: { // Allocation famille (Soutien aux enfants).
                amount1: 2430,
                amount2: 1214,
                amount3: 1821,
                amount4: 852,
                threshold1: 48246,
                threshold2: 35096,
                reductionRate: 0.04,
                fournituresScolaire: 100
            },
            spss: { // Supplément pour l'achat de fournitures scolaires.
            },
            wp: { // Work Premium 2018. Prime au travail.
                thresold1: 10574,  // Seuil pour personne seule.
                thresold2: 16356,  // Seuil pour couple.
                deduction1: 2400,  // Déduction pour personne seule.
                deduction2: 3600,  // Déduction pour couple.
                rate1: 0.09,  // Taux d'augmentation sans enfants.
                rate2: 0.25,  // Taux d'augmentation couple avec enfants.
                rate3: 0.30,  // Taux d'augmentation monoparentale.
                reductionRate: 0.10  // Taux de réduction.
            }, 
            stc: { // Crédit d'impôt pour la solidarité.
                baseAmount1: 287, // Juillet 2018 à juin 2019.
                spouceAmount1: 287,
                aloneAmount1: 137,
                reductionRate11: 0.03,
                reductionRate12: 0.06,
                threshold1: 34215,
                baseAmount2: 292, // Juillet 2019 à juin 2019.
                spouceAmount2: 292,
                aloneAmount2: 139,
                reductionRate21: 0.03,
                reductionRate22: 0.06,
                threshold2: 34800
            },
            tcce: { // Crédit d'impôt pour frais de garde d'enfants. P83
                threshold: [
                    [35345, 0.75],
                    [36655, 0.74],
                    [37970, 0.73],
                    [39270, 0.72],
                    [40580, 0.71]
                ]
            }, 
            sap: { // Allocation-logement.
            },
            rtcme: { // Crédit d'impôt remboursable pour frais médicaux.
            }
        },
        ctb: {
            ei: { // Employment insurance 2018.
                min: 2000,
                max: 51700,
                rate: 0.0166,
                rateQc: 0.0130
            },
            qpip: { // Régime québécois d'assurance parentale 2018.
                mie: 74000,
                epr: 0.00548,
                qt: 2000
            },
            qpp: { // Régime de rente du Québec 2018.
                max: 55900,
                min: 3500,
                rate: 0.054
            },
            hsf: { // Fonds des services de santé 2018.
                // http://www.finances.gouv.qc.ca/documents/Autres/fr/AUTFR_RegimeImpot2018.pdf.
                t1: 14665, 
                t2: 50985,
                r1: 0.01,
                r2: 0.01,
                c1: 150,
                c2: 1000
            },
            hc: { // Health contributions 2018.
                t1: 0,
                t2: 0,
                t3: 0,
                r1: 0.0,
                r2: 0.0,
                r3: 0.0,
                c1: 0,
                c2: 0,
                c3: 0
            },
            pdip: { // TODO Régime public d'assurance médicaments 2018.
                d10: 15790, // Déduction sans conjoint.
                d11: 9810, // Déduction sans conjoint, un enfant.
                d12: 13190, // Déduction sans conjoint, 2 enfants ou plus.
                d20: 25600, // Déduction avec conjoint.
                d21: 3380, // Déduction avec conjoint, un enfant.
                d22: 6505, // Déduction avec conjoint, 2 enfants ou plus.
                t1: 5000,
                t2: 14509,
                r11: 0.0688, // Taux, Particulier sans conjoint.
                r12: 0.1033, // Taux, Particulier sans conjoint.
                r21: 0.0347, // Particulier avec conjoint.
                r22: 0.0519, // Particulier avec conjoint.
                max1: 667.00,
                max2: 663.50
            }
        }
    },
    {
        year: '2017',
        name: '2017 Paramètres officiels',
        qc: {
            pit: {
                thresold1: 42705,
                thresold2: 85405,
                thresold3: 103915,
                rate1: 0.15,
                rate2: 0.20,
                rate3: 0.24,
                rate4: 0.2575,
                basicPersonalAmount: 14890,
                deductionForWorkersRate: 0.06,
                deductionForWorkersMax: 1140,
                aloneAmount: 1707,
                singleFamilyAmount: 2107,
                ageAmount: 3132,
                retraiteAmount: 2782,
                ageReductionThresold: 33755,
                ageReductionRate: 0.1875,
                creditRate: 0.15
            },
            wp: { // Work Premium 2017.
                thresold1: 10506,  // Seuil pour personne seule.
                thresold2: 16248,  // Seuil pour couple.
                deduction1: 2400,  // Déduction pour personne seule.
                deduction2: 3600,  // Déduction pour couple.
                rate1: 0.09,  // Taux d'augmentation sans enfants.
                rate2: 0.25,  // Taux d'augmentation couple avec enfants.
                rate3: 0.30,  // Taux d'augmentation monoparentale.
                reductionRate: 0.10  // Taux de réduction.
            },
            stc: { // Solidarity Tax Credit 2017.
                weight1: 1.0,
                amount11: 285, // Amount for the QST, Basic amount
                amount12: 285, // Amount for the QST, Amount for spouse
                amount13: 136, // Amount for the QST, Additional amount for person living alone
                amount14: 670, // Amount for housing, Amount for a couple
                amount15: 552, // Amount for housing, Amount for a person living alone or a single-parent family
                amount16: 118, // Amount for housing, Amount for each dependent child
                amount17: 1676, // Amount for individuals living in a northern village, Amount per adult
                amount18: 363, // Amount for individuals living in a northern village, Amount for each dependent child
                threshold1: 33935, // Solidarity tax credit reduction threshold
                weight2: 0.0,
                amount21: 0, // Amount for the QST, Basic amount
                amount22: 0, // Amount for the QST, Amount for spouse
                amount23: 0, // Amount for the QST, Additional amount for person living alone
                amount24: 0, // Amount for housing, Amount for a couple
                amount25: 0, // Amount for housing, Amount for a person living alone or a single-parent family
                amount26: 0, // Amount for housing, Amount for each dependent child
                amount27: 0, // Amount for individuals living in a northern village, Amount per adult
                amount28: 0, // Amount for individuals living in a northern village, Amount for each dependent child
                threshold2: 0 // Solidarity tax credit reduction threshold
            }
        },
        ctb: {
            ei: { // Employment insurance 2017.
                min: 2000,
                max: 51300,
                rate: 0.0163,
                rateQc: 0.0127
            },
            qpip: { // Régime québécois d'assurance parentale 2017.
                mie: 72500,
                epr: 0.00548,
                qt: 2000
            },
            qpp: { // Régime de rente du Québec 2017.
                max: 55300,
                min: 3500,
                rate: 0.054
            },
            hsf: { // Fonds des services de santé 2017.
                t1: 14545,
                t2: 50570,
                r1: 0.01,
                r2: 0.01,
                c1: 150,
                c2: 1000
            },
            hc: { // Health contributions 2017.
                t1: 0,
                t2: 0,
                t3: 0,
                r1: 0.0,
                r2: 0.0,
                r3: 0.0,
                c1: 0,
                c2: 0,
                c3: 0
            },
            pdip: { // Régime public d'assurance médicaments 2017.
                // https://www.revenuquebec.ca/documents/fr/formulaires/tp/2017-12/TP-1.D.K%282017-12%29.pdf 
                d10: 15790, // Déduction sans conjoint.
                d11: 9810, // Déduction sans conjoint, un enfant.
                d12: 13190, // Déduction sans conjoint, 2 enfants ou plus.
                d20: 25600, // Déduction avec conjoint.
                d21: 3380, // Déduction avec conjoint, un enfant.
                d22: 6505, // Déduction avec conjoint, 2 enfants ou plus.
                t1: 5000,
                t2: 14509,
                r11: 0.0688, // Taux, Particulier sans conjoint.
                r12: 0.1033, // Taux, Particulier sans conjoint.
                r21: 0.0347, // Particulier avec conjoint.
                r22: 0.0519, // Particulier avec conjoint.
                max1: 667.00,
                max2: 663.50
            }
        }
    }
];

let param = {};

/**
 * Correspond aux données du formulaire Web.
 */
class Input {
    constructor(app) {
        this.provinces = app.provinces;
        this.years = app.years;
        this.numberOfAdults = (app.couple) ? 2 : 1;
        this.numberOfChildren = app.numberOfChildren;
        this.age1 = 35; // TODO À corriger.
        this.age2 = 0; // TODO À corriger.
        this.work1 = parseFloat(app.work1);
        this.work2 = parseFloat(app.work2);
        this.pension1 = parseFloat(app.pension1);
        this.pension2 = parseFloat(app.pension2);
        this.capital1 = 0;
        this.capital2 = 0;
        this.dividendsEligible1 = 0;
        this.dividendsEligible2 = 0;
        this.dividendsNonEligible1 = 0;
        this.dividendsNonEligible2 = 0;
        this.childAge1 = 0;
        this.childAge2 = 0;
        this.childAge3 = 0;
        this.childAge4 = 0;
        this.childAge5 = 0;
        this.childCare1 = 0;
        this.childCare2 = 0;
        this.childCare3 = 0;
        this.childCare4 = 0;
        this.childCare5 = 0;
        this.childType1 = 0;
        this.childType2 = 0;
        this.childType3 = 0;
        this.childType4 = 0;
        this.childType5 = 0;
        this.choice1 = app.choice1;
        this.choice2 = app.choice2;
        this.choice3 = app.choice3;
        this.choice4 = app.choice4;
        this.invalid = app.invalid;
    }

    /**
     * Cette méthode sert à convertir un array Vue.js en un array Javascript.
     * @param {array} in
     * @return {array}  
     */
    copy(input) {
        let output = [];
        for (let i = 0; i < input.length; i++) {
            output.push(input[i]);
        }
        return output;
    } 
}

/**
 * Résultat d'une simulation pour un seul cas type sur une seule année.
 * Peut couvrir plusieurs provinces.
 */
class Result {
    constructor(input) {
        this.year = input.year;
        this.work1 = input.work1;
        this.work2 = input.work2;
        this.work = this.work1 + this.work2;
        this.pension1 = input.pension1;
        this.pension2 = input.pension2;
        this.pension = this.pension1 + this.pension2;
        this.grossIncome1 = 0;
        this.grossIncome2 = 0;
        this.grossIncome = 0;
        this.qc = {
            disposableIncome: 0,
            marginalTaxRate: 0,
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
                    total: 0,
                    marginalTaxRate: 0
                },
                sa: { // Social assistance.
                    total: 0,
                    marginalTaxRate: 0
                },
                ca: { // Child assistance.
                    total: 0,
                    marginalTaxRate: 0
                },
                spss: { // Supplement for the purchase of school supplies.
                    total: 0,
                    marginalTaxRate: 0
                },
                wp: { // Work premium.
                    total: 0,
                    marginalTaxRate: 0
                },
                stc: { // Solidarity tax credit.
                    total: 0,
                    marginalTaxRate: 0
                },
                tcce: { // Tax credit for childcare expenses.
                    total: 0,
                    marginalTaxRate: 0
                },
                sap: { // Shelter allowance program.
                    total: 0,
                    marginalTaxRate: 0
                },
                rtcme: { // Refundable tax credit for medical expenses.
                    total: 0,
                    marginalTaxRate: 0
                },
                ttp: { // Transferts totaux.
                    total: 0,
                    marginalTaxRate: 0
                },
                total: 0,
                marginalTaxRate: 0
            },
            ca: {
                pit: { // Personal income tax.
                    total: 0,
                    marginalTaxRate: 0
                },
                ccb: { // Child care benefit.
                    total: 0,
                    marginalTaxRate: 0
                },
                gst: { // GST credit.
                    total: 0,
                    marginalTaxRate: 0
                },
                witb: { // Working income tax benefit.
                    total: 0,
                    marginalTaxRate: 0
                },
                oasp: { // Old Age Security program.
                    total: 0,
                    marginalTaxRate: 0
                },
                rmes: { // Refundable medical expense supplement.
                    total: 0,
                    marginalTaxRate: 0
                },
                ttp: { // Transferts totaux.
                    total: 0,
                    marginalTaxRate: 0
                },
                total: 0,
                marginalTaxRate: 0
            },
            ctb: {
                ei: { // Employment insurance.
                    total: 0,
                    marginalTaxRate: 0
                },
                qpip: { // Québec Parental Insurance Plan.
                    total: 0,
                    marginalTaxRate: 0
                },
                qpp: { // Québec Pension Plan.
                    total: 0,
                    marginalTaxRate: 0
                },
                hsf: { // Health Services Fund.
                    total: 0,
                    marginalTaxRate: 0
                },
                hc: { // Health contribution.
                    total: 0,
                    marginalTaxRate: 0
                },
                pdip: { // Québec Prescription Drug Insurance Plan.
                    income: 0,
                    total: 0,
                    marginalTaxRate: 0
                },
                total: 0,
                marginalTaxRate: 0
            }
        }
        this.childCare = 0;
    }
}

class Tax {
    constructor(app) {
        this.input = new Input(app);
    }

    compute() {
        console.log("Tax.compute!");

        // Initialiser la liste ds résultats.
        this.results = [];

        // Éventuellement, on pourrait boucler sur chaque année et accumuler les résultats dans un vecteur.
        this.input.year = this.input.years;

        // Obtenir les paramètres sociofiscaux de l'année choisie.

        /*
        let index = params.findIndex(p => p.year === this.input.year)
        if (index >= 0) {
            this.param = params[index]
        } else {
            // Not supposed!
            console.log("L750 Not supposed!");
        }
        */

        // See https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
        this.param = params.find(p => p.year === this.input.year);

        // Étape 1A: Calculer le même cas mais avec 1000$ de plus de revenu de travail.
        let result2 = new Result(this.input);
        if (this.input.numberOfAdults == 1) {
            result2.work1 += 1000;
        } else if (this.input.work > 0) {
            result2.work1 += 1000 * this.input.work1 / this.input.work;
        } else {
            result2.work1 += 500;
        }
        result2.work += 1000;
        result2.work2 = result2.work - result2.work1;
        this.computeQuebec(this.param, this.input, result2, null);

        // Étape 1B: Calculer le cas avec les revenus indiqués.
        let result1 = new Result(this.input);
        this.computeQuebec(this.param, this.input, result1, result2);
        
        // Conserver le résultat.
        this.results.push(result1);

        if (this.input.choice3 || this.input.choice4) {
            let abc = null;
            console.log("for loop...");
            for (let income = 251000; income >= 0; income -= 1000) {
                let result3 = new Result(this.input);
                if (this.input.numberOfAdults == 1) {
                    result3.work1 = income;
                } else if (this.input.work > 0) {
                    result3.work1 = income * this.input.work1 / this.input.work;
                } else {
                    result3.work1 = income / 2;
                }
                result3.work = income;
                result3.work2 = result3.work - result3.work1;
                this.computeQuebec(this.param, this.input, result3, abc);

                this.results.push(result3);
                abc = result3;
            }
        }
    }

    computeQuebec(param, input, result, result2) {
        if (!this.input.provinces.includes("QC")) return; 
        
        // INCOME.
        // result.work = result.work1 + result.work2;
        // result.pension = result.pension1 + result.pension2;
        // result.capital = input.capital1 + input.capital2;
        // result.dividendsEligible = input.dividendsEligible1 + input.dividendsEligible2;
        // result.dividendsNonEligible = input.dividendsNonEligible1 + input.dividendsNonEligible2;

        // result.grossIncome1 = result.work1 + result.pension1 + input.capital1 + input.dividendsEligible1 + input.dividendsNonEligible1;
        // result.grossIncome2 = result.work2 + result.pension2 + input.capital2 + input.dividendsEligible2 + input.dividendsNonEligible2;

        result.grossIncome1 = result.work1 + result.pension1;
        result.grossIncome2 = result.work2 + result.pension2;
        result.grossIncome = result.grossIncome1 + result.grossIncome2

        // CHILD CARE EXPENSES.
        result.childCare = this.childCare1 + this.childCare2 + this.childCare3 + this.childCare4 + this.childCare5;
        result.childCare = 0;
        
        // PERSONNAL INCOME TAX.
        // Total income (L101)
        result.qc.qc.pit.totalIncome1 = result.work1;
        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.totalIncome2 = result.work2;
        } else {
            result.qc.qc.pit.totalIncome2 = 0;
        }

        // Deduction for workers (L201)
        result.qc.qc.pit.deductionForWorkers1 = Math.min(result.work1 *param.qc.pit.deductionForWorkersRate, param.qc.pit.deductionForWorkersMax);
        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.deductionForWorkers2 = Math.min(result.work2 * param.qc.pit.deductionForWorkersRate, param.qc.pit.deductionForWorkersMax);
        } else {
            result.qc.qc.pit.deductionForWorkers2 = 0;
        }

        // Net income (L275)
        result.qc.qc.pit.netIncome1 = Math.max(result.qc.qc.pit.totalIncome1 - result.qc.qc.pit.deductionForWorkers1, 0);
        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.netIncome2 = Math.max(result.qc.qc.pit.totalIncome2 - result.qc.qc.pit.deductionForWorkers2, 0);
        } else {
            result.qc.qc.pit.netIncome2 = 0;
        }

        // Family Income (B Schedule, L14)
        result.qc.qc.pit.netIncome = result.qc.qc.pit.netIncome1 + result.qc.qc.pit.netIncome2;

        // Taxable income (L299)
        result.qc.qc.pit.taxableIncome1 = result.qc.qc.pit.netIncome1;
        result.qc.qc.pit.taxableIncome2 = result.qc.qc.pit.netIncome2;

        // Basic personal amount (L350)
        result.qc.qc.pit.basicPersonalAmount1 = param.qc.pit.basicPersonalAmount;
        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.basicPersonalAmount2 = param.qc.pit.basicPersonalAmount;
        } else {
            result.qc.qc.pit.basicPersonalAmount2 = 0;
        }

        // Age amount, amount for a person living alone and amount for retirement income (L361)
        result.qc.qc.pit.ageAmount1 = 0;
        if (input.numberOfAdults === 1) {
            result.qc.qc.pit.ageAmount1 += param.qc.pit.aloneAmount;
            if (input.numberOfChildren > 0) {
                result.qc.qc.pit.ageAmount1 += param.qc.pit.singleFamilyAmount;
            }
        }
        if (input.age1 >= 65) {
            result.qc.qc.pit.ageAmount1 += param.qc.pit.ageAmount;
        }
        if (input.numberOfAdults === 2 && input.age2 >= 65) {
            result.qc.qc.pit.ageAmount1 += param.qc.pit.ageAmount;
        }
        result.qc.qc.pit.ageAmount1 = Math.max(0, result.qc.qc.pit.ageAmount1 - Math.max(result.qc.qc.pit.netIncome - param.qc.pit.ageReductionThresold, 0) * param.qc.pit.ageReductionRate);

        // TODO: Optimisation.
        result.qc.qc.pit.ageAmount2 = 0;

        // Non-refundable tax credits (L399)
        result.qc.qc.pit.nonRefundableTaxCredits1 = (result.qc.qc.pit.basicPersonalAmount1 + result.qc.qc.pit.ageAmount1) * param.qc.pit.creditRate;

        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.nonRefundableTaxCredits2 = (result.qc.qc.pit.basicPersonalAmount2 + result.qc.qc.pit.ageAmount2) * param.qc.pit.creditRate;
        } else {
            result.qc.qc.pit.nonRefundableTaxCredits2 = 0;
        }

        // Income tax on taxable income (L401).
        result.qc.qc.pit.incomeTaxBeforeCredits1 =
            Math.min(result.qc.qc.pit.taxableIncome1, param.qc.pit.thresold1) * param.qc.pit.rate1;
        if (result.qc.qc.pit.taxableIncome1 > param.qc.pit.thresold1) {
            result.qc.qc.pit.incomeTaxBeforeCredits1 +=
                Math.min(result.qc.qc.pit.taxableIncome1 - param.qc.pit.thresold1,
                    param.qc.pit.thresold2 - param.qc.pit.thresold1) * param.qc.pit.rate2;
            if (result.qc.qc.pit.taxableIncome1 > param.qc.pit.thresold2) {
                result.qc.qc.pit.incomeTaxBeforeCredits1 +=
                    Math.min(result.qc.qc.pit.taxableIncome1 - param.qc.pit.thresold2,
                        param.qc.pit.thresold3 - param.qc.pit.thresold2) * param.qc.pit.rate3;
                if (result.qc.qc.pit.taxableIncome1 > param.qc.pit.thresold3) {
                    result.qc.qc.pit.incomeTaxBeforeCredits1 +=
                        (result.qc.qc.pit.taxableIncome1 - param.qc.pit.thresold3) * param.qc.pit.rate4;
                }
            }
        }

        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.incomeTaxBeforeCredits2 =
            Math.min(result.qc.qc.pit.taxableIncome2, param.qc.pit.thresold1) * param.qc.pit.rate1;
            if (result.qc.qc.pit.taxableIncome2 > param.qc.pit.thresold1) {
                result.qc.qc.pit.incomeTaxBeforeCredits2 +=
                    Math.min(result.qc.qc.pit.taxableIncome2 - param.qc.pit.thresold1,
                        param.qc.pit.thresold2 - param.qc.pit.thresold1) * param.qc.pit.rate2;
                if (result.qc.qc.pit.taxableIncome2 > param.qc.pit.thresold2) {
                    result.qc.qc.pit.incomeTaxBeforeCredits2 +=
                        Math.min(result.qc.qc.pit.taxableIncome2 - param.qc.pit.thresold2,
                            param.qc.pit.thresold3 - param.qc.pit.thresold2) * param.qc.pit.rate3;
                    if (result.qc.qc.pit.taxableIncome2 > param.qc.pit.thresold3) {
                        result.qc.qc.pit.incomeTaxBeforeCredits2 +=
                            (result.qc.qc.pit.taxableIncome2 - param.qc.pit.thresold3) * param.qc.pit.rate4;
                    }
                }
            }
        } else {
            result.qc.qc.pit.incomeTaxBeforeCredits2 = 0;
        }

        // Income tax (L450)
        result.qc.qc.pit.total1 = Math.max(0, result.qc.qc.pit.incomeTaxBeforeCredits1 - result.qc.qc.pit.nonRefundableTaxCredits1);
        result.qc.qc.pit.total1 = round10(result.qc.qc.pit.total1, -2);

        if (input.numberOfAdults === 2) {
            result.qc.qc.pit.total2 = Math.max(0, result.qc.qc.pit.incomeTaxBeforeCredits2 - result.qc.qc.pit.nonRefundableTaxCredits2);
            result.qc.qc.pit.total2 = round10(result.qc.qc.pit.total2, -2);
        } else {
            result.qc.qc.pit.total2 = 0;
        }
        result.qc.qc.pit.total = -1 * (result.qc.qc.pit.total1 + result.qc.qc.pit.total2);

        /* SOCIAL ASSISTANCE, AIDE SOCIALE */
        if (input.numberOfAdults === 1) {
            // result.qc.qc.sa.total = Math.max(param.qc.sa.amount1 * 12 -
            //     Math.max(result.work - param.qc.sa.workIncomeExemption1 * 12, 0), 0)
        } else {
            // result.qc.qc.sa.total = Math.max(param.qc.sa.amount2 * 12 -
            //    Math.max(result.work - param.qc.sa.workIncomeExemption2 * 12, 0), 0)
        }
        result.qc.qc.sa.total = -0.03 * result.grossIncome;

        /* Soutien aux enfants */
        result.qc.qc.ca.total = -0.03 * result.grossIncome;

        /* Supplément pour l'achat de matériel scolaire */
        result.qc.qc.spss.total = -0.03 * result.grossIncome;

        /* WORK PREMIUM, PRIME AU TRAVAIL */
        if (input.numberOfAdults === 1) {
            result.qc.qc.wp.total = Math.max(Math.min(result.work, param.qc.wp.thresold1) - param.qc.wp.deduction1, 0);
            if (input.numberOfChildren === 0) {
                result.qc.qc.wp.total *= param.qc.wp.rate1;
            } else {
                result.qc.qc.wp.total *= param.qc.wp.rate3;
            }
        } else {
            result.qc.qc.wp.total = Math.max(Math.min(result.work, param.qc.wp.thresold2) - param.qc.wp.deduction2, 0);
            if (input.numberOfChildren === 0) {
                result.qc.qc.wp.total *= param.qc.wp.rate1;
            } else {
                result.qc.qc.wp.total *= param.qc.wp.rate2;
            }
        }

        if (result.qc.qc.wp.total > 0) {
            result.qc.qc.wp.total = Math.max(result.qc.qc.wp.total -
                Math.max(result.qc.qc.pit.netIncome - param.qc.wp.thresold1, 0) * param.qc.wp.reductionRate, 0);
        }
        result.qc.qc.wp.total = 0.03 * result.grossIncome;

        /* Crédit d'impôt pour la solidarité */
        result.qc.qc.stc.total = 0.03 * result.grossIncome;

        /* Crédit d'impôt pour frais de garde */
        result.qc.qc.tcce.total = 0.03 * result.grossIncome;

        /* Allocation logement. */
        result.qc.qc.sap.total = 0.03 * result.grossIncome;

        // Crédit d'impôt remboursable pour frais médicaux.
        result.qc.qc.rtcme.total = 0.03 * result.grossIncome;

        // Transferts aux particuliers du Québec.
        result.qc.qc.ttp.total = result.qc.qc.sa.total + result.qc.qc.ca.total + result.qc.qc.spss.total 
            + result.qc.qc.wp.total + result.qc.qc.stc.total + result.qc.qc.tcce.total 
            + result.qc.qc.sap.total + result.qc.qc.rtcme.total;

        /* Prélèvement total au Québec. */
        result.qc.qc.total = result.qc.qc.pit.total + result.qc.qc.ttp.total;

        /* Impôt sur le revenu du Canada. */
        result.qc.ca.pit.total = -0.10 * result.grossIncome;

        /* Allocation canadienne pour enfants */
        result.qc.ca.ccb.total = 0.03 * result.grossIncome;

        /* Crédit pour la TPS */
        result.qc.ca.gst.total = 0.03 * result.grossIncome;

        /* Prestation fiscale pour le revenu de travail */
        result.qc.ca.witb.total = 0.03 * result.grossIncome;

        /* Programme de la Sécurité de la vieillesse */
        result.qc.ca.oasp.total = 0.03 * result.grossIncome;

        /* Supplément remboursable pour frais médicaux. */
        result.qc.ca.rmes.total = 0.03 * result.grossIncome;

        // Transferts aux particuliers du Canada.
        result.qc.ca.ttp.total = result.qc.ca.ccb.total + result.qc.ca.gst.total + result.qc.ca.witb.total 
            + result.qc.ca.oasp.total + result.qc.ca.rmes.total;

        /* Prélèvement total au Canada */
        result.qc.ca.total = result.qc.ca.pit.total + result.qc.ca.ttp.total;

        // ASSURANCE EMPLOI (EI).
        // Deduct EI premiums from each dollar of insurable earnings up to the yearly maximum.
        // Employees who earn $2,000 or less in a year can claim a refund of EI premiums on their
        // individual income tax and benefit return for the year.
        // http://www.cra-arc.gc.ca/tx/bsnss/tpcs/pyrll/clcltng/ei/menu-eng.html
        // https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html        
        if (result.work1 > param.ctb.ei.min) {
            result.qc.ctb.ei.adult1 = Math.min(param.ctb.ei.max, result.work1) * param.ctb.ei.rateQc;
            result.qc.ctb.ei.adult1 = -1 * round10(result.qc.ctb.ei.adult1, -2);
        } else {
            result.qc.ctb.ei.adult1 = 0;
        }

        if (input.withSpouse && result.work2 > param.ctb.ei.min) {
            result.qc.ctb.ei.adult2 = Math.min(param.ctb.ei.max, result.work2) * param.ctb.ei.rateQc;
            result.qc.ctb.ei.adult2 = -1 * round10(result.qc.ctb.ei.adult2, -2);
        } else {
            result.qc.ctb.ei.adult2 = 0;
        }

        result.qc.ctb.ei.total = result.qc.ctb.ei.adult1 + result.qc.ctb.ei.adult2;

        // RÉGIME QUÉBÉCOIS D'ASSURANCE PARENTALE.
        // http://www.rqap.gouv.qc.ca/a_propos_regime/information_generale/cotisations.asp
        // Québec Parental Insurance Plan (QPIP)
        // http://www.rqap.gouv.qc.ca/a_propos_regime/information_generale/cotisations_en.asp
        if (result.work1 > param.ctb.qpip.qt) {
            result.qc.ctb.qpip.adult1 = Math.min(param.ctb.qpip.mie, result.work1) * param.ctb.qpip.epr;
            result.qc.ctb.qpip.adult1 = -1 * round10(result.qc.ctb.qpip.adult1, -2);
        } else {
            result.qc.ctb.qpip.adult1 = 0;
        }

        if (input.withSpouse && result.work2 > param.ctb.qpip.qt) {
            result.qc.ctb.qpip.adult2 = Math.min(param.ctb.qpip.mie, result.work2) * param.ctb.qpip.epr;
            result.qc.ctb.qpip.adult2 = -1 * round10(result.qc.ctb.qpip.adult2, -2);
        } else {
            result.qc.ctb.qpip.adult2 = 0;
        }

        result.qc.ctb.qpip.total = result.qc.ctb.qpip.adult1 + result.qc.ctb.qpip.adult2;

        // RÉGIME DES RENTES DU QUÉBEC.
        // http://www.rrq.gouv.qc.ca/fr/programmes/regime_rentes/regime_chiffres/Pages/regime_chiffres.aspx
        // Québec Pension Plan (QPP)
        // https://www.rrq.gouv.qc.ca/en/programmes/regime_rentes/regime_chiffres/Pages/regime_chiffres.aspx
        if (result.work1 > param.ctb.qpp.min) {
            result.qc.ctb.qpp.adult1 = (Math.min(param.ctb.qpp.max, result.work1) - param.ctb.qpp.min) * param.ctb.qpp.rate;
            result.qc.ctb.qpp.adult1 = -1 * round10(result.qc.ctb.qpp.adult1, -2);
        } else {
            result.qc.ctb.qpp.adult1 = 0;
        }

        if (input.withSpouse && result.work2 > param.ctb.qpp.min) {
            result.qc.ctb.qpp.adult2 = (Math.min(param.ctb.qpp.max, result.work2) - param.ctb.qpp.min) * param.ctb.qpp.rate;
            result.qc.ctb.qpp.adult2 = -1 * round10(result.qc.ctb.qpp.adult2, -2);
        } else {
            result.qc.ctb.qpp.adult2 = 0;
        }

        result.qc.ctb.qpp.total = result.qc.ctb.qpp.adult1 + result.qc.ctb.qpp.adult2;

        // FONDS DES SERVICES DE SANTÉ.
        // http://www.planiguide.ca/planiguide/module-12-programmes-et-charges-sociales/fonds-des-services-de-sante-quebec/
        // https://www.revenuquebec.ca/documents/fr/formulaires/tp/2017-12/TP-1.D.F%282017-12%29.pdf
        // Contribution to the Health Services Fund (HSF).
        var income1 = result.pension1 + input.capital1 + input.dividendsEligible1 + input.dividendsNonEligible1;
        if (income1 < param.ctb.hsf.t1) {
            result.qc.ctb.hsf.adult1 = 0;
        } else if (income1 < param.ctb.hsf.t2) {
            result.qc.ctb.hsf.adult1 = Math.min((income1 - param.ctb.hsf.t1) * param.ctb.hsf.r1, param.ctb.hsf.c1);
            result.qc.ctb.hsf.adult1 = -1 * round10(result.qc.ctb.hsf.adult1, -2);
        } else {
            result.qc.ctb.hsf.adult1 = Math.min((income1 - param.ctb.hsf.t2) * param.ctb.hsf.r2 + param.ctb.hsf.c1, param.ctb.hsf.c2);
            result.qc.ctb.hsf.adult1 = -1 * round10(result.qc.ctb.hsf.adult1, -2);
        }

        if (input.withSpouse) {
            var income2 = result.pension2 + input.capital2 + input.dividendsEligible2 + input.dividendsNonEligible2;
            if (income2 < param.ctb.hsf.t1) {
                result.qc.ctb.hsf.adult2 = 0;
            } else if (income2 < param.ctb.hsf.t2) {
                result.qc.ctb.hsf.adult2 = Math.min((income2 - param.ctb.hsf.t1) * param.ctb.hsf.r1, param.ctb.hsf.c1);
                result.qc.ctb.hsf.adult2 = -1 * round10(result.qc.ctb.hsf.adult2, -2);
            } else {
                result.qc.ctb.hsf.adult2 = Math.min((income2 - param.ctb.hsf.t2) * param.ctb.hsf.r2 + param.ctb.hsf.c1, param.ctb.hsf.c2);
                result.qc.ctb.hsf.adult2 = -1 * round10(result.qc.ctb.hsf.adult2, -2);
            }
        } else {
            result.qc.ctb.hsf.adult2 = 0;
        }

        result.qc.ctb.hsf.total = result.qc.ctb.hsf.adult1 + result.qc.ctb.hsf.adult2;

        // CONTRIBUTION SANTÉ.
        // http://www.revenuquebec.ca/documents/fr/formulaires/tp/2016-12/TP-1.D.GR(2016-12).pdf
        if (result.qc.qc.pit.netIncome1 <= param.ctb.hc.t1) {
            result.qc.ctb.hc.adult1 = 0;
        } else if (result.qc.qc.pit.netIncome1 <= param.ctb.hc.t2) {
            result.qc.ctb.hc.adult1 = Math.min((result.qc.qc.pit.netIncome1 - param.ctb.hc.t1) * param.ctb.hc.r1, param.ctb.hc.c1);
            result.qc.ctb.hc.adult1 = -1 * round10(result.qc.ctb.hc.adult1, -2);
        } else if (result.qc.qc.pit.netIncome1 <= param.ctb.hc.t3) {
            result.qc.ctb.hc.adult1 = Math.min((result.qc.qc.pit.netIncome1 - param.ctb.hc.t2) * param.ctb.hc.r2 + param.ctb.hc.c1, param.ctb.hc.c2);
            result.qc.ctb.hc.adult1 = -1 * round10(result.qc.ctb.hc.adult1, -2);
        } else {
            result.qc.ctb.hc.adult1 = Math.min((result.qc.qc.pit.netIncome1 - param.ctb.hc.t3) * param.ctb.hc.r3 + param.ctb.hc.c2, param.ctb.hc.c3);
            result.qc.ctb.hc.adult1 = -1 * round10(result.qc.ctb.hc.adult1, -2);
        }

        if (input.withSpouse) {
            if (result.qc.qc.pit.netIncome2 <= param.ctb.hc.t1) {
                result.qc.ctb.hc.adult2 = 0;
            } else if (result.qc.qc.pit.netIncome2 <= param.ctb.hc.t2) {
                result.qc.ctb.hc.adult2 = Math.min((result.qc.qc.pit.netIncome2 - param.ctb.hc.t1) * param.ctb.hc.r1, param.ctb.hc.c1);
                result.qc.ctb.hc.adult2 = -1 * round10(result.qc.ctb.hc.adult2, -2);
            } else if (result.qc.qc.pit.netIncome2 <= param.ctb.hc.t3) {
                result.qc.ctb.hc.adult2 = Math.min((result.qc.qc.pit.netIncome2 - param.ctb.hc.t2) * param.ctb.hc.r2 + param.ctb.hc.c1, param.ctb.hc.c2);
                result.qc.ctb.hc.adult2 = -1 * round10(result.qc.ctb.hc.adult2, -2);
            } else {
                result.qc.ctb.hc.adult2 = Math.min((result.qc.qc.pit.netIncome2 - param.ctb.hc.t3) * param.ctb.hc.r3 + param.ctb.hc.c2, param.ctb.hc.c3);
                result.qc.ctb.hc.adult2 = -1 * round10(result.qc.ctb.hc.adult2, -2);
            }
        } else {
            result.qc.ctb.hc.adult2 = 0;
        }

        result.qc.ctb.hc.total = result.qc.ctb.hc.adult1 + result.qc.ctb.hc.adult2;

        // QUEBEC PUBLIC DRUG INSURANCE PLAN (pdip)
        // Régime public d'assurance médicaments du Québec.
        result.qc.ctb.pdip.income = result.qc.qc.pit.netIncome;

        if (input.numberOfAdults === 1) {
            result.qc.ctb.pdip.income -= param.ctb.pdip.d10;
            if (input.numberOfChildren === 1) {
                result.qc.ctb.pdip.income -= param.ctb.pdip.d11;
            } else if (input.numberOfChildren >= 2) {
                result.qc.ctb.pdip.income -= param.ctb.pdip.d12;
            }
        } else {
            result.qc.ctb.pdip.income -= param.ctb.pdip.d20;
            if (input.numberOfChildren === 1) {
                result.qc.ctb.pdip.income -= param.ctb.pdip.d21;
            } else if (input.numberOfChildren >= 2) {
                result.qc.ctb.pdip.income -= param.ctb.pdip.d22;
            }
        }

        if (result.qc.ctb.pdip.income < 0) {
            result.qc.ctb.pdip.income = 0;
        }

        if (input.numberOfAdults === 1) {
            if (result.qc.ctb.pdip.income <= param.ctb.pdip.t1) {
                result.qc.ctb.pdip.total = result.qc.ctb.pdip.income * param.ctb.pdip.r11;
            } else if (result.qc.ctb.pdip.income <= param.ctb.pdip.t2) {
                result.qc.ctb.pdip.total = (result.qc.ctb.pdip.income - param.ctb.pdip.t1) * param.ctb.pdip.r12 + param.ctb.pdip.t1 * param.ctb.pdip.r11;
            } else {
                result.qc.ctb.pdip.total = param.ctb.pdip.max1;
            }
        } else {
            if (result.qc.ctb.pdip.income <= param.ctb.pdip.t1) {
                result.qc.ctb.pdip.total = result.qc.ctb.pdip.income * param.ctb.pdip.r21;
            } else if (result.qc.ctb.pdip.income <= param.ctb.pdip.t2) {
                result.qc.ctb.pdip.total = (result.qc.ctb.pdip.income - param.ctb.pdip.t1) * param.ctb.pdip.r22 + param.ctb.pdip.t1 * param.ctb.pdip.r21;
            } else {
                result.qc.ctb.pdip.total = param.ctb.pdip.max1;
            }
        }

        result.qc.ctb.pdip.total = Math.min(result.qc.ctb.pdip.total, param.ctb.pdip.max1);
        result.qc.ctb.pdip.total = -1 * Math.min(result.qc.ctb.pdip.total, param.ctb.pdip.max2);

        // COTISATION TOTALE.
        result.qc.ctb.total = result.qc.ctb.ei.total + result.qc.ctb.qpip.total + result.qc.ctb.qpp.total +
            result.qc.ctb.hsf.total + result.qc.ctb.hc.total + result.qc.ctb.pdip.total;

        // FRAIS DE GARDE.

        // REVENU DISPONIBLE.
        result.qc.disposableIncome = result.grossIncome + result.qc.qc.total + result.qc.ca.total + result.qc.ctb.total;

        // Calculer les taux marginaux.
        if (result2) {
            // console.log(JSON.stringify(result.qc.ctb, null, 4));
            // console.log(JSON.stringify(result2.qc.ctb, null, 4));

            // Québec.
            result.qc.qc.pit.marginalTaxRate = (result.qc.qc.pit.total - result2.qc.qc.pit.total) / 10; 
            result.qc.qc.sa.marginalTaxRate = (result.qc.qc.sa.total - result2.qc.qc.sa.total) / 10;
            result.qc.qc.ca.marginalTaxRate = (result.qc.qc.ca.total - result2.qc.qc.ca.total) / 10;
            result.qc.qc.spss.marginalTaxRate = (result.qc.qc.spss.total - result2.qc.qc.spss.total) / 10;
            result.qc.qc.wp.marginalTaxRate = (result.qc.qc.wp.total - result2.qc.qc.wp.total) / 10;
            result.qc.qc.stc.marginalTaxRate = (result.qc.qc.stc.total - result2.qc.qc.stc.total) / 10;
            result.qc.qc.tcce.marginalTaxRate = (result.qc.qc.tcce.total - result2.qc.qc.tcce.total) / 10;
            result.qc.qc.sap.marginalTaxRate = (result.qc.qc.sap.total - result2.qc.qc.sap.total) / 10;
            result.qc.qc.rtcme.marginalTaxRate = (result.qc.qc.rtcme.total - result2.qc.qc.rtcme.total) / 10;
            result.qc.qc.ttp.marginalTaxRate = (result.qc.qc.ttp.total - result2.qc.qc.ttp.total) / 10;
            result.qc.qc.marginalTaxRate = (result.qc.qc.total - result2.qc.qc.total) / 10;
            
            // Canada.
            result.qc.ca.pit.marginalTaxRate = (result.qc.ca.pit.total - result2.qc.ca.pit.total) / 10;
            result.qc.ca.ccb.marginalTaxRate = (result.qc.ca.ccb.total - result2.qc.ca.ccb.total) / 10;
            result.qc.ca.gst.marginalTaxRate = (result.qc.ca.gst.total - result2.qc.ca.gst.total) / 10;
            result.qc.ca.witb.marginalTaxRate = (result.qc.ca.witb.total - result2.qc.ca.witb.total) / 10;
            result.qc.ca.oasp.marginalTaxRate = (result.qc.ca.oasp.total - result2.qc.ca.oasp.total) / 10;
            result.qc.ca.rmes.marginalTaxRate = (result.qc.ca.rmes.total - result2.qc.ca.rmes.total) / 10;
            result.qc.ca.ttp.marginalTaxRate = (result.qc.ca.ttp.total - result2.qc.ca.ttp.total) / 10;
            result.qc.ca.marginalTaxRate = (result.qc.ca.total - result2.qc.ca.total) / 10;

            // Cotisations.
            result.qc.ctb.ei.marginalTaxRate = (result.qc.ctb.ei.total - result2.qc.ctb.ei.total) / 10;
            result.qc.ctb.qpip.marginalTaxRate = (result.qc.ctb.qpip.total - result2.qc.ctb.qpip.total) / 10;
            result.qc.ctb.qpp.marginalTaxRate = (result.qc.ctb.qpp.total - result2.qc.ctb.qpp.total) / 10;
            result.qc.ctb.hsf.marginalTaxRate = (result.qc.ctb.hsf.total - result2.qc.ctb.hsf.total) / 10;
            result.qc.ctb.hc.marginalTaxRate = (result.qc.ctb.hc.total - result2.qc.ctb.hc.total) / 10;
            result.qc.ctb.pdip.marginalTaxRate = (result.qc.ctb.pdip.total - result2.qc.ctb.pdip.total) / 10;
            result.qc.ctb.marginalTaxRate = (result.qc.ctb.total - result2.qc.ctb.total) / 10;
            result.qc.marginalTaxRate = (1000 - result2.qc.disposableIncome + result.qc.disposableIncome) / 10;
        }
    }
}

var app = new Vue({ 
    el: "#app",
    i18n,
    data: {
        provinces: "QC",
        years: "2018",
        family: "10",
        couple: false,
        work1: 50000,
        work1Invalid: false,
        work2: 0,
        pension1: 0,
        pension2: 0,
        numberOfChildren: 0,
        age1: "3",
        age2: "0",
        choice1: false,
        choice2: true,
        choice3: false,
        choice4: false,
        invalid: 0,
        result: {},
        results: []
    },
    created: function () {
        this.calculate();
    },
    watch: {
        provinces: function (val) {
            this.calculate();
        },
        years: function (val) {
            this.calculate();
        },
        family: function (val) {
            app.couple = (val.toString().charAt(0) == "2");
            app.numberOfChildren = parseInt(val.toString().charAt(1));
            this.calculate();
        },
        age1: function (val) {
            this.calculate();
        },
        age2: function (val) {
            this.calculate();
        },
        work1: function (val) {
            this.calculate();
        },
        work2: function (val) {
            this.calculate();
        },
        pension1: function (val) {
            this.calculate();
        },
        pension2: function (val) {
            this.calculate();
        },
        choice3: function (val) {
            if (val && app.results.length == 1) {
                this.calculate();
            }
        },
        choice4: function (val) {
            if (val && app.results.length == 1) {
                this.calculate();
            }
        }
    },
    methods: {
        changeLanguage: function (event) {
            i18n.locale = i18n.locale === "en" ? "fr" : "en";
        },
        initialize: function (event) {
            console.log("Vue.initialize!");

            this.provinces = "QC";
            this.years = "2018";
            this.family = "10";
            this.couple = false;
            this.work1 = 50000;
            this.work1Invalid = false;
            this.work2 = 0;
            this.pension1 = 0;
            this.pension2 = 0;
            this.numberOfChildren = 0;
            this.age1 = "3";
            this.age2 = "3";
            this.choice1 = false;
            this.choice2 = true;
            this.choice3 = false;
            this.choice4 = false;
            this.invalid = 0;
        },
        validate: function () {
            console.log("Vue.validate!");
            this.invalid = 0;

            this.showInvalid("provinces", !this.provinces);
            this.showInvalid("years", !this.years);

            let work1 = Number.parseFloat(this.work1);
            this.showInvalid("work1", Number.isNaN(work1) || work1 < 0 || work1 > 250000);

            let pension1 = Number.parseFloat(this.pension1);
            this.showInvalid("pension1", Number.isNaN(pension1) || pension1 < 0 || pension1 > 250000);

            return this.invalid;
        },
        showInvalid: function (id, ok) {
            if (ok) {
                $("#" + id + "-invalid").css("display", "block");
                $("#" + id).addClass("is-invalid");
                this.invalid++;
            } else {
                $("#" + id + "-invalid").css("display", "none");
                $("#" + id).removeClass("is-invalid");
            }
        },
        calculate: function () {
            console.log("Vue.calculate!");
            if (this.validate() > 0) return;

            let tax = new Tax(this);
            tax.compute();
            this.result = tax.results[0];
            this.results = tax.results;
            this.updateChart1();
            this.updateChart2();

            // See https://momentjs.com/
            const currentDate = moment().format('YYYY/MM/DD');
        }, 
        updateChart1: function () {
            if (!this.choice3) return;
            console.log("Vue.updateChart1!");

            // https://medium.freecodecamp.org/learn-d3-js-in-5-minutes-c5ec29fb0725
            // https://www.delimited.io/blog/2014/3/3/creating-multi-series-charts-in-d3-lines-bars-area-and-streamgraphs
            // https://www.dashingd3js.com/svg-basic-shapes-and-d3js
            var svg = d3.select("#chart1");
            svg.style("background-color", 'red');
            svg.append('rect')
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 200)
                .attr('height', 100)
                .attr('fill', 'green');
        },
        updateChart2: function () {
            if (!this.choice4) return;
            console.log("Vue.updateChart2!");
            
            let results = this.results;

            function redraw (results) {
                console.log("redraw...");
                var chartDiv = document.getElementById("chart2");
                while (chartDiv.firstChild) {
                    chartDiv.removeChild(chartDiv.firstChild);
                }

                var divWidth = chartDiv.offsetWidth,
                    divHeight = divWidth * 0.8;

                var margin = {top: 20, right: 10, bottom: 30, left: 40},
                    width = divWidth - margin.left - margin.right,
                    height = divHeight - margin.top - margin.bottom;

                var formatNumber = d3.format(".0f"),
                    formatBillion = function(x) { return formatNumber(x / 1e3); };

                // Set the ranges.
                var x = d3.scaleLinear().domain([0, 4]).range([0, width]).nice();
                var y = d3.scaleLinear().domain([0, 600]).range([height, 0]).nice();

                var area = d3.area()
                    .x(function(d, i) { return x(i); })
                    .y0(function(d) { return y(d[0]); })
                    .y1(function(d) { return y(d[1]); });

                // See https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89
                var line = d3.line()
                    .x(function(d, i) { return x(i); })
                    .y(function(d) { return y(d.tmit); });

                // Append the svg obgect to the body of the page.
                var svg = d3.select("#chart2").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform",
                        "translate(" + margin.left + "," + margin.top + ")");

                // See https://github.com/d3/d3-scale-chromatic/blob/master/README.md#schemeSet3
                var colors = d3.schemeSpectral[11];

                // See https://d3indepth.com/scales/
                var sequentialScale = d3.scaleSequential()
                    .domain([0, 21])
                    .interpolator(d3.interpolateSpectral);

                // gridlines in x axis function
                function make_x_gridlines() {		
                    return d3.axisBottom(x).ticks(2)
                }

                // gridlines in y axis function
                function make_y_gridlines() {		
                    return d3.axisLeft(y).ticks(5)
                }

                let data = [];
                let datax = [];
                for (let income = 0; income <= 250000; income += 1000) {
                    // See https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find
                    let d = results.find(d => d.grossIncome === income);
                    data.push({
                        income: d.grossIncome,

                        // Québec.
                        qc_pit: d.qc.qc.pit.marginalTaxRate,
                        qc_sa: d.qc.qc.sa.marginalTaxRate,
                        qc_ca: d.qc.qc.ca.marginalTaxRate,
                        qc_spss: d.qc.qc.spss.marginalTaxRate,
                        qc_wp: d.qc.qc.wp.marginalTaxRate,
                        qc_stc: d.qc.qc.stc.marginalTaxRate,
                        qc_tcce: d.qc.qc.tcce.marginalTaxRate,
                        qc_sap: d.qc.qc.sap.marginalTaxRate,
                        qc_rtcme: d.qc.qc.rtcme.marginalTaxRate,
                        
                        // Canada.
                        ca_pit: d.qc.ca.pit.marginalTaxRate,
                        ca_ccb: d.qc.ca.ccb.marginalTaxRate,
                        ca_gst: d.qc.ca.gst.marginalTaxRate,
                        ca_witb: d.qc.ca.witb.marginalTaxRate,
                        ca_oasp: d.qc.ca.oasp.marginalTaxRate,
                        ca_rmes: d.qc.ca.rmes.marginalTaxRate,
                        
                        // Cotisations.
                        ctb_ei: d.qc.ctb.ei.marginalTaxRate,
                        ctb_qpip: d.qc.ctb.qpip.marginalTaxRate,
                        ctb_qpp: d.qc.ctb.qpp.marginalTaxRate,
                        ctb_hsf: d.qc.ctb.hsf.marginalTaxRate,
                        ctb_hc: d.qc.ctb.hc.marginalTaxRate,
                        ctb_pdip: d.qc.ctb.pdip.marginalTaxRate
                    });
                    datax.push({
                        income: d.grossIncome,
                        tmit: d.qc.marginalTaxRate
                    });
                }

                // console.log(data);
                var stack = d3.stack()
                    .keys(["qc_pit", "qc_sa", "qc_ca", "qc_spss", "qc_wp", "qc_stc", "qc_tcce", "qc_sap", "qc_rtcme", 
                            "ca_pit", "ca_ccb", "ca_gst", "ca_witb", "ca_oasp", "ca_rmes", 
                            "ctb_ei", "ctb_qpip", "ctb_qpp", "ctb_hsf", "ctb_hc", "ctb_pdip"]);
                var stackedSeries = stack(data);

                x.domain([0, 250]);
                y.domain([-15, 100]);
                
                d3.select('g')
                    .selectAll('path')
                    .data(stackedSeries)
                    .enter()
                    .append('path')
                    .style('fill', function(d, i) { 
                        // return colors[i]; 
                        return sequentialScale(i);
                    })
                    .style('pointer-events', 'none')
                    .style("stroke", "grey")
                    .attr("stroke-width", "1px")
                    .on("mouseover", function(a, b, c) { 
                        console.log(a); 
                        // d3.select(this).style("opacity", "0.85");
                        // tooltip.html("<div>" + d.name + "</div>");
                        // return tooltip.style("visibility", "visible");
                    })
                    .on("mousemove", function() {
                        console.log("mousemove");
                        // return tooltip
                        // .style("top", (d3.event.pageY + 8) + "px")
                        // .style("left", (d3.event.pageX + 16) + "px");
                    })
                    .on("mouseout", function() {
                        console.log("mouseout");
                        //d3.select(this).style("opacity", "1.0");
                        //return tooltip.style("visibility", "hidden");
                    })
                    .attr('d', area);
                
                // 9. Append the path, bind the data, and call the line generator 
                svg.append("path")
                    .datum(datax) // 10. Binds data to the line 
                    .attr("class", "line") // Assign a class for styling 
                    .attr("d", line); // 11. Calls the line generator 


                let index = Math.round(results[0].grossIncome/1000) + 1

                svg.append("line")
                    .attr("x1", x(index))
                    .attr("y1", y(100))
                    .attr("x2", x(index))
                    .attr("y2", y(-15))
                    .attr("class", "line"); // Assign a class for styling 

                if (true) {
                    // See http://www.d3noob.org/2013/01/adding-grid-lines-to-d3js-graph.html
                    // add the X gridlines
                    svg.append("g")			
                        .attr("class", "grid")
                        .attr("transform", "translate(0," + height + ")")
                        .call(make_x_gridlines()
                            .tickSize(-height)
                            .tickFormat("")
                        );

                    // add the Y gridlines
                    svg.append("g")			
                        .attr("class", "grid")
                        .call(make_y_gridlines()
                            .tickSize(-width)
                            .tickFormat("")
                        );
                }

                var xAxis = d3.axisBottom(x);
                var yAxis = d3.axisLeft(y);

                /*
                var xAxis = d3.axisBottom(x)
                    .tickValues([0, 50000, 100000, 150000, 200000, 250000])
                    .tickFormat(formatBillion);
        
                var yAxis = d3.axisLeft(y)
                    .tickValues([0, 20, 40, 60, 80, 100]);
                */

                // Add the X Axis.
                svg.append("g")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                // Add the Y Axis.
                svg.append("g")
                    .call(yAxis);

                /*
                // Draw an X to show that the size is correct.
                var lines = svg.selectAll("line").data([
                    {x1: 0, y1: 0, x2: width, y2: height},
                    {x1: 0, y1: height, x2: width, y2: 0}
                ]);
                lines
                    .enter().append("line")
                    .style("stroke-width", 50)
                    .style("stroke-opacity", 0.4)
                    .style("stroke", "black")
                    .merge(lines)
                    .attr("x1", function (d) { return d.x1; })
                    .attr("y1", function (d) { return d.y1; })
                    .attr("x2", function (d) { return d.x2; })
                    .attr("y2", function (d) { return d.y2; });

                // Pas requis.
                // See https://leanpub.com/d3-t-and-t-v4/read#leanpub-auto-draw-the-area
                svg.append("text")         // append text
                    .style("fill", "black")   // fill the text with the colour black
                    .attr("x", 200)           // set x position of left side of text
                    .attr("y", 100)           // set y position of bottom of text 
                    .attr("dy", ".35em")           // set offset y position
                    .attr("text-anchor", "middle") // set anchor y justification
                    .attr("transform", "translate(200,100) rotate(10)")
                    .text("Hello World");  

                */
            }

            // Draw for the first time to initialize.
            redraw(results);

            // Redraw based on the new size whenever the browser window is resized.
            window.addEventListener("resize", function() { redraw(results); }, false);
        }
    }
});

/*

            chart6: function() {
                // Stacked barchart.
                // http://www.delimited.io/blog/2014/3/3/creating-multi-series-charts-in-d3-lines-bars-area-and-streamgraphs
              if ($("#chart6").length == 0) {
                  return;
              }
          
                  var self = this;
          
              var margin = {top: 20, right: 0, bottom: 20, left: 60};
              var width = 450 - margin.left - margin.right;
              var height = 350 - margin.top - margin.bottom;
          
                  // BEGIN ----------------------------------
          
                var x = d3.scale.ordinal()
                    .rangeRoundBands([0, width], .1);
          
                var y = d3.scale.linear()
                    .rangeRound([height, 0]);
          
                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom")
                    .tickValues(["2008-Q1", "2010-Q1", "2012-Q1"]);
          
          
                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .tickFormat(function(d) { return formatNumber(d); });
          
                var stack = d3.layout.stack()
                    .offset("zero")
                    .values(function (d) { return d.values; })
                    .x(function (d) { return x(d.label) + x.rangeBand() / 2; })
                    .y(function (d) { return d.value; });
          
                var area = d3.svg.area()
                    .interpolate("cardinal")
                    .x(function (d) { return x(d.label) + x.rangeBand() / 2; })
                    .y0(function (d) { return y(d.y0); })
                    .y1(function (d) { return y(d.y0 + d.y); });
          
                var color = d3.scale.ordinal()
                    .range([colors[5][10],colors[4][10],colors[3][10],colors[2][10],colors[1][10]]);
          
                var svg = d3.select("#chart6").append("svg")
                    .attr("width",  width  + margin.left + margin.right)
                    .attr("height", height + margin.top  + margin.bottom)
                  .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          
                      var data = [{"quarter": "2008-Q1", "ANGEL": 339, "SERIES-A": 345, "SERIES-B": 186, "SERIES-C+": 130, "VENTURE": 233},
          {"quarter": "2008-Q2", "ANGEL": 197, "SERIES-A": 272, "SERIES-B": 169, "SERIES-C+": 145, "VENTURE": 197},
          {"quarter": "2008-Q3", "ANGEL": 163, "SERIES-A": 207, "SERIES-B": 140, "SERIES-C+": 108, "VENTURE": 151},
          {"quarter": "2008-Q4", "ANGEL": 120, "SERIES-A": 166, "SERIES-B": 128, "SERIES-C+": 86, "VENTURE": 188},
          {"quarter": "2009-Q1", "ANGEL": 320, "SERIES-A": 203, "SERIES-B": 123, "SERIES-C+": 121, "VENTURE": 245},
          {"quarter": "2009-Q2", "ANGEL": 225, "SERIES-A": 145, "SERIES-B": 105, "SERIES-C+": 123, "VENTURE": 208},
          {"quarter": "2009-Q3", "ANGEL": 237, "SERIES-A": 157, "SERIES-B": 112, "SERIES-C+": 98, "VENTURE": 278},
          {"quarter": "2009-Q4", "ANGEL": 190, "SERIES-A": 231, "SERIES-B": 146, "SERIES-C+": 109, "VENTURE": 569},
          {"quarter": "2010-Q1", "ANGEL": 447, "SERIES-A": 288, "SERIES-B": 164, "SERIES-C+": 116, "VENTURE": 981},
          {"quarter": "2010-Q2", "ANGEL": 309, "SERIES-A": 230, "SERIES-B": 135, "SERIES-C+": 159, "VENTURE": 893},
          {"quarter": "2010-Q3", "ANGEL": 339, "SERIES-A": 262, "SERIES-B": 144, "SERIES-C+": 131, "VENTURE": 891},
          {"quarter": "2010-Q4", "ANGEL": 322, "SERIES-A": 283, "SERIES-B": 118, "SERIES-C+": 148, "VENTURE": 835},
          {"quarter": "2011-Q1", "ANGEL": 622, "SERIES-A": 321, "SERIES-B": 165, "SERIES-C+": 150, "VENTURE": 937},
          {"quarter": "2011-Q2", "ANGEL": 497, "SERIES-A": 326, "SERIES-B": 146, "SERIES-C+": 147, "VENTURE": 887},
          {"quarter": "2011-Q3", "ANGEL": 642, "SERIES-A": 372, "SERIES-B": 165, "SERIES-C+": 136, "VENTURE": 752},
          {"quarter": "2011-Q4", "ANGEL": 602, "SERIES-A": 354, "SERIES-B": 152, "SERIES-C+": 109, "VENTURE": 721},
          {"quarter": "2012-Q1", "ANGEL": 892, "SERIES-A": 375, "SERIES-B": 135, "SERIES-C+": 146, "VENTURE": 808},
          {"quarter": "2012-Q2", "ANGEL": 728, "SERIES-A": 376, "SERIES-B": 152, "SERIES-C+": 151, "VENTURE": 819},
          {"quarter": "2012-Q3", "ANGEL": 794, "SERIES-A": 354, "SERIES-B": 118, "SERIES-C+": 143, "VENTURE": 771},
          {"quarter": "2012-Q4", "ANGEL": 730, "SERIES-A": 320, "SERIES-B": 123, "SERIES-C+": 125, "VENTURE": 715},
          {"quarter": "2013-Q1", "ANGEL": 1053, "SERIES-A": 404, "SERIES-B": 147, "SERIES-C+": 144, "VENTURE": 608},
          {"quarter": "2013-Q2", "ANGEL": 925, "SERIES-A": 502, "SERIES-B": 166, "SERIES-C+": 140, "VENTURE": 733},
          {"quarter": "2013-Q3", "ANGEL": 986, "SERIES-A": 576, "SERIES-B": 202, "SERIES-C+": 175, "VENTURE": 596},
          {"quarter": "2013-Q4", "ANGEL": 693, "SERIES-A": 506, "SERIES-B": 198, "SERIES-C+": 161, "VENTURE": 1015}]
          
                  var labelVar = 'quarter';
                  var varNames = d3.keys(data[0])
                      .filter(function (key) { return key !== labelVar; });
                  color.domain(varNames);
          
                  var seriesArr = [], series = {};
                  varNames.forEach(function (name) {
                    series[name] = {name: name, values:[]};
                    seriesArr.push(series[name]);
                  });
          
                  data.forEach(function (d) {
                    varNames.map(function (name) {
                      series[name].values.push({name: name, label: d[labelVar], value: +d[name]});
                    });
                  });
          
                  x.domain(data.map(function (d) { return d.quarter; }));
          
                  stack(seriesArr);
          
                  y.domain([0, d3.max(seriesArr, function (c) {
                      return d3.max(c.values, function (d) { return d.y0 + d.y; });
                    })]);
          
                  svg.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + height + ")")
                      .call(xAxis);
          
                  svg.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)
                    .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("Number of Rounds");
          
                           var tooltip = d3.select("div.tooltip1");
          
                  var selection = svg.selectAll(".series")
                    .data(seriesArr)
                    .enter().append("g")
                      .attr("class", "series");
          
                  selection.append("path")
                    .attr("class", "streamPath")
                    .attr("d", function (d) { return area(d.values); })
                    .style("fill", function (d) { return color(d.name); })
                    .style("stroke", "grey")
                    .on("mouseover", function(d) {
                                  d3.select(this).style("opacity", "0.85");
                        tooltip.html("<div>" + d.name + "</div>");
                          return tooltip.style("visibility", "visible");
                      })
                          .on("mousemove", function() {
                          return tooltip
                          .style("top", (d3.event.pageY + 8) + "px")
                          .style("left", (d3.event.pageX + 16) + "px");
                          })
                          .on("mouseout", function () {
                              d3.select(this).style("opacity", "1.0");
                              return tooltip.style("visibility", "hidden");
                              });
          
                        
                  var points = svg.selectAll(".seriesPoints")
                    .data(seriesArr)
                    .enter().append("g")
                      .attr("class", "seriesPoints");
          
                  points.selectAll(".point")
                    .data(function (d) { return d.values; })
                    .enter().append("circle")
                     .attr("class", "point")
                     .attr("cx", function (d) { return x(d.label) + x.rangeBand() / 2; })
                     .attr("cy", function (d) { return y(d.y0 + d.y); })
                     .attr("r", "10px")
                     .style("fill",function (d) { return color(d.name); })
                     .on("mouseover", function (d) { showPopover.call(this, d); })
                     .on("mouseout",  function (d) { removePopovers(); })
                        
          
                        
                  var legend = svg.selectAll(".legend")
                      .data(varNames.slice().reverse())
                    .enter().append("g")
                      .attr("class", "legend")
                      .attr("transform", function (d, i) { return "translate(55," + i * 20 + ")"; });
          
                  legend.append("rect")
                      .attr("x", width - 10)
                      .attr("width", 10)
                      .attr("height", 10)
                      .style("fill", color)
                      .style("stroke", "grey");
          
                  legend.append("text")
                      .attr("x", width - 12)
                      .attr("y", 6)
                      .attr("dy", ".35em")
                      .style("text-anchor", "end")
                      .text(function (d) { return d; });
                        
          
          
          
                  // END ------------------------------------
              $("#chart6_title").html(this.model.get("_table1"));
              $("#chart6_parenthesis").html(this.model.get("_dollars"));
              $("#chart6_footnote").html("Source : " + this.model.get("_home") + ".");
              */

