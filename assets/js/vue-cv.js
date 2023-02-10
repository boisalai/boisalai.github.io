const CurriculumVitae = {
    template: `<div class="container mt-5">
        <h1>Curriculum vit&#230;</h1>

        <p>
            Alain Boisvert, MBA, <a href="mailto:ay.boisvert@gmail">ay.boisvert@gmail.com</a><br>
            <span v-html="$t('about.download_cv')"></span>
        </p>

        <h2>Expérience professionnelle</h2>
    
        <div class="mb-3">
            <b>Conseiller stratégique</b> (et retour aux études depuis 2021/06)<br>
            Direction générale des infrastructures<br>
            Ministère de l'Enseignement supérieur
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

        <div class="mb-3"><b>Data Engineering Zoomcamp</b> (En cours)<br>
            DataTalks.Club
        </div>

        <div class="mb-3"> 
            <b>
                <a href="https://www.fsg.ulaval.ca/etudes/programmes-detudes/microprogramme-de-deuxieme-cycle-en-traitement-de-donnees-massives" target="_blank">Microprogramme de deuxième cycle en données massives</a>
            </b> (depuis 2021)<br>
            Université Laval
        </div>

        <div class="mb-3"><b>Spécialisation Deep Learning</b> (2018)<br>
            Coursera
        </div>

        <div class="mb-3"><b>Full Stack Web Developer Nanodegree</b> (2017)<br>
            Udacity
        </div>

        <div class="mb-3"><b>MBA, Gestion des technologies de l'information</b> (1999 – 2006)<br>
            Mention d'excellence des Facultés des études supérieures et des sciences de l'administration<br>
            Université Laval
        </div>
    
        <div class="mb-3"><b>B. Sc., Mathématiques appliquées</b> (1985 – 1988)<br>
            Université de Sherbrooke
        </div>

        <div class="mb-3"><b>Quatre examens</b> de la Casualty Actuarial Society (1986 - 1991)</div>

        <h2>Compétences techniques</h2>

        <div class="mb-3">
            <b>Expérience de travail</b> : SAS, SQL, VBA/Excel, Fortran, Mainframe JCL/MVS/TSO/ISPF.<br>
            <b>Connaissance</b> :
            <ul style="margin:0">
                <li><b>Langages</b> : Java, Scala, Apache Spark, R, Python (NumPy, pandas, Matplotlib), SQL.</li>
                <li><b>Environnements de développement</b> : IntelliJ IDEA, PyCharm, Visual Studio Code, Google Colab, Jupyter.</li>
                <li><b>Data Lake</b> : Delta Lake, Databricks, Snowflake.</li>
                <li><b>Apprentissage automatique</b> : scikit-learn, PyTorch, fast.ai, XGBoost.</li>
                <li><b>DevOps/MLOps</b> : Docker, Apache Airflow, Prefect.</li>
                <li><b>Web</b> : Javascript, Vue.js.</li>
                <li><b>Autres</b> : Bash/Zsh, Git, Antora.</li>
            </ul>
            <b>Familiarité</b> : C/C++, Go, Julia, <a href="https://code.kx.com/q/" target="_blank">q/kdb+</a>, MongoDB, AWS, GCP, Terraform, Hibernate, Angular, Flask, TypeScript.
        </div>

        <div class="mb-3">Dernière révision : 30 janvier 2023.</div>
    </div>`,
};