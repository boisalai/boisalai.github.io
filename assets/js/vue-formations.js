const Formations = {
    template: `<div class="container mt-5">
        <h1>{{ $t("formations") }}</h1>
  
        <h3>2023</h3>
        <ul>
            <!--
            <li>Lecture de <a href="https://www.manning.com/books/kafka-in-action" target="_blank">Kafka in Action</a>, de Dylan Scott, Viktor Gamov et Dave Klein.</li>
            <li>Lecture de <a href="https://www.confluent.io/resources/kafka-the-definitive-guide/" target="_blank">Kafka: The Definitive Guide</a> de Gwen Shapira, Todd Palino, Rajini Sivaram, et Krit Petty (O'Reilly).</li>      
            <li>Lecture de <a href="http://www.hadoopbook.com/" target="_blank">Hadoop: The Definitive Guide, Fourth Edition</a>, de Tom White (O'Reilly).</a></li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/" target="_blank">Designing Data-Intensive Applications</a>, by Martin Kleppmann (O'Reilly) (en cours).</li>
            -->
            
            <li><b>DataTalks.Club</b>, <a href="https://github.com/DataTalksClub/data-engineering-zoomcamp" target="_blank">Data Engineering Zoomcamp</a> 
            (Docker, Terraform, GCP, BigQuery, PostgreSQL, SQLAlchemy, Prefect, etc.).</li>
            <li><b>Université Laval</b>, <a href="https://www.ulaval.ca/etudes/cours/ift-7025-techniques-avancees-en-intelligence-artificielle" target="_blank">IFT-7025 Techniques avancées en intelligence artificielle</a> (en cours).</li>
        </ul>

        <h3>2022</h3>
        <ul>
           <li>Lecture de <a href="https://www.artima.com/shop/programming_in_scala_5ed" target="_blank">Programming in Scala, Fifth Edition</a>, by Martin Odersky, Lex Spoon, Bill Venners, and Frank Sommers (Artima).</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/" target="_blank">MongoDB: The Definitive Guide</a>, chapitres 1 à 5, de Shannon Bradshaw, Eoin Brazil et Kristina Chodorow (O'Reilly).</li>
            <li>Lecture de <a href="https://www.amazon.com/MongoDB-Basics-Peter-Membrey/dp/148420896X" target="_blank">MongoDB Basics</a>, de Peter Membrey, David Hows et Eelco Plugge (Apress).</li>
            <li>Lecture de <a href="https://www.youtube.com/watch?v=gAGEar5HQoU&t=7s" target="_blank">Getting Started with Docker</a>, sur Youtube.</li>
            <li>Lecture de <a href="https://sebastianraschka.com/blog/2022/ml-pytorch-book.html" target="_blank">Machine Learning with PyTorch and Scikit-Learn</a>, de Sebastian Raschka, Yuxi (Hayden) Liu, Vahid Mirjalili.</li>
            <li>Lecture de <a href="https://www.youtube.com/watch?v=8eoysfqO3UY" target="_blank">Introduction to kdb+ and q</a>, de Jeffry Borror.</li>
            <li>Lecture de <a href="https://www.databricks.com/explore/aws-training-series-refresh/watch-introduction-to-aws-series" target="_blank">Databricks on AWS training series</a>.</li>
            <li>Apprentissage de <a href="https://www.snowflake.com/en/" target="_blank">Snowflake</a>.</li>
            <li>Lecture de <a href="https://github.com/PacktPublishing/Machine-Learning-in-Biotechnology-and-Life-Sciences" target="_blank">Machine Learning in Biotechnology and Life Sciences</a> de Saleh Alkhalifa.</li>
            <li>Lecture de <a href="http://www.manning.com/books/data-pipelines-with-apache-airflow" target="_blank">Data Pipelines with Apache Airflow</a>, chapitres 1 à 7, de Julian de Ruiter et Bas Harenslak (Manning).</li> 
            <li>Lecture de <a href="https://apachekafkabook.com/" target="_blank">Effective Kafka</a>, chapitres 1 à 7, de Emil Koutanov.</li>
            <li>Lecture de <a href="https://www.databricks.com/blog/2021/06/22/get-your-free-copy-of-delta-lake-the-definitive-guide-early-release.html" target="_blank">Delta Lake: The Definitive Guide</a>, de Denny Lee, Tathagata Das et Vini Jaaiswal.</li>
            <li>Lecture de <a href="https://www.databricks.com/wp-content/uploads/2021/06/data-engineers-guide-apache-spark-delta-lake-v3.pdf" target="_blank">Data Engineers Guide to Apache Spark and Delta Lake</a>, de Databricks.</li>
            <li>Lecture de <a href="https://www.manning.com/books/spark-in-action-second-edition" target="_blank">Spark in Action, Second Edition</a>, de Jean-Georges Perrin (Manning).</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/" target="_blank">Learning Spark, 2nd Edition</a>, Jules S. Damji, Brooke Wenig, Tathagata Das, Denny Lee (O'Reilly).</li>
            <li>Lecture de <a href="https://www.handsonscala.com/" target="_blank">Hands-on Scala Programming</a>, de Haoyi Li.</li>
            <li>Lecture de <a href="https://booksites.artima.com/programming_in_scala_3ed" target="_blank">Programming in Scala, Third Edition</a>, de Martin Odersky, Lex Spoon, Bill Venners (Artima).</li>
            <li>Lecture de <a href="https://docs.scala-lang.org/scala3/book/introduction.html" target="_blank">Scala 3 Book</a>.</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" target="_blank">Designing Machine Learning Systems</a>, de Chip Huyen (O'Reilly).</li>
            <li>Lecture de <a href="https://www.manning.com/books/java-8-in-action" target="_blank">Java 8 in Action: Lambdas, streams, and functional-style programming</a>, de 
                Raoul-Gabriel Urma, Mario Fusco, et Alan Mycroft (Manning).</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/java-a-beginners/9781260440225/" target="_blank">Java: A Beginner's Guide, 8th Edition</a>, de Herbert Schildt (O'Reilly).</li>
            <li><b>fast.ai</b>, <a href="https://course.fast.ai/" target="_blank">Practical Deep Learning for Coders</a>.</li>
            <li><b>Hertie School Data Science Lab</b>, Data Science Summer School 2022, <a href="https://ds3.ai/2022/transformer.html" target="_blank">Transformers in Natural Language Processing</a>.</li>
            <li><b>Hugging Face</b>, <a href="https://huggingface.co/course/chapter0/1?fw=pt" target="_blank">Hugging Face Course</a>.</li>
            <li><b>Calcul Québec</b>, Introduction à la ligne de commandes Unix.</li>
            <li><b>Calcul Québec</b>, Analyse de données massives avec Spark.</li>
            <li>Lecture de <a href="https://www.manning.com/books/deep-learning-with-pytorch" target="_blank">Deep Learning with PyTorch</a>, de Eli Stevens, Luca Antiga et Thomas Viehmann.</li>
            <li>Lecture de <a href="https://wesmckinney.com/book/" target="_blank">Python for Data Analysis, Third Edition</a>, de Wes McKinney.</li>
            <li><b>Université Laval</b>, <a href="https://www.ulaval.ca/etudes/cours/ift-3001-conception-et-analyse-dalgorithmes" target="_blank">IFT-3001 Conception et analyse d'algorithmes</a>.</li>
        </ul>
        
        <h3>2021</h3>
        <ul>
            <li>Apprentissage de <a href="https://julialang.org/" target="_blank">Julia</a>.</li>
            <li>Apprentissage de <a href="https://antora.org/" target="_blank">Antora</a>/AsciiDoc.</li>
            <li><b>Kaggle</b>, <a href="https://www.kaggle.com/thirty-days-of-ml" target="_blank">30 Days of ML</a>.</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/deep-learning-for/9781492045519/" target="blank">Deep Learning for Coders with Fastai and PyTorch: AI Applications Without a PhD</a>.</li>
            <li><b>MIT CSAIL</b>, <a href="https://missing.csail.mit.edu/" target="_blank">The Missing Semester of Your CS Education</a> (Bash, Scripts, Vim, Git...).</li>
            <li>Lecture de <a href="https://d2l.ai/" target="_blank">Dive into Deep Learning</a>.</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/clean-code-a/9780136083238/" target="_blank">Clean Code: A Handbook of Agile Software Craftsmanship</a>, de Robert C. Martin.</li>
            <li><b>IVADO</b>, SDS-230 Science des données en santé.</li>
            <li><b>Université Laval</b>, <a href="https://www.ulaval.ca/etudes/cours/glo-2100-algorithmes-et-structures-de-donnees-pour-ingenieurs" target="_blank">GLO-2100 Algorithmes et structures de données pour ingénieurs</a>.</li>
        </ul>

        <h3>2020</h3>
        <ul>
            <li><b>fast.ai</b>, <a href="https://course19.fast.ai/" target="_blank">Practical Deep Learning for Coders</a>.</li>
        </ul>

        <h3>2017 - 2019</h3>
        <ul>
            <li>Apprentissage de Python (<a href="https://pandas.pydata.org/" target="_blank">Pandas</a>, <a href="https://numpy.org/" target="_blank">Numpy</a>, 
                <a href="https://matplotlib.org/" target="_blank">Mathplotlib</a>).</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/python-for-data/9781491957653/" target="_blank">Python for Data Analysis</a>, de Wes McKinney.</li>
            <li>Lecture de <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank">Hands-On Machine Learning with Scikit-Learn & TensorFlow</a>, de Aurélien Géron.</li>
            <li>Lecture de <a href="https://www.deeplearningbook.org/" target="_blank">Deep Learning</a>, de Ian Goodfellow, Yoshua Bengio et Aaron Courville.</li>
            <li><b>Coursera</b>, <a href="https://www.coursera.org/account/accomplishments/specialization/UHH4Y7VAF8EA" target="_blank">Deep Learning Specialization</a> (
                Neural Network and Deep Learning, Hyperparameter tuning, CNN, Sequence Models, Structuring Machine Learning Projects).</li>
            <li><b>Coursera</b>, <a href="https://www.coursera.org/learn/machine-learning-projects" target="_blank">Structuring Machine Learning Projects</a>.</li>
            <li><b>Udacity</b>, How to Use Git and GitHub.</li>
            <li><b>Udacity</b>, Intro to TensorFlow for Deep Learning.</li>
            <li><b>Udacity</b>, Intro to Deep Learning with PyTorch.</li>
            <li><b>Udacity</b>, <a href="https://www.udacity.com/course/data-wrangling-with-mongodb--ud032" target="_blank">Data Wrangling with MongoDB</a>.</li>
            <li><b>Udacity</b>, <a href="https://confirm.udacity.com/R34KM6FP" target="_blank">Full Stack Web Developer Nanodegree</a>
                <ul style="margin-top: 0;">
                    <li><a href="https://github.com/boisalai/udacity-linux-server-configuration" target="_blank">Linux Server Configuration</a> (PostgreSQL, AWS Lightsail, Linux).</li>
                    <li><a href="https://github.com/boisalai/udacity-neighborhood-map" target="_blank">Neighborhood map</a> (Knockout.js, Google Maps API, Foursquare API).</li>
                    <li><a href="https://github.com/boisalai/udacity-catalog-app" target="_blank">Catalog App</a> (Python, Flask, SQLAlchemy, SQLite, Authentification, Bootstrap).</li>
                    <li><a href="https://github.com/boisalai/udacity-logs-analysis-project" target="_blank">Logs Analysis Project</a> (Python, psycopg2).</li>
                    <li><a href="https://github.com/boisalai/udacity-portfolio-site" target="_blank">Build a Portfolio Site</a> (HTML, CSS).</li>
                    <li><a href="https://github.com/boisalai/udacity-movie-trailer-website" target="_blank">Movie Trailer Website</a> (Python, webbrowser).</li>
                </ul>
            </li>
        </ul>

        <h3>1999 - 2016</h3>
        <ul>
            <li><b>Université Laval</b>, MBA, Gestion des technologies de l'information (1999 – 2006)<br>
                Mention d'excellence des Facultés des études supérieures et des sciences de l'administration.</li>
            <li>Apprentissage de Java (Struts, Hibernate).</li>
            <li>Apprentissage de Angular/TypeScript, Vue.js/JavaScript, HTML/CSS.</li> 
            <li>Cinq années d'expérience avec VBA/Excel.</li>
        </ul>

        <h3>1985 - 1998</h3>
        <ul>
            <li><b>Université de Sherbrooke</b>, B. Sc., Mathématiques appliquées (1985 – 1988).</li>
            <li><b>Casualty Actuarial Society</b>, Quatre examens (1986 – 1991).</li>
            <li>Huit mois d'expérience avec Fortran.</li>
            <li>Dix années d'expérience avec SAS et MVS/TSO/ISPF.</li>
            <li><b>UQAM</b>, INF-5220 LISP et ses applications.</li>
            <li><b>UQAM</b>, INF-3720 Langage C et progiciels.</li>
        </ul>

        <p>Dernière révision : 12 décembre 2022.</p>
    </div>`
};