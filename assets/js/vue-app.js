"use strict";

const App = {
    methods: {
        changeLanguage: function () {
            this.$i18n.locale = this.$i18n.locale === "en" ? "fr" : "en";
        }
    }
};

// 2. Define some routes
// See https://router.vuejs.org/guide/#javascript
const routes = [
    { path: "/", component: Home },
    { path: "/cv", component: CurriculumVitae },
    { path: "/formations", component: Formations },
    { path: "/revDisp", component: RevDisp }
];

// 3. Create the router instance and pass the `routes` option
// See https://router.vuejs.org/guide/#javascript
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

// 4. Create a vue root instance.
// See https://vue-i18n.intlify.dev/guide/#javascript
const app = Vue.createApp(App);

// 5. Push the router instance to make the whole app router-aware.
app.use(router);

// 6. Ready translated locale messages.
// The structure of the locale message is the hierarchical object structure
// with each locale as the top property.
// See https://vue-i18n.intlify.dev/guide/#javascript
const messages = {
    fr: {
        locale: "fr",
        otherLanguage: "English",
        about: {
            text1: "<p>Gestionnaire ayant réalisé plusieurs mandats stratégiques pour le gouvernement du Québec. "
            + "Curieux, passionné, persévérant, rigoureux, esprit d'équipe, orienté résultats.</p>"
            + "<p>J'ai travaillé comme analyste en actuariat, analyste de données, analyste des politiques fiscales et budgétaires, "
            + "puis gestionnaire au ministère des Finances du gouvernement du Québec, et gestionnaire au ministère de l'Éducation "
            + "et de l'Enseignement supérieur dans les infrastructures scolaires, collégiales et universitaires.</p>",
            download_cv: "Vous pouvez télécharger un PDF de mon CV <a href='assets/pdf/cv.pdf' target='_blank'>ici</a>."
        },
        cv: {
            intro:
                "Gestionnaire ayant réalisé plusieurs mandats stratégiques au gouvernement du Québec. Curieux, passionné, persévérant, " +
                "rigoureux, esprit d'équipe, orienté client et sur les résultats. " +
                "Après une carrière bien remplie, il est temps d'essayer quelque chose de nouveau.",
        },
        formations: "Formations",
        projets: "Projets",
        revdisp: {
            title: "Revenu disponible",
            description: "Estimez les impôts et cotisations à payer, les transferts que vous pourriez recevoir et ce qu'il vous reste en revenu disponible pour l'année.",
            comment: "Cette calculatrice est encore <b>en cours de développement</b>, j'y travaille pendant mon temps libre. <b>Les résultats ne sont " +
            "pas encore corrects</b>. Le plus difficile est de trouver les formules et les paramètres exacts pour calculer les impôts, les cotisations " +
            " et les transferts aux particuliers au Québec et au Canada. Cette calculatrice est développée avec Javascript, Vue.js, Boostrap. Contactez-moi " +
            " (<a href=\"mailto:ay.boisvert&#64;gmail.com\" target=\"_blank\">ay.boisvert&#64;gmail.com</a>) si vous trouvez cet outil intéressant.",
            notReady: "(pas encore prêt!)",
            taxRegime: "Régime fiscal",
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
                invalid: "Sélectionnez une province.",
            },
            year: {
                title: "Année d'imposition",
                invalid: "Sélectionnez une année d'imposition.",
            },
            familySituationSection: "Situation familiale",
            familySituation: "Votre situation familiale",
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
                f25: "Couple, 5 enfants",
            },
            age: {
                age1: "Votre âge",
                age2: "Âge de votre conjoint(e)",
                invalid: "Entrez un âge entre 18 et 99 ans.",
            },
            income: {
                work1: "Votre revenu brut de travail",
                work2: "Revenu brut de travail de votre conjoint(e)",
                retirement1: "Votre revenu brut de retraite",
                retirement2: "Revenu brut de retraite de votre conjoint(e)",
                grossIncome: "Revenu brut total",
                invalid: "Revenu invalide.",
            },
            child: {
                e1: "1<sup>er</sup> enfant",
                e2: "2<sup>e</sup>",
                e3: "3<sup>e</sup>",
                e4: "4<sup>e</sup>",
                e5: "5<sup>e</sup>",
                age1: "Âge du 1<sup>er</sup> enfant",
                age2: "Âge du 2<sup>e</sup> enfant",
                age3: "Âge du 3<sup>e</sup> enfant",
                age4: "Âge du 4<sup>e</sup> enfant",
                age5: "Âge du 5<sup>e</sup> enfant",
                invalidAge: "Entrez un âge entre 0 et 17 ans.",
                care1: "Frais de garde du 1<sup>er</sup> enfant ($)",
                care2: "Frais de garde du 2<sup>e</sup> enfant ($)",
                care3: "Frais de garde du 3<sup>e</sup> enfant ($)",
                care4: "Frais de garde du 4<sup>e</sup> enfant ($)",
                care5: "Frais de garde du 5<sup>e</sup> enfant ($)",
                invalidCare: "Entrez un frais entre 0 $ et 15 000 $",
                subsidized: "Garde subventionnée?",
            },
            table: {
                title: "Tableaux et graphiques",
                subtitle: "Choisissez un ou plusieurs tableaux et graphiques",
                table: "Tableau",
                chart: "Graphique",
                dollars: "(en dollars)",
                amount: "Montant",
                marginalRate: "Taux marginal",
                invalid: "invalide!",
            },
            button: {
                text1: "Calculer",
                text2: "Réinitialiser",
            },
            qc: {
                title: "Québec",
                pit: "Impôt sur le revenu des particuliers",
                pit_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/taux-dimposition/' target='_blank'>Impôt sur le revenu des particuliers</a>",
                clc: "Prestation exceptionnelle pour le coût de la vie",
                clc_url: "<a href='https://www.revenuquebec.ca/fr/salle-de-presse/nouvelles-fiscales/details/2021-11-25/nouveau-credit-dimpot-attribuant-une-prestation-exceptionnelle-pour-pallier-la-hausse-du-cout-de-la-vie/' target='_blank'>Prestation exceptionnelle pour le coût de la vie</a>",
                cltc: "Montant ponctuel pour le coût de la vie",
                cltc_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-attribuant-un-montant-ponctuel-pour-pallier-la-hausse-du-cout-de-la-vie/' target='_blank'>Montant ponctuel pour le coût de la vie</a>",
                nrcltc: "Nouveau montant ponctuel pour le coût de la vie",
                nrcltc_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-remboursable-conferant-un-nouveau-montant-ponctuel-pour-le-cout-de-la-vie/' target='_blank'>Nouveau montant ponctuel pour le coût de la vie</a>",
                ttp: "Transferts aux particuliers",
                sa: "Aide sociale",
                sa_url: "<a href='https://www.rps.servicesquebec.gouv.qc.ca/fr/citoyen/afficher-service/400393' target='_blank'>Aide sociale</a>",
                ca: "Allocation familiale",
                ca_url: "<a href='https://www.rrq.gouv.qc.ca/fr/programmes/soutien_enfants/paiement/Pages/paiment.aspx' target='_blank'>Allocation familiale</a>",
                spss: "Supplément pour l'achat de fournitures scolaires",
                spss_url: "<a href='https://www.rrq.gouv.qc.ca/fr/enfants/Pages/supplement-achat-fournitures-scolaires.aspx' target='_blank'>Supplément pour l'achat de fournitures scolaires</a>",
                wp: "Prime au travail",
                wp_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credits-dimpot-relatifs-a-la-prime-au-travail/' target='_blank'>Prime au travail</a>",
                stc: "Crédit d'impôt pour la solidarité",
                stc_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-solidarite/' target='_blank'>Crédit d'impôt pour la solidarité</a>",
                tcce: "Crédit d'impôt pour frais de garde d'enfants",
                tcce_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-frais-de-garde-denfants/' target='_blank'>Crédit d'impôt pour frais de garde d'enfants</a>",
                sap: "Allocation-logement",
                sap_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/votre-situation/faible-revenu/programme-allocation-logement-que-devez-vous-faire/' target='_blank'>Allocation-logement</a>",
                rtcme: "Crédit d'impôt remboursable pour frais médicaux",
                rtcme_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/aide-par-ligne/451-a-480-remboursement-ou-solde-a-payer/ligne-462/point-1/' target='_blank'>Crédit d'impôt remboursable pour frais médicaux</a>",
                ssa: "Montant pour le soutien aux aînés",
                ssa_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/credits-dimpot/credit-dimpot-pour-soutien-aux-aines/' target='_blank'>Montant pour le soutien aux aînés</a>",
                total: "Sous-total - Québec",
            },
            ca: {
                title: "Canada",
                pit: "Impôt sur le revenu des particuliers",
                pit_url: "<a href='https://www.canada.ca/fr/services/impots/impot-sur-le-revenu/impot-sur-le-revenu-des-particuliers.html' target='_blank'>Impôt sur le revenu des particuliers</a>",
                ttp: "Transferts aux particuliers",
                ccb: "Allocation canadienne pour enfants",
                ccb_url: "<a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/allocation-canadienne-enfants-apercu.html' target='_blank'>Allocation canadienne pour enfants</a>",
                gst: "Crédit pour la TPS",
                gst_url: "<a href='https://www.canada.ca/fr/agence-revenu/services/prestations-enfants-familles/credit-taxe-produits-services-taxe-vente-harmonisee-tps-tvh.html' target='_blank'>Crédit pour la TPS</a>",
                witb: "Allocation canadienne pour les travailleurs",
                witb_url: "<a href='https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/budgets-gouvernement-federal/budget-2018-egalite-croissance-classe-moyenne-forte/allocation-canadienne-travailleurs.html' target='_blank'>Allocation canadienne pour les travailleurs</a>",
                oasp: "Programme de la Sécurité de la vieillesse",
                oasp_url: "<a href='https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse.html' target='_blank'>Programme de la Sécurité de la vieillesse</a>",
                rmes: "Supplément remboursable pour frais médicaux",
                rmes_url: "<a href='https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/tout-votre-declaration-revenus/declaration-revenus/remplir-declaration-revenus/deductions-credits-depenses/ligne-45200-supplement-remboursable-frais-medicaux.html' target='_blank'>Supplément remboursable pour frais médicaux</a>",
                total: "Sous-total - Canada",
            },
            ctb: {
                title: "Cotisations",
                ei: "Assurance-emploi",
                ei_url: "<a href='https://www.canada.ca/fr/agence-revenu/services/impot/entreprises/sujets/retenues-paie/retenues-paie-cotisations/assurance-emploi-ae.html' target='_blank'>Assurance-emploi</a>",
                qpip: "Régime québécois d'assurance parentale",
                qpip_url: "<a href='https://www.rqap.gouv.qc.ca/' target='_blank'>Régime québécois d'assurance parentale</a>",
                qpp: "Régime de rentes du Québec",
                qpp_url: "<a href='https://www.retraitequebec.gouv.qc.ca/fr/Pages/accueil.aspx' target='_blank'>Régime de rentes du Québec</a>",
                hsf: "Fonds des services de santé",
                hsf_url: "<a href='https://www.revenuquebec.ca/fr/citoyens/declaration-de-revenus/produire-votre-declaration-de-revenus/comment-remplir-votre-declaration/aide-par-ligne/400-a-447-impot-et-cotisations/ligne-446/' target='_blank'>Fonds des services de santé</a>",
                pdip: "Régime public d'assurance médicaments du Québec",
                pdip_url: "<a href='https://www.ramq.gouv.qc.ca/fr/citoyens/assurance-medicaments' target='_blank'>Régime public d'assurance médicaments du Québec</a>",
                total: "Sous-total - Cotisations",
            },
            cce: "Frais de garde",
            di: "Revenu disponible"
        }
    },
    en: {
        locale: "en",
        otherLanguage: "Français",
        about: {
            text1: "<p>Manager having carried out several strategic mandates for the Government of Quebec. Curious, passionate, persevering, "
            + "rigorous, team spirit, results oriented.</p>" 
            + "<p>I worked as an actuarial analyst, data analyst, fiscal and budgetary policy analyst, then manager at the Ministry of Finance of "
            + "the Government of Quebec, and manager at the Ministry of Education and Higher Education in school infrastructure, colleges and universities.</p>",
            download_cv: "You can download a PDF of my CV <a href='' target='_blank'>here</a>."
        },
        cv: {
            intro:
                "Manager having carried out several strategic mandates for the Government of Quebec. Curious, passionate, "
                + "persevering, rigorous, team spirit, client-oriented and results-oriented. "
                + " After a busy career, it's time to try something new.",
        },
        formations: "Learning",
        projets: "Projects",
        revdisp: {
            title: "Disposable income",
            description: "Estimate the taxes and contributions to pay, the transfers you could receive and what you have in disposable income for the year.",
            comment: "This calculator is still <b>under development</b>, I'm working on it in my spare time. <b>The results are not yet correct</b>. " +
            " The most difficult thing is to find the exact formulas and parameters to calculate taxes, contributions and transfers to individuals " +
            " in Quebec and Canada. This calculator is developed with Javascript, Vue.js, Boostrap. Contact me " +
            " (<a href=\"mailto:ay.boisvert&#64;gmail.com\" target=\"_blank\">ay.boisvert&#64;gmail.com</a>) if you find this tool interesting.",
            notReady: "(not ready yet!)",
            taxRegime: "Tax regime",
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
                invalid: "Select one province.",
            },
            year: {
                title: "Tax year",
                invalid: "Select one tax year.",
            },
            familySituationSection: "Family situation",
            familySituation: "Your family situation",
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
                f25: "Couple, 5 children",
            },
            age: {
                age1: "Your age",
                age2: "Your spouse's age",
                invalid: "Enter an age between 18 and 99."
            },
            income: {
                work1: "Your gross work income",
                work2: "Your spouse's gross work income",
                retirement1: "Your gross retirement income",
                retirement2: "Your spouse's gross retirement income",
                grossIncome: "Total gross income",
                invalid: "Invalid income.",
            },
            child: {
                e1: "1st child",
                e2: "2nd",
                e3: "3rd",
                e4: "4th",
                e5: "5th",
                age1: "Age of the 1st child",
                age2: "Age of the 2nd child",
                age3: "Age of the 3rd child",
                age4: "Age of the 4th child",
                age5: "Age of the 5th child",
                invalidAge: "Enter an age between 0 and 17 years old.",
                care1: "Childcare expenses of the 1st child ($)",
                care2: "Childcare expenses of the 2nd child ($)",
                care3: "Childcare expenses of the 3rd child ($)",
                care4: "Childcare expenses of the 4th child ($)",
                care5: "Childcare expenses of the 5th child ($)",
                invalidCare: "Enter a fee between $0 and $15,000.",
                subsidized: "Subsidized childcare?",
            },
            table: {
                title: "Tables and charts",
                subtitle: "Choose one or more tables and graphs",
                table: "Table",
                chart: "Chart",
                dollars: "(dollars)",
                amount: "Amount",
                marginalRate: "Marginal rate",
                invalid: "invalide!",
            },
            button: {
                text1: "Calculate",
                text2: "Reset",
            },
            qc: {
                title: "Québec",
                pit: "Personal income tax",
                pit_url: "<a href='https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/income-tax-rates/' target='_blank'>Personal income tax</a>",
                clc: "Extraordinary cost of living allowance",
                clc_url: "<a href='https://www.revenuquebec.ca/en/press-room/tax-news/details/2021-11-25/nouveau-credit-dimpot-attribuant-une-prestation-exceptionnelle-pour-pallier-la-hausse-du-cout-de-la-vie/' target='_blank'>Extraordinary cost of living allowance</a>",
                cltc: "One-time cost of living support payment",
                cltc_url:  "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/special-one-time-cost-of-living-tax-credit/' target='_blank'>One-time cost of living support payment</a>",
                nrcltc: "New one-time cost of living support payment",
                nrcltc_url:  "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/new-refundable-cost-of-living-tax-credit/' target='_blank'>New one-time cost of living support payment</a>",
                ttp: "Transfers to persons",
                sa: "Social assistance",
                sa_url: "<a href='https://www.rps.servicesquebec.gouv.qc.ca/en/citoyen/afficher-service/400393' target='_blank'>Social assistance</a>",
                ca: "Family allowance",
                ca_url: "<a href='https://www.rrq.gouv.qc.ca/en/programmes/soutien_enfants/paiement/Pages/paiment.aspx' target='_blank'>Family allowance</a>",
                spss: "Supplement for the purchase of school supplies",
                spss_url: "<a href='https://www.rrq.gouv.qc.ca/en/enfants/Pages/supplement-achat-fournitures-scolaires.aspx' target='_blank'>Supplement for the purchase of school supplies</a>",
                wp: "Work premium",
                wp_url: "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/work-premium-tax-credits/' target='_blank'>Work premium</a>",
                stc: "Solidarity tax credit",
                stc_url: "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/solidarity-tax-credit/' target='_blank'>Solidarity tax credit</a>",
                tcce: "Tax credit for childcare expenses",
                tcce_url: "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/tax-credit-for-childcare-expenses/' target='_blank'>Tax credit for childcare expenses</a>",
                sap: "Shelter allowance program",
                sap_url: "<a href='https://www.revenuquebec.ca/en/citizens/your-situation/low-income/how-to-apply-for-the-shelter-allowance-program/' target='_blank'>Shelter allowance program</a>",
                rtcme: "Refundable tax credit for medical expenses",
                rtcme_url: "<a href='https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/how-to-complete-your-income-tax-return/line-by-line-help/451-to-480-refund-or-balance-due/line-462/point-1/' target='_blank'>Refundable tax credit for medical expenses</a>",
                ssa: "Senior assistance amount",
                ssa_url: "<a href='https://www.revenuquebec.ca/en/citizens/tax-credits/senior-assistance-tax-credit/' target='_blank'>Senior assistance amount</a>",
                total: "Subtotal - Québec",
            },
            ca: {
                title: "Canada",
                pit: "Personal income tax",
                pit_url: "<a href='https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html' target='_blank'>Personal income tax</a>",
                ttp: "Transfers to persons",
                ccb: "Canada Child Benefit",
                ccb_url: "<a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html' target='_blank'>Canada Child Benefit</a>",
                gst: "GST credit",
                gst_url: "<a href='https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html' target='_blank'>GST credit</a>",
                witb: "Canada Workers Benefit",
                witb_url: "<a href='https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/federal-government-budgets/budget-2018-equality-growth-strong-middle-class/canada-workers-benefit.html' target='_blank'>Canada Workers Benefit</a>",
                oasp: "Old Age Security program",
                oasp_url: "<a href='https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html' target='_blank'>Old Age Security program</a>",
                rmes: "Refundable medical expense supplement",
                rmes_url: "<a href='https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45200-refundable-medical-expense-supplement.html' target='_blank'>Refundable medical expense supplement</a>",
                total: "Subtotal - Canada",
            },
            ctb: {
                title: "Contributions",
                ei: "Employment insurance",
                ei_url: "<a href='https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei.html' target='_blank'>Employment insurance</a>",
                qpip: "Québec Parental Insurance Plan",
                qpip_url: "<a href='https://www.rqap.gouv.qc.ca/en' target='_blank'>Québec Parental Insurance Plan</a>",
                qpp: "Québec Pension Plan",
                qpp_url: "<a href='https://www.retraitequebec.gouv.qc.ca/en/Pages/accueil.aspx' target='_blank'>Québec Pension Plan</a>",
                hsf: "Health Services Fund",
                hsf_url: "<a href='https://www.revenuquebec.ca/en/citizens/income-tax-return/completing-your-income-tax-return/how-to-complete-your-income-tax-return/line-by-line-help/400-to-447-income-tax-and-contributions/line-446/' target='_blank'>Health Services Fund</a>",
                pdip: "Québec Public Prescription Drug Insurance Plan",
                pdip_url: "<a href='https://www.ramq.gouv.qc.ca/en/citizens/prescription-drug-insurance' target='_blank'>Québec Public Prescription Drug Insurance Plan</a>",
                total: "Subtotal - Cotisations",
            },
            cce: "Childcare expenses",
            di: "Disposable income"
        }
    },
};

const numberFormats = {
    en: {
        amount: {
            style: "decimal",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        },
        percent: {
            style: "decimal",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        },
    },
    fr: {
        amount: {
            style: "decimal",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        },
        percent: {
            style: "decimal",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
        },
    },
};

// 7. Create i18n instance with options.
// See https://vue-i18n.intlify.dev/guide/#javascript
const i18n = VueI18n.createI18n({
    locale: "fr", // set locale
    fallbackLocale: "en", // set fallback locale
    messages, // set locale messages
    numberFormats,
});

// 8. Install i18n instance to make the whole app i18n-aware.
app.use(i18n);

// 9. Mount.
app.mount("#app");

// Now the app has started!