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
    { path: "/revDisp", component: RevDisp },
    { path: "/deZoomcamp", component: DeZoomcamp },
    { path: "/dlsCoursera", component: DlsCoursera },
    { path: "/webUdacity", component: WebUdacity },
    { path: "/sas", component: SAS }

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
        cheatSheat: "Aide-mémoire",
        about: {
            text1: "<p>Gestionnaire ayant réalisé plusieurs mandats stratégiques pour le gouvernement du Québec. "
            + "Curieux, passionné, persévérant, rigoureux, esprit d'équipe, orienté résultats.</p>"
            + "<p>J'ai travaillé comme analyste en actuariat, analyste de données, analyste des politiques fiscales et budgétaires, "
            + "puis gestionnaire au ministère des Finances du gouvernement du Québec, et gestionnaire au ministère de l'Éducation "
            + "et de l'Enseignement supérieur dans les infrastructures scolaires, collégiales et universitaires.</p>",
            download_cv: "Vous pouvez télécharger un PDF de mon CV <a href='assets/pdf/cv.pdf' target='_blank'>ici</a>."
        },
        cv: {
            content: `<h1>Curriculum vit&#230;</h1>

            <p>
                Alain Boisvert, MBA, <a href="mailto:ay.boisvert&#64;gmail.com" target="_blank">ay.boisvert&#64;gmail.com</a><br>
                Vous pouvez télécharger un PDF de mon CV <a href="assets/pdf/cv.pdf" target="_blank">ici</a>.
            </p>
    
            <h2>Expérience professionnelle</h2>
        
            <div class="mb-3">
                <b>Conseiller stratégique</b> (réorientation planifiée depuis 2021/06)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Enseignement supérieur
                <ul>
                    <li>Conseiller le directeur général des infrastructures, les gestionnaires et les professionnels dans les dossiers 
                    d'infrastructures collégiaux et universitaires, les échanges avec le Secrétariat du Conseil du trésor, etc.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Directeur général</b> (2020/10 – 2021/05)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Enseignement supérieur
                <ul>
                    <li>Mettre en place la nouvelle direction générale des infrastructures.</li>
                    <li>Gérer près de 6,5 G$ d'investissement par année dans les infrastructures.</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Directeur de la gouvernance des projets d'infrastructures</b> (2017/09 – 2020/09)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Éducation et de l'Enseignement supérieur
                <ul>
                    <li>Suivre les projets majeurs d'infrastructure (50&nbsp;M$ et plus) des réseaux de l'éducation et de l'enseignement supérieur.</li>
                    <li>Obtenir les autorisations pour démarrer près de 30 projets majeurs de construction d'écoles secondaires 
                    et d'agrandissements de cégeps et d'universités, totalisant plus de 5 G$.</li>
                    <li>Accompagner les établissements et rendre compte aux autorités gouvernementales du dépôt du projet au Ministère jusqu'à la mise en service et la clôture du projet.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Conseiller-cadre et Directeur du bureau de projets</b> (2016/06 – 2017/08)<br>
                Direction générale des acquisitions<br>
                Centre de services partagés du Québec
            </div>
        
            <div class="mb-3">
                <b>Directeur des projets spéciaux et de la modélisation</b> (2009/01 – 2016/05)<br>
                Ministère des Finances du Québec
                <ul>
                <li>Appuyer le <a href="https://www.groupes.finances.gouv.qc.ca/santefinancementactivite/travaux/rapports-et-recommandations/index.html" target="_blank">Groupe d'experts pour un financement axé sur les patients</a> 
                    et le <a href="https://www.groupes.finances.gouv.qc.ca/Consultprebudg/2010-2011/" target="_blank">Comité consultatif sur l'économie et les finances publiques</a>.</li>
                <li>Prendre en charge divers projets spéciaux, dont l'élaboration de la première édition des 
                    <a href="https://publications.msss.gouv.qc.ca/msss/sujets/comptes-de-la-sante" target="_blank">Comptes de la santé</a> 
                    pour le ministère de la Santé et des Services sociaux et les projections à long terme du cadre financier du gouvernement du Québec.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Analyste expert</b> (2001/04 – 2008/12)<br>
                Politiques budgétaires, fiscales et finances publiques<br>
                Ministère des Finances du Québec
                <ul>
                <li>Conseiller sur divers sujets de politique budgétaire, politique fiscale et finance publique.</li>
                <li>Appuyer le <a href="https://www.groupes.finances.gouv.qc.ca/financementsante/fr/groupe/index.asp" target="_blank">Groupe de travail sur le financement du système de santé</a>.</li>
                <li>Élaborer la position gouvernementale lors des négociations sur la rémunération des médecins spécialistes.</li>
                <li>Proposer un plan de retour à l'équilibre budgétaire en 2008.</li>
                <li>Développer un modèle de simulation du revenu disponible (après transferts, impôts et cotisations) des ménages de toutes les provinces canadiennes (VBA/Excel).</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Analyste expert</b> (1992/02 – 2001/04)<br>
                Ministère de la Solidarité sociale, Québec
                <ul>
                <li>Produire les statistiques officielles sur les prestataires de l'aide sociale.</li>
                <li>Mettre en place un entrepôt de données et développer des outils pour faciliter son exploitation (SAS, JCL).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Analyste en informatique</b> (1991/02 – 1992/02)<br>
                Ministère de l'Enseignement supérieur et de la science, Québec
                <ul>
                    <li>Assurer la responsabilité du maintien du parc informatique et du développement des applications informatiques d'une unité administrative.</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Analyste en informatique</b> (1990/08 – 1991/02)<br>
                SOBECO, Montréal
                <ul>
                <li>Développer des programmes informatiques dans le domaine actuariel (Fortran).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Analyste en actuariat</b> (1989/06 – 1990/06)<br>
                Société nationale d'assurances, Montréal
                <ul>
                <li>Implanter SAS au département d'actuariat et convertir des applications actuarielles PL/I en SAS.</li>
                <li>Comparer les primes d'assurance IARD auto et habitation des concurrents.</li>
                </ul>
            </div>
    
            <h2>Conseils d'administration</h2>
    
            <div class="mb-3">
                <b>Administrateur nommé par l'Office des professions</b> (depuis 2016/11)<br>
                <a href="http://www.odq.qc.ca/" target="_blank">Ordre des dentistes du Québec</a>
                <ul>
                <li>Membre du conseil d'administration (2016/11 – 2024/10).</li>
                <li>Membre du comité exécutif (2018/11 - 2020/10, 2022/11 - 2023/10).</li>
                <li>Président du comité d'audit (2019/02 - 2024/01).</li>
                <li>Membre du comité d'audit (2017/01 – 2019/01).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Membre externe invité au comité des finances</b> (depuis 2022/10)<br>
                <a href="https://souriressolidaires.com/" target="_blank">Sourires Solidaires</a>
            </div>
    
            <div class="mb-3">
                <b>Président</b> (1986 – 1987)<br>
                Association des étudiant(e)s en mathématiques<br>
                Université de Sherbrooke
            </div>
    
            <h2>Formations</h2>
    
            <div class="mb-3"> 
                <b>
                    <a href="https://www.fsg.ulaval.ca/etudes/programmes-detudes/microprogramme-de-deuxieme-cycle-en-traitement-de-donnees-massives" target="_blank">Microprogramme de deuxième cycle en traitement des données massives</a>
                </b> (en cours)<br>
                Université Laval
            </div>
    
            <div class="mb-3"><b>MBA, Gestion des technologies de l'information</b> (1999 – 2006)<br>
                Mention d'excellence des Facultés des études supérieures et des sciences de l'administration<br>
                Université Laval
            </div>
        
            <div class="mb-3"><b>B. Sc., Mathématiques appliquées</b> (1985 – 1988)<br>
                Université de Sherbrooke
            </div>
    
            <div class="mb-3"><b>Quatre examens</b> de la Casualty Actuarial Society (1986 - 1991)</div>
    
            <div class="mb-3"><b>
                <a href="#/deZoomcamp">Data Engineering Zoomcamp</a></b> (en cours)<br>
                DataTalks.Club
            </div>
    
            <div class="mb-3"><b>
                <a href="#/dlsCoursera">Spécialisation Deep Learning</a></b> (2018)<br>
                Coursera
            </div>
    
            <div class="mb-3"><b>
                <a href="#/webUdacity">Full Stack Web Developer Nanodegree</a></b> (2017)<br>
                Udacity
            </div>
    
            <h2>Compétences techniques</h2>
    
            <div class="mb-3">
                <b>Expérience de travail</b> : SAS, VBA/Excel, Fortran, SQL, Mainframe JCL/MVS/TSO/ISPF.<br>
                <b>Familiarité</b> :
                <ul style="margin:0">
                    <li><b>Langages</b> : Java, Scala, Apache Spark, R, Python (NumPy, pandas, Matplotlib), <a href="https://code.kx.com/q/" target="_blank">q/kdb+</a>.</li>
                    <li><b>Environnements de développement</b> : IntelliJ, PyCharm, VS Code, Jupyter.</li>
                    <li><b>Infonuagique</b> : Google Cloud.</li>
                    <li><b>Bases de données</b> : PostgreSQL, MongoDB.</li>
                    <li><b>Apprentissage automatique</b> : scikit-learn, PyTorch, fast.ai, XGBoost.</li>
                    <li><b>Autres</b> : Git, Antora, Databricks, Snowflake, Docker, Apache Airflow, Prefect.</li>
                </ul>
            </div>
    
            <div class="mb-3">Dernière révision : 26 mars 2023.</div>`,
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
        },
        de_zoomcamp: {
            status: "en cours",
            content: `<p>Je commence mon année 2023 avec
                <a href="https://github.com/DataTalksClub/data-engineering-zoomcamp" target="_blank">Zoomcamp sur l'ingénierie des données</a>
                par <a href="https://datatalks.club/" target="_blank">DataTalksClub</a>.
                </p>
                <p>Consultez mon <i class="fa fa-github" style="font-size:24px"></i> <a href="https://github.com/boisalai/de-zoomcamp-2023" target="_blank">dépôt GitHub</a>.</p>
                <p>Ce cours de 9 semaines est axé sur l'ingénierie des données et couvre les sujets suivants&nbsp;:
                <ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week1.md" target="_blank">Semaine&nbsp;1</a>&nbsp;: Introduction et prérequis
                        (<a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://www.terraform.io/" target="_blank">Terraform</a>,
                        <a href="https://cloud.google.com/" target="_blank">Google Cloud Platform</a>).</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_1_docker_sql/homework1.md" target="_blank">Travail pratique 1.1</a>,
                            <a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_1_terraform/homework1.md" target="_blank">Travail pratique 1.2</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week2.md" target="_blank">Semaine&nbsp;2</a>&nbsp;: Orchestration du flux de travail
                        avec <a href="https://www.prefect.io/" target="_blank">Prefect</a>.</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_2/homework.md" target="_blank">Travail pratique 2</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week3.md" target="_blank">Semaine&nbsp;3</a>&nbsp;: Entrepôt de données
                        avec <a href="https://cloud.google.com/bigquery" target="_blank">BigQuery</a>.</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_3/homework.md" target="_blank">Travail pratique 3</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week4.md" target="_blank">Semaine&nbsp;4</a>&nbsp;: Ingénierie analytique avec 
                        <a href="https://docs.getdbt.com/" target="_blank">dbt</a>.</li>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week5.md" target="_blank">Semaine&nbsp;5</a>&nbsp;: Traitement par lots avec <a href="https://spark.apache.org/" target="_blank">Spark</a> (Spark Dataframes et SQL).</li>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week6.md" target="_blank">Semaine&nbsp;6</a>&nbsp;: Streaming avec <a href="https://kafka.apache.org/" target="_blank">Kafka</a> (Kafka Connect et ksqlDB, schéma Avro).</li>
                    <li>Semaines&nbsp;7, 8 et 9&nbsp;: Mettre en pratique tout ce que nous avons appris dans un projet.</li>
                    <li>Semaines 7 et 8&nbsp;: Travailler sur notre projet.</li>
                    <li>Semaine&nbsp;9&nbsp;: Passez en revue nos pairs.</li>
                </ul>
                </p>
                <p>L'architecture du projet que nous aurons à faire devra ressembler à ceci&nbsp;:</p>
                <img src="assets/img/arch_1.jpg" style="width: 100%; max-width: 500px;">
                <p>Dernière mise à jour&nbsp;: 7&nbsp;mars&nbsp;2023.</p>`
        },
        dls_coursera: {
            content: `<p>En 2018, j'ai suivi le cours 
            <a href="https://www.coursera.org/specializations/deep-learning" target="_blank">Deep Learning Specialization</a> 
            de Coursera.
            J'ai notamment construit et entraîné des réseaux de neurones telles que les réseaux de neurones convolutifs, 
            les réseaux de neurones récurrents, les LSTM et appris à les améliorer avec des techniques de régularisation telles que 
            Dropout, BatchNorm, etc.
            Je compte bien un jour retrouver mes notes et les présenter ici.
            
            <p><img src="assets/img/coursera-1.jpg" style="border: solid 1px #212529; width: 100%; max-width: 700px;"><br>
            Vérifiez ce certificat à&nbsp;: <a href="https://coursera.org/verify/specialization/UHH4Y7VAF8EA" target="_blank">coursera.org/verify/specialization/UHH4Y7VAF8EA</a>.</p>

            <p>Dernière mise à jour: 19 février 2023.</p>`
        },
        web_udacity: {
            content: `<p>En 2017, j'ai suivi le cours 
            <a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044" target="_blank">Full Stack Web Developer Nanodegree</a> 
            de Udacity. J'ai notamment configuré un serveur Linux (Ubuntu, 
                <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>), développé une application Web (Python, 
                <a href="https://flask.palletsprojects.com/" target="_blank">Flask</a>, SQL), utilisé un framework 
            (<a href="https://knockoutjs.com/" target="_blank">Knockout.js</a>) et des APIs
            (<a href="https://developers.google.com/maps" target="_blank">Google Maps API</a>, <a href="https://location.foursquare.com/developer/" target="_blank">Foursquate API</a>).

            <p>Consultez mes <i class="fa fa-github" style="font-size:24px"></i> dépôts GitHub&nbsp;:
            <ul>
                <li><a href="https://github.com/boisalai/udacity-movie-trailer-website" target="_blank">Movie Trailer Website</a>.</li>
                <li><a href="https://github.com/boisalai/udacity-portfolio-site" target="_blank">Build a Portfolio Site</a>.</li>
                <li><a href="https://github.com/boisalai/udacity-logs-analysis-project" target="_blank">Logs Analysis Project</a>.</li>
                <li><a href="https://github.com/boisalai/udacity-catalog-app" target="_blank">Catalog App</a>.</li>
                <li><a href="https://github.com/boisalai/udacity-neighborhood-map" target="_blank">Neighborhood map</a>.</li>
                <li><a href="https://github.com/boisalai/udacity-linux-server-configuration" target="_blank">Linux Server Configuration</a>.</li>
            </ul>
            </p>
            
            <p><img src="assets/img/udacity-1.jpg" style="border: solid 1px #212529; width: 100%; max-width: 700px;"><br>
            Vérifiez ce certificat à&nbsp;: <a href="https://confirm.udacity.com/R34KM6FP" target="_blank">confirm.udacity.com/R34KM6FP</a>.</p>
            <p>Dernière mise à jour: 19 février 2023.</p>`
        }
    },
    en: {
        locale: "en",
        otherLanguage: "Français",
        cheatSheat: "Cheat sheet",
        about: {
            text1: "<p>Manager having carried out several strategic mandates for the Government of Quebec. Curious, passionate, persevering, "
            + "rigorous, team spirit, results oriented.</p>" 
            + "<p>I worked as an actuarial analyst, data analyst, fiscal and budgetary policy analyst, then manager at the Ministry of Finance of "
            + "the Government of Quebec, and manager at the Ministry of Education and Higher Education in school infrastructure, colleges and universities.</p>",
            download_cv: "You can download a PDF of my CV <a href='' target='_blank'>here</a>."
        },
        cv: {
            content: `<h1>Resume</h1>

            <p>
                Alain Boisvert, MBA, <a href="mailto:ay.boisvert&#64;gmail.com" target="_blank">ay.boisvert&#64;gmail.com</a><br>
                You can download a PDF of my resume <a href="assets/pdf/cv.pdf" target="_blank">here</a>.
             </p>
    
            <h2>Professional experience</h2>
        
            <div class="mb-3">
                <b>Senior Advisor</b> (reorientation planned since 2021/06)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Enseignement supérieur (Canada)
                <ul>
                    <li>Advise the general director of infrastructure, managers and professionals on college and university infrastructure 
                    projects, exchanges with the Secretariat of the Treasury Board, etc.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>General Director of Infrastructure</b> (2020/10 – 2021/05)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Enseignement supérieur (Canada)
                <ul>
                <li>Establish the new directorate general for infrastructure.</li>
                <li>Managing nearly $6.5 billion in infrastructure investment annually</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Director of Infrastructure Project Governance</b> (2017/09 – 2020/09)<br>
                Direction générale des infrastructures<br>
                Ministère de l'Éducation et de l'Enseignement supérieur (Canada)
                <ul>
                <li>Follow major infrastructure projects ($50M or more) in the education and higher education networks.</li>
                <li>Obtaining authorizations to start nearly 30 major secondary school construction projects
                and expansions of post-secondary schools, totaling more than $5 billion.</li>
                <li>Supporting post-secondary schools and reporting to government authorities on the submission of the project to the Ministry
                until the closure of the project.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Senior Advisor and Director of the Project Office</b> (2016/06 – 2017/08)<br>
                Procurement Department<br>
                Centre de services partagés du Québec (Canada)
            </div>
        
            <div class="mb-3">
                <b>Director of Special Projects and Modeling</b> (2009/01 – 2016/05)<br>
                Ministry of Finance of Québec (Canada)
                <ul>
                <li>Support the <a href="https://www.groupes.finances.gouv.qc.ca/santefinancementactivite/en/works/documents-papers/index.html" target="_blank">Expert Panel for Patient-Based Funding</a>
                    and the <a href="https://www.groupes.finances.gouv.qc.ca/Consultprebudg/2010-2011/" target="_blank">Advisory Committee on the Economy and Public Finances</a>.</li>
                <li>Support various special projects, including the development of the first edition of the
                    <a href="https://publications.msss.gouv.qc.ca/msss/sujets/comptes-de-la-sante" target="_blank">Health accounts</a>
                    for the Ministry of Health and Social Services and the long-term projections of the financial framework of the Government of Quebec.</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Expert Analyst</b> (2001/04 – 2008/12)<br>
                Budgetary, tax and public finance policies<br>
                Ministry of Finance of Québec (Canada)
                <ul>
                <li>Advise on various subjects of budgetary policy, tax policy and public finance.</li>
                <li>Support the <a href="https://www.groupes.finances.gouv.qc.ca/financementsante/en/groupe/index.asp" target="_blank">Task Force on the Funding of the Health System</a>.</li>
                <li>Develop the government's position during negotiations on the remuneration of medical specialists.</li>
                <li>Proposing a plan to return to balanced budgets in 2008.</li>
                <li>Develop a simulation model of disposable income (after transfers, taxes and contributions) of households in all Canadian provinces (VBA/Excel).</li>
                </ul>
            </div>
    
            <div class="mb-3">
                <b>Expert Analyst</b> (1992/02 – 2001/04)<br>
                Ministère de la Solidarité sociale, Québec (Canada)
                <ul>
                <li>Produce official statistics on social assistance recipients.</li>
                <li>Set up a data warehouse and develop tools to facilitate its use (SAS, JCL).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>IT Analyst</b> (1991/02 – 1992/02)<br>
                Ministère de l'Enseignement supérieur et de la science, Québec (Canada)
                <ul>
                    <li>Ensure responsibility for maintaining the computer park and developing computer applications of an administrative unite.</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>IT Analyst</b> (1990/08 – 1991/02)<br>
                SOBECO, Montréal (Canada)
                <ul>
                <li>Develop computer programs in the actuarial field (Fortran).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>Actuarial Analyst</b> (1989/06 – 1990/06)<br>
                Société nationale d'assurances, Montréal (Canada)
                <ul>
                <li>Implement SAS in the actuarial department and convert PL/I actuarial applications to SAS.</li>
                 <li>Compare the property and casualty home and auto insurance premiums of competitors.</li>
                </ul>
            </div>
    
            <h2>Boards of Directors</h2>
    
            <div class="mb-3">
                <b>Director appointed by the Office des professions</b> (since 2016/11)<br>
                <a href="http://www.odq.qc.ca/" target="_blank">Ordre des dentistes du Québec</a>
                <ul>
                <li>Member of the board of directors (2016/11 – 2024/10).</li>
                <li>Member of the executive committee (2018/11 - 2020/10, 2022/11 - 2023/10).</li>
                <li>Chair of the audit committee (2019/02 - 2024/01).</li>
                <li>Member of the audit committee  (2017/01 – 2019/01).</li>
                </ul>
            </div>
        
            <div class="mb-3">
                <b>External member invited to the finance committee</b> (depuis 2022/10)<br>
                <a href="https://souriressolidaires.com/" target="_blank">Sourires Solidaires</a>
            </div>
    
            <div class="mb-3">
                <b>President</b> (1986 – 1987)<br>
                Association of mathematics students<br>
                University of Sherbrooke
            </div>
    
            <h2>Education</h2>
    
            <div class="mb-3"> 
                <b>
                    <a href="https://www.fsg.ulaval.ca/etudes/programmes-detudes/microprogramme-de-deuxieme-cycle-en-traitement-de-donnees-massives" target="_blank">Graduate microprogram in massive data processing</a>
                </b> (in progress)<br>
                Laval University
            </div>
    
            <div class="mb-3"><b>MBA, Information Technology Management</b> (1999 – 2006)<br>
            Mention of Excellence from the Faculties of Graduate Studies and Administrative Sciences<br>
            Laval University
            </div>
        
            <div class="mb-3"><b>B. Sc., Applied Mathematics</b> (1985 – 1988)<br>
                University of Sherbrooke
            </div>
    
            <div class="mb-3"><b>Four exams</b> of Casualty Actuarial Society (1986 - 1991)</div>
    
            <div class="mb-3"><b>
                <a href="#/deZoomcamp">Data Engineering Zoomcamp</a></b> (in progress)<br>
                DataTalks.Club
            </div>
    
            <div class="mb-3"><b>
                <a href="#/dlsCoursera">Deep Learning Specialization</a></b> (2018)<br>
                Coursera
            </div>
    
            <div class="mb-3"><b>
                <a href="#/webUdacity">Full Stack Web Developer Nanodegree</a></b> (2017)<br>
                Udacity
            </div>
    
            <h2>Technical skills</h2>
    
            <div class="mb-3">
                <b>Work Experience</b>: SAS, VBA/Excel, Fortran, SQL, Mainframe JCL/MVS/TSO/ISPF.<br>
                <b>Familiarity</b>:
                <ul style="margin:0">
                    <li><b>Languages</b> : Java, Scala, Apache Spark, R, Python (NumPy, pandas, Matplotlib), <a href="https://code.kx.com/q/" target="_blank">q/kdb+</a>.</li>
                    <li><b>IDE</b> : IntelliJ, PyCharm, VS Code, Jupyter.</li>
                    <li><b>Cloud</b> : Google Cloud.</li>
                    <li><b>Databases</b> : PostgreSQL, MongoDB.</li>
                    <li><b>Machine Learning</b> : scikit-learn, PyTorch, fast.ai, XGBoost.</li>
                    <li><b>Others</b> : Git, Antora, Databricks, Snowflake, Docker, Apache Airflow, Prefect.</li>
                </ul>
            </div>
    
            <div class="mb-3">Last revised: March 26, 2023.</div>`,
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
        },
        de_zoomcamp: {
            status: "in progress", 
            content: `<p>I'm starting my year 2023 with  
                <a href="https://github.com/DataTalksClub/data-engineering-zoomcamp" target="_blank">Data Engineering Zoomcamp</a>
                by <a href="https://datatalks.club/" target="_blank">DataTalksClub</a>.
                </p>
                <p>See my <i class="fa fa-github" style="font-size:24px"></i> <a href="https://github.com/boisalai/de-zoomcamp-2023" target="_blank">GitHub repository</a>.</p>
                <p>This 9-week course focuses on data engineering and covers the following topics:
                <ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week1.md" target="_blank">Week 1</a>: Introduction & Prerequisites 
                        (<a href="https://www.docker.com/" target="_blank">Docker</a>, <a href="https://www.terraform.io/" target="_blank">Terraform</a>, 
                        <a href="https://cloud.google.com/" target="_blank">Google Cloud Platform</a>).</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_1_docker_sql/homework1.md" target="_blank">Homework 1.1</a>,
                            <a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_1_terraform/homework1.md" target="_blank">Homework 1.2</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week2.md" target="_blank">Week 2</a>: Workflow Orchestration 
                        with <a href="https://www.prefect.io/" target="_blank">Prefect</a>.</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_2/homework.md" target="_blank">Homework 2</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week3.md" target="_blank">Week 3</a>: Data Warehouse 
                        with <a href="https://cloud.google.com/bigquery" target="_blank">BigQuery</a>.</li>
                        <ul>
                            <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/homeworks/week_3/homework.md" target="_blank">Homework 3</a>.</li>
                        </ul>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week4.md" target="_blank">Week 4</a>: Analytics engineering with 
                        <a href="https://docs.getdbt.com/" target="_blank">dbt</a>.</li>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week5.md" target="_blank">Week 5</a>: Batch processing with <a href="https://spark.apache.org/" target="_blank">Spark</a> (Spark Dataframes & SQL).</li>
                    <li><a href="https://github.com/boisalai/de-zoomcamp-2023/blob/main/week6.md" target="_blank">Week 6</a>: Streaming with <a href="https://kafka.apache.org/" target="_blank">Kafka</a> (Kafka Connect and ksqlDB, Avro schema).</li>
                    <li>Weeks 7, 8 & 9: Putting everything we learned to practice into a project.</li>
                    <li>Weeks 7 and 8: Working on our project.</li>
                    <li>Week 9: Reviewing your peers.</li>
                </ul>
                </p>        
                <p>The architecture of the project that we will have to do will have to look like this:</p>
                <img src="assets/img/arch_1.jpg" style="width: 100%; max-width: 500px;">
                <p>Last update: February 19, 2023.</p>`
        },
        dls_coursera: {
            content: `<p>In 2018, I took Coursera's 
                <a href="https://www.coursera.org/specializations/deep-learning" target="_blank">Deep Learning Specialization</a>.
                In particular, I have built and trained neural networks such as convolutional neural networks,
                recurrent neural networks, LSTMs and learned how to improve them with regularization techniques such as
                Dropout, BatchNorm, etc.
                I hope one day to find my notes and present them here.
                <p><img src="assets/img/coursera-1.jpg" style="border: solid 1px #212529; width: 100%; max-width: 700px;"><br>
                Verify this certificate at: <a href="https://coursera.org/verify/specialization/UHH4Y7VAF8EA" target="_blank">coursera.org/verify/specialization/UHH4Y7VAF8EA</a>.</p>
                <p>Last update: February 19, 2023.</p>`
        },
        web_udacity: {
            content: `<p>In 2017, I took the course
                <a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044" target="_blank">Full Stack Web Developer Nanodegree</a>
                by Udacity. In particular, I configured a Linux server (Ubuntu,
                    <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>), developed a web application (Python,
                    <a href="https://flask.palletsprojects.com/" target="_blank">Flask</a>, SQL), used a framework
                (<a href="https://knockoutjs.com/" target="_blank">Knockout.js</a>) and APIs
                (<a href="https://developers.google.com/maps" target="_blank">Google Maps API</a>, <a href="https://location.foursquare.com/developer/" target="_blank">Foursquate API</a>).

                <p>See my <i class="fa fa-github" style="font-size:24px"></i> GitHub repositories&nbsp;:
                <ul>
                    <li><a href="https://github.com/boisalai/udacity-movie-trailer-website" target="_blank">Movie Trailer Website</a>.</li>
                    <li><a href="https://github.com/boisalai/udacity-portfolio-site" target="_blank">Build a Portfolio Site</a>.</li>
                    <li><a href="https://github.com/boisalai/udacity-logs-analysis-project" target="_blank">Logs Analysis Project</a>.</li>
                    <li><a href="https://github.com/boisalai/udacity-catalog-app" target="_blank">Catalog App</a>.</li>
                    <li><a href="https://github.com/boisalai/udacity-neighborhood-map" target="_blank">Neighborhood map</a>.</li>
                    <li><a href="https://github.com/boisalai/udacity-linux-server-configuration" target="_blank">Linux Server Configuration</a>.</li>
                </ul>
                </p>
                
                <p><img src="assets/img/udacity-1.jpg" style="border: solid 1px #212529; width: 100%; max-width: 700px;"><br>
                    Verify this certificate at: <a href="https://confirm.udacity.com/R34KM6FP" target="_blank">confirm.udacity.com/R34KM6FP</a>.</p>
                    <p>Last update: February 19, 2023.</p>`
        }
    }
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