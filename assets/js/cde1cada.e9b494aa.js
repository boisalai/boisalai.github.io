"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=s.createContext({}),u=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?s.createElement(g,i(i({ref:t},p),{},{components:n})):s.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Quiz 1 du 27 septembre 2023",sidebar_position:31,sidebar_class_name:"hidden"},i="Quiz 1 du 27 septembre 2023",l={unversionedId:"courses/gif-7005/quiz-1",id:"courses/gif-7005/quiz-1",title:"Quiz 1 du 27 septembre 2023",description:"Question 1",source:"@site/docs/courses/gif-7005/quiz-1.md",sourceDirName:"courses/gif-7005",slug:"/courses/gif-7005/quiz-1",permalink:"/docs/courses/gif-7005/quiz-1",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_label:"Quiz 1 du 27 septembre 2023",sidebar_position:31,sidebar_class_name:"hidden"},sidebar:"tutorialSidebar",previous:{title:"Devoir 2",permalink:"/docs/courses/gif-7005/devoir-2"},next:{title:"Projet",permalink:"/docs/courses/gif-7005/projet"}},o={},u=[{value:"Question 1",id:"question-1",level:2},{value:"Question 2",id:"question-2",level:2},{value:"Question 3",id:"question-3",level:2},{value:"Question 4",id:"question-4",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quiz-1-du-27-septembre-2023"},"Quiz 1 du 27 septembre 2023"),(0,a.kt)("h2",{id:"question-1"},"Question 1"),(0,a.kt)("p",null,"Voici les \xe9l\xe9ments qui sont vrais concernant la distribution gaussienne multivari\xe9e et son utilisation dans un contexte d'apprentissage supervis\xe9 :"),(0,a.kt)("p",null,"A. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Dans une loi normale multivari\xe9e, la matrice de covariance encode effectivement des informations sur les relations (correlations) et les variances entre les diff\xe9rentes variables."),(0,a.kt)("p",null,"B. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Dans un mod\xe8le de m\xe9lange (comme le m\xe9lange de gaussiennes), chaque composante repr\xe9sente une fonction de densit\xe9 de probabilit\xe9, et le mod\xe8le peut effectivement approximer des distributions de donn\xe9es complexes en combinant plusieurs de ces composantes."),(0,a.kt)("p",null,"C. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". L'ajout de variables inutiles ou non pertinentes peut conduire \xe0 des probl\xe8mes comme la mal\xe9diction de la dimensionnalit\xe9, ce qui peut d\xe9grader les performances du mod\xe8le plut\xf4t que de les am\xe9liorer."),(0,a.kt)("p",null,"D. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". Les fronti\xe8res de d\xe9cision peuvent \xeatre non lin\xe9aires en fonction des matrices de covariance."),(0,a.kt)("p",null,"E. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Si la matrice de covariance est diagonale, cela signifie qu'il n'y a pas de corr\xe9lation entre les caract\xe9ristiques, car les \xe9l\xe9ments hors diagonale (qui repr\xe9sentent les covariances entre diff\xe9rentes caract\xe9ristiques) sont nuls."),(0,a.kt)("p",null,"F. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". Une distribution gaussienne multivari\xe9e est typiquement utilis\xe9e pour des variables continues. Pour des variables discr\xe8tes ou cat\xe9gorielles, d'autres distributions seraient plus appropri\xe9es."),(0,a.kt)("p",null,"G. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Dans un classifieur bay\xe9sien na\xeff, on suppose effectivement que toutes les variables sont conditionnellement ind\xe9pendantes entre elles, \xe9tant donn\xe9 la classe."),(0,a.kt)("p",null,"H. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". Bien que les mod\xe8les gaussiens puissent \xeatre utilis\xe9s pour la classification de textes, ils ne sont pas n\xe9cessairement les mieux adapt\xe9s pour cette t\xe2che. Des m\xe9thodes comme le mod\xe8le de sac de mots (bag of words) ou TF-IDF, combin\xe9es avec d'autres classificateurs, peuvent \xeatre plus efficaces pour les t\xe2ches de classification de texte."),(0,a.kt)("p",null,"I. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Si les probabilit\xe9s a priori des classes sont diff\xe9rentes, elles influenceront les fronti\xe8res de d\xe9cision dans un mod\xe8le de classement param\xe9trique avec des gaussiennes multivari\xe9es."),(0,a.kt)("p",null,"En r\xe9sum\xe9, les d\xe9clarations A, B, E, G, et I sont vraies."),(0,a.kt)("h2",{id:"question-2"},"Question 2"),(0,a.kt)("p",null,"Pour chacune des propositions suivantes, s\xe9lectionnez le terme correspondant qui est le plus appropri\xe9."),(0,a.kt)("p",null,"Pour chaque question, choisir une des correspondances possibles parmi lesquelles :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Probabilit\xe9 a priori"),(0,a.kt)("li",{parentName:"ul"},"Vraisemblance de classe"),(0,a.kt)("li",{parentName:"ul"},"\xc9vidence"),(0,a.kt)("li",{parentName:"ul"},"Probabilit\xe9 a posteriori"),(0,a.kt)("li",{parentName:"ul"},"Risque esp\xe9r\xe9"),(0,a.kt)("li",{parentName:"ul"},"Fonction de perte"),(0,a.kt)("li",{parentName:"ul"},"R\xe9gion de d\xe9cision"),(0,a.kt)("li",{parentName:"ul"},"Option de rejet")),(0,a.kt)("p",null,"Pour chaque question, voici les correspondances appropri\xe9es :"),(0,a.kt)("p",null,"Permet de mod\xe9liser la plausibilit\xe9 d'observer une instance particuli\xe8re \xe9tant donn\xe9 une classe sp\xe9cifique, ce qui facilite les d\xe9cisions de classement\n= ",(0,a.kt)("strong",{parentName:"p"},"Vraisemblance de classe")),(0,a.kt)("p",null,"Fournit un m\xe9canisme bas\xe9 sur un seuil pour \xe9viter d'assigner des points de donn\xe9es \xe0 une classe lorsque leurs probabilit\xe9s a posteriori n'atteignent pas un certain niveau de confiance, ce qui am\xe9liore la fiabilit\xe9 des r\xe9sultats du classement\n= ",(0,a.kt)("strong",{parentName:"p"},"Option de rejet")),(0,a.kt)("p",null,"Sert de facteur de normalisation dans la r\xe8gle de Bayes, garantissant que la somme des probabilit\xe9s pour toutes les classes est \xe9gale \xe0 un\n= ",(0,a.kt)("strong",{parentName:"p"},"\xc9vidence")),(0,a.kt)("p",null,"Correspond \xe0 la fonction de probabilit\xe9 de densit\xe9 sp\xe9cifique \xe0 la classe\n= ",(0,a.kt)("strong",{parentName:"p"},"Vraisemblance de classe")," (mais c'est en quelque sorte redondant avec la premi\xe8re proposition, car c'est presque la m\xeame chose)"),(0,a.kt)("p",null,"Il s'agit de la vraisemblance d'observer une donn\xe9e, peu importe sa classe\n= ",(0,a.kt)("strong",{parentName:"p"},"\xc9vidence")),(0,a.kt)("p",null,"Mesure le co\xfbt moyen ou la p\xe9nalit\xe9 associ\xe9e aux erreurs de classement, guidant la s\xe9lection de la meilleure d\xe9cision\n= ",(0,a.kt)("strong",{parentName:"p"},"Risque esp\xe9r\xe9")),(0,a.kt)("p",null,"D\xe9finit une mesure math\xe9matique du co\xfbt encouru lorsqu'une d\xe9cision de classement incorrecte est prise\n= ",(0,a.kt)("strong",{parentName:"p"},"Fonction de perte")),(0,a.kt)("p",null,"Repr\xe9sente la probabilit\xe9 initiale attribu\xe9e \xe0 chaque classe avant l'observation des donn\xe9es\n= ",(0,a.kt)("strong",{parentName:"p"},"Probabilit\xe9 a priori")),(0,a.kt)("p",null,"Correspond g\xe9n\xe9ralement au r\xe9sultat de l'application de la formule de Bayes dans un contexte de classement\n= ",(0,a.kt)("strong",{parentName:"p"},"Probabilit\xe9 a posteriori")),(0,a.kt)("p",null,"D\xe9finit les zones de l'espace des caract\xe9ristiques o\xf9 des \xe9tiquettes de classe sp\xe9cifiques sont attribu\xe9es, ce qui permet de visualiser les fronti\xe8res de d\xe9cision de classement\n= ",(0,a.kt)("strong",{parentName:"p"},"R\xe9gion de d\xe9cision")),(0,a.kt)("h2",{id:"question-3"},"Question 3"),(0,a.kt)("p",null,"Mettre en ordre croissant de complexit\xe9 les mod\xe8les de classement param\xe9trique suivants, du plus simple (1) au plus complexe (5)."),(0,a.kt)("p",null,"Pour classer les mod\xe8les en ordre croissant de complexit\xe9, consid\xe9rons la flexibilit\xe9 des mod\xe8les, le nombre de param\xe8tres \xe0 estimer, et la forme des fronti\xe8res de d\xe9cision qu'ils peuvent cr\xe9er."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. Classifieur \xe0 la plus proche moyenne:"),"\nCe mod\xe8le se base simplement sur la moyenne des caract\xe9ristiques de chaque classe. C'est un mod\xe8le tr\xe8s simple qui ne prend pas en compte la covariance des donn\xe9es."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Classifieur bay\xe9sien avec covariance partag\xe9e:"),"\nCe mod\xe8le suppose que toutes les classes ont la m\xeame matrice de covariance. Par cons\xe9quent, bien que le mod\xe8le tienne compte de la covariance, il est moins flexible car il impose la m\xeame structure de covariance \xe0 toutes les classes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. Mod\xe8le multivari\xe9 de loi normale avec covariance partag\xe9e:"),"\nBien que ce mod\xe8le partage une similitude avec le (C) en termes de partage de la covariance, il est g\xe9n\xe9ralement plus complexe car il est capable de mod\xe9liser des densit\xe9s pour chaque classe."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. Mod\xe8le multivari\xe9e de loi normale avec covariance distincte par classe:"),"\nCe mod\xe8le permet \xe0 chaque classe d'avoir sa propre matrice de covariance. Cela augmente la flexibilit\xe9 du mod\xe8le, car il peut adapter la forme de la distribution de chaque classe aux donn\xe9es sp\xe9cifiques \xe0 cette classe."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. Densit\xe9-m\xe9lange de la loi normale multivari\xe9e:"),"\nC'est le plus complexe des mod\xe8les list\xe9s. Pour chaque classe, ce mod\xe8le peut m\xe9langer plusieurs distributions gaussiennes, chacune avec ses propres moyennes et covariances. Cela lui permet de capturer des formes de distribution tr\xe8s flexibles et complexes pour chaque classe."),(0,a.kt)("h2",{id:"question-4"},"Question 4"),(0,a.kt)("p",null,"Parmi les \xe9l\xe9ments ici-bas, s\xe9lectionnez ceux qui sont vrais \xe0 propos de la r\xe9gularisation dans un mod\xe8le d'apprentissage."),(0,a.kt)("p",null,"A. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". Les techniques de r\xe9gularisation sont souvent plus cruciales pour les petits ensembles de donn\xe9es car elles peuvent aider \xe0 \xe9viter le sur-apprentissage lorsque le nombre de donn\xe9es est limit\xe9. Pour les grands ensembles de donn\xe9es, la r\xe9gularisation peut toujours \xeatre utile, mais elle est moins critique que pour les petits ensembles."),(0,a.kt)("p",null,"B. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". C'est en fait l'inverse: les techniques de r\xe9gularisation sont utilis\xe9es pour r\xe9duire la complexit\xe9 d'un mod\xe8le et pour \xe9viter qu'il ne s'adapte trop aux donn\xe9es d'entra\xeenement (sur-apprentissage)."),(0,a.kt)("p",null,"C. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". La r\xe9gularisation a tendance \xe0 r\xe9duire la variance du mod\xe8le (au d\xe9triment d'une augmentation potentielle du biais)."),(0,a.kt)("p",null,"D. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". La complexit\xe9 de la matrice de covariance affectera la capacit\xe9 du mod\xe8le \xe0 s'adapter aux donn\xe9es. Une matrice de covariance compl\xe8te est plus flexible et peut entra\xeener un risque accru de sur-apprentissage par rapport \xe0 une matrice diagonale."),(0,a.kt)("p",null,"E. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Dans le contexte des classifieurs bay\xe9siens na\xeffs, l'hypoth\xe8se d'une covariance mutualis\xe9e peut aider \xe0 simplifier le mod\xe8le et \xe0 le rendre plus robuste, en particulier avec des donn\xe9es d'entra\xeenement limit\xe9es."),(0,a.kt)("p",null,"F. ",(0,a.kt)("strong",{parentName:"p"},"Faux"),". Bien que la r\xe9gularisation puisse aider \xe0 r\xe9duire la variance, elle peut \xe9galement augmenter le biais. Il n'est pas toujours vrai que la r\xe9gularisation r\xe9duise \xe0 la fois le biais et la variance."),(0,a.kt)("p",null,"G. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". Le degr\xe9 du polyn\xf4me en r\xe9gression polynomiale agit comme un facteur de r\xe9gularisation. Un degr\xe9 plus \xe9lev\xe9 augmente la complexit\xe9 du mod\xe8le, ce qui peut entra\xeener un sur-apprentissage. Pour \xe9viter cela, une r\xe9gularisation explicite (comme la r\xe9gularisation L1 ou L2) est souvent ajout\xe9e."),(0,a.kt)("p",null,"H. ",(0,a.kt)("strong",{parentName:"p"},"Vrai"),". L'un des principaux objectifs des techniques de r\xe9gularisation est d'\xe9viter le sur-apprentissage en ajoutant un terme de p\xe9nalit\xe9 qui d\xe9courage les grandes valeurs de param\xe8tres."),(0,a.kt)("p",null,"En conclusion, les \xe9l\xe9ments C, E, G, et H sont vrais \xe0 propos de la r\xe9gularisation dans un mod\xe8le d'apprentissage."))}d.isMDXComponent=!0}}]);