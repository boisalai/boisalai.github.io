"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[6102],{90744:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var i=s(85893),r=s(11151);const l={sidebar_label:"10 Deep NLP - Plongements contextuels et mod\xe8les encodeurs pr\xe9-entra\xeen\xe9s",sidebar_position:12},t="10. Deep NLP - Plongements contextuels et mod\xe8les encodeurs pr\xe9-entra\xeen\xe9s",d={id:"courses/university/ift-7022/week-10",title:"10. Deep NLP - Plongements contextuels et mod\xe8les encodeurs pr\xe9-entra\xeen\xe9s",description:"Transformers encodeurs, plongements contextuels et mod\xe8les pr\xe9entra\xeen\xe9s.",source:"@site/docs/courses/university/ift-7022/week-10.md",sourceDirName:"courses/university/ift-7022",slug:"/courses/university/ift-7022/week-10",permalink:"/docs/courses/university/ift-7022/week-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/courses/university/ift-7022/week-10.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_label:"10 Deep NLP - Plongements contextuels et mod\xe8les encodeurs pr\xe9-entra\xeen\xe9s",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"9 Deep NLP - Introduction aux mod\xe8les Transformers",permalink:"/docs/courses/university/ift-7022/week-09"},next:{title:"11 Deep NLP - Traduction automatique et mod\xe8le encodeur-d\xe9codeur",permalink:"/docs/courses/university/ift-7022/week-11"}},c={},o=[{value:"Encodeur bidirectionne",id:"encodeur-bidirectionne",level:2},{value:"Plongements contextuels",id:"plongements-contextuels",level:2},{value:"BERT \u2013 Un encodeur",id:"bert--un-encodeur",level:2},{value:"BERT - Version de base",id:"bert---version-de-base",level:2},{value:"BERT Base vs BERT Large",id:"bert-base-vs-bert-large",level:2},{value:"BERT \u2013 Pr\xe9entra\xeenement",id:"bert--pr\xe9entra\xeenement",level:2},{value:"BERT \u2013 Entra\xeenement MLM",id:"bert--entra\xeenement-mlm",level:2},{value:"BERT \u2013 Entra\xeenement NSP",id:"bert--entra\xeenement-nsp",level:2},{value:"BERT \u2013 Entra\xeenement",id:"bert--entra\xeenement",level:2},{value:"BERT \u2013 Fine-tuning",id:"bert--fine-tuning",level:2},{value:"BERT - Autres mod\xe8les",id:"bert---autres-mod\xe8les",level:2},{value:"Tokenisation",id:"tokenisation",level:2},{value:"Tokenisation - WordPiece",id:"tokenisation---wordpiece",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Logiciel",id:"logiciel",level:2}];function a(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"10-deep-nlp---plongements-contextuels-et-mod\xe8les-encodeurs-pr\xe9-entra\xeen\xe9s",children:"10. Deep NLP - Plongements contextuels et mod\xe8les encodeurs pr\xe9-entra\xeen\xe9s"}),"\n",(0,i.jsx)(n.p,{children:"Transformers encodeurs, plongements contextuels et mod\xe8les pr\xe9entra\xeen\xe9s."}),"\n",(0,i.jsx)(n.p,{children:"R\xe9f\xe9rences :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Jurafsky & Martin 3e \xe9dition, ",(0,i.jsx)(n.a,{href:"https://web.stanford.edu/~jurafsky/slp3/11.pdf",children:"Chapitre 11"}),", sections 11.1 \xe0 11.3 (sauf 11.2.2 et 11.3.4)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1810.04805.pdf",children:"Article original"})," sur BERT"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1904.00962.pdf",children:"Large Batch Optimization for Deep learning: Training BERT in 76 minutes"})}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1907.11692.pdf",children:"RoBERTa"})]}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1911.03894.pdf",children:"CamemBERT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1912.05372.pdf",children:"FlauBERT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1910.01108.pdf",children:"DistillBERT"})]}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://openreview.net/pdf?id=r1xMH1BtvB",children:"ELECTRA"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un mod\xe8le ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1906.01502.pdf",children:"BERT multilingue"})]}),"\n",(0,i.jsxs)(n.li,{children:["Article sur ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/1801.06146.pdf",children:"ULMFit"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"encodeur-bidirectionne",children:"Encodeur bidirectionne"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["La couche de self-attention a acc\xe8s \xe0 tous les mots du texte","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bidirectionnel \u2013 autant \xe0 gauche qu\u2019\xe0 droite"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Encodage - Construit une repr\xe9sentation des mots/jetons"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s87",src:s(90975).Z+"",width:"1662",height:"478"})}),"\n",(0,i.jsx)(n.h2,{id:"plongements-contextuels",children:"Plongements contextuels"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Plongements ",(0,i.jsx)(n.strong,{children:"statiques"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ceux de Word2Vec, Glove, FastText\u2026"}),"\n",(0,i.jsx)(n.li,{children:"Une seule repr\xe9sentation par mot"}),"\n",(0,i.jsx)(n.li,{children:"Ne varient pas en fonction du sens ou du contexte"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Plongements ",(0,i.jsx)(n.strong,{children:"contextuels"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le vecteur d\u2019embedding prend en compte les mots environnants du texte"}),"\n",(0,i.jsxs)(n.li,{children:["C\u2019est ce que font les ",(0,i.jsx)(n.strong,{children:"transformers encodeurs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Un vecteur (embedding) en sortie pour chaque mot"}),"\n",(0,i.jsx)(n.li,{children:"Le m\xe9canisme d\u2019attention ajoute le contexte"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Questions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Comment les entra\xeener"})," ?"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Embeddings g\xe9n\xe9riques ou sp\xe9cifiques"})," ?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refaire tout le travail pour chaque application ?"}),"\n",(0,i.jsx)(n.li,{children:"O\xf9 prendre les donn\xe9es ?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bert--un-encodeur",children:"BERT \u2013 Un encodeur"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Propos\xe9 en 2018 par Google","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bidirectional Encoder for Representation Transformer"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Tout simplement un transformer encodeur"}),"\n",(0,i.jsxs)(n.li,{children:["Id\xe9es principales","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Construit avec des grands volumes de textes :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pr\xe9entra\xeenement"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["R\xe9utiliser le mod\xe8le pour obtenir des embeddings contextuels","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Transfert de param\xe8tres - ",(0,i.jsx)(n.em,{children:"fine-tuning"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Id\xe9es similaires avec des LSTMs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ELMo et ULMFiT"}),"\n",(0,i.jsx)(n.li,{children:"Moins efficace"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bert---version-de-base",children:"BERT - Version de base"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s88",src:s(9730).Z+"",width:"1682",height:"1074"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s89",src:s(10716).Z+"",width:"1658",height:"914"})}),"\n",(0,i.jsx)(n.h2,{id:"bert-base-vs-bert-large",children:"BERT Base vs BERT Large"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s90",src:s(87066).Z+"",width:"1606",height:"810"})}),"\n",(0,i.jsx)(n.h2,{id:"bert--pr\xe9entra\xeenement",children:"BERT \u2013 Pr\xe9entra\xeenement"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entra\xeenement sur 2 t\xe2ches non supervis\xe9es","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Mod\xe8le de langue masqu\xe9 (MLM)"}),"\n",(0,i.jsx)(n.li,{children:"Pr\xe9diction de la prochaine phrase (NSP)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bert--entra\xeenement-mlm",children:"BERT \u2013 Entra\xeenement MLM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Mod\xe8le de langue cach\xe9","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Masked language model"})," (MLM)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pourquoi cach\xe9"})," ?","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avec un transformer d\xe9codeur, on a acc\xe8s \xe0 tous les mots en entr\xe9e","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Trop facile\u2026"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Id\xe9e: remplacer des mots par un ",(0,i.jsx)(n.strong,{children:"masque"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Jeton [MASK]"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s91",src:s(89845).Z+"",width:"1640",height:"902"})}),"\n",(0,i.jsx)(n.h2,{id:"bert--entra\xeenement-nsp",children:"BERT \u2013 Entra\xeenement NSP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pr\xe9dire si 2 phrases se suivent dans un texte"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s92",src:s(70508).Z+"",width:"1744",height:"864"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ajout de jetons sp\xe9ciaux"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s93",src:s(78574).Z+"",width:"1844",height:"650"})}),"\n",(0,i.jsx)(n.h2,{id:"bert--entra\xeenement",children:"BERT \u2013 Entra\xeenement"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entra\xeenement non supervis\xe9 sur de gros corpus","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BooksCorpus (800M mots)"}),"\n",(0,i.jsx)(n.li,{children:"Wikipedia anglais (2,5 milliards de mots)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Les 2 t\xe2ches sont ex\xe9cut\xe9es conjointement"}),"\n",(0,i.jsx)(n.li,{children:"Pertes: la somme des pertes sur chaque t\xe2che"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bert--fine-tuning",children:"BERT \u2013 Fine-tuning"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["R\xe9utilisation du mod\xe8le pour accomplir des t\xe2ches langagi\xe8res","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Compr\xe9hension de texte"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Apprentissage par transfert"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s94",src:s(1885).Z+"",width:"1288",height:"894"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"T\xe2che de classification de texte"}),"\n",(0,i.jsx)(n.li,{children:"Classification de 2 s\xe9quences de texte"}),"\n",(0,i.jsx)(n.li,{children:"T\xe2che d\u2019\xe9tiquetage de s\xe9quences"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bert---autres-mod\xe8les",children:"BERT - Autres mod\xe8les"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Quelques-uns des successeurs :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RoBERTa"})," : Entra\xeen\xe9 plus longtemps avec d\u2019autres hyperparam\xe8tres sur plus de textes.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pas de NSP, MLM seulement."}),"\n",(0,i.jsx)(n.li,{children:"BPE au lieu de WordPiece."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DistilBERT"})," : Distillation de BERT sur un mod\xe8le de plus petite taille.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"97% de la performance de Bert avec 40% moins de m\xe9moire et 60% plus rapide."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CamemBERT"})," et ",(0,i.jsx)(n.strong,{children:"FlauBERT"})," : Des mod\xe8les entra\xeen\xe9s sur des textes fran\xe7ais."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ELECTRA"})," : Pr\xe9entra\xeenement diff\xe9rent"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"XLM"})," et ",(0,i.jsx)(n.strong,{children:"XLM-RoBERTa"})," : versions multilingues (+100 langues)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["La liste est longue...","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Voir la section ",(0,i.jsx)(n.strong,{children:"Models"})," de HuggingFace"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"D\xe9finitions",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"NSP (Next Sentence Prediction)"})," : Il s'agit d'une t\xe2che de pr\xe9vision o\xf9 le mod\xe8le est entra\xeen\xe9 \xe0 pr\xe9dire si une\nphrase B suit logiquement une phrase A. Cette technique est utilis\xe9e pour aider les mod\xe8les \xe0 comprendre la relation\nentre deux phrases, ce qui est utile pour des t\xe2ches telles que la compr\xe9hension de texte et la r\xe9ponse aux questions.\nPar exemple, dans le mod\xe8le BERT de Google, NSP est utilis\xe9 pour am\xe9liorer la compr\xe9hension du contexte."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MLM (Masked Language Model)"})," : Cette technique consiste \xe0 masquer al\xe9atoirement certains mots d'une phrase et \xe0\nentra\xeener le mod\xe8le \xe0 pr\xe9dire les mots masqu\xe9s en se basant sur le contexte fourni par les autres mots non masqu\xe9s de la\nphrase. C'est une m\xe9thode courante pour entra\xeener des mod\xe8les de langue profonde en NLP. Le MLM est \xe9galement une\ncomposante cl\xe9 de l'architecture BERT."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"BPE (Byte Pair Encoding)"})," : C'est une m\xe9thode de tokenisation o\xf9 les paires de bytes (ou caract\xe8res) les plus fr\xe9quentes\ndans un ensemble de donn\xe9es sont progressivement fusionn\xe9es pour cr\xe9er un dictionnaire de morceaux de mots ou de tokens\nplus grands. BPE est utilis\xe9 pour g\xe9rer efficacement un grand vocabulaire en permettant au mod\xe8le de d\xe9composer les mots\ninconnus en sous-mots connus. Cela permet aux mod\xe8les de NLP d'\xeatre plus robustes lorsqu'ils traitent des mots rares ou inconnus."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"tokenisation",children:"Tokenisation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les mod\xe8les utilisent habituellement un vocabulaire fixe V","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Par ex. 32 000 jetons"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Cependant","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["On veut limiter le nombre de ",(0,i.jsx)(n.strong,{children:"mots inconnus"})]}),"\n",(0,i.jsxs)(n.li,{children:["En traduction automatique, on aimerait utiliser un ",(0,i.jsx)(n.strong,{children:"m\xeame vocabulaire"})," pour les langues source et cible"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Solution : utiliser un tokeniseur qui donne :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"des mots complets"}),"\n",(0,i.jsx)(n.li,{children:"des sous-s\xe9quences de caract\xe8res"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Algorithme souvent utilis\xe9 \u2013 ",(0,i.jsx)(n.strong,{children:"WordPiece"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Texte : My name is Lamontagne"}),"\n",(0,i.jsx)(n.li,{children:"Jetons : [My, name, is, Lam, ##ont, ##ag, ##ne]"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Autres options similaires :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"BPE - Byte pair encoding"}),"\n",(0,i.jsx)(n.li,{children:"SentencePiece"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Tokenisation vorace","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Trouver ",(0,i.jsxs)(n.strong,{children:["le plus long ",(0,i.jsx)(n.em,{children:"wordpiece"})]})," du vocabulaire qui correspond au d\xe9but de notre texte"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tokenisation---wordpiece",children:"Tokenisation - WordPiece"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entra\xeenement :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"wordpieces_0 = des caract\xe8res individuels"}),"\n",(0,i.jsxs)(n.li,{children:["En utilisant un corpus, r\xe9p\xe9ter jusqu\u2019\xe0 ce qu\u2019on ait |V| wordpieces :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entra\xeener un mod\xe8le de langue sur le corpus en utilisant les wordpieces"}),"\n",(0,i.jsx)(n.li,{children:"On prend des paires de wordpieces et on \xe9value leur probabilit\xe9 avec le mod\xe8le de langue."}),"\n",(0,i.jsx)(n.li,{children:"Nouveau wordpiece = concat\xe9nation de la paire de wordpieces qui augmente le plus la probabilit\xe9 du mod\xe8le de langue sur le corpus"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Exemple d\u2019entra\xeenement :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Corpus = [belle, balle, miel, cieux]"}),"\n",(0,i.jsx)(n.li,{children:"Vocabulaire = b, ##e, ##l, ##a, m, ##i, c, ##u, ##x"}),"\n",(0,i.jsx)(n.li,{children:"Comptes unigrammes: b : 2, ##e : 5, ##l : 5, ##a : 1, m : 1, ##i : 2, c : 1, ##u : 1, ##x : 1"}),"\n",(0,i.jsxs)(n.li,{children:["Comptes bigrammes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(b, ##e): 1, (##e, ##l): 2, (##l, ##l): 2, ('##l, ##e): 2, (b, ##a): 1, (##a, ##l) (m, ##i): 1 \u2026 (##u, ##x): 1"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s95",src:s(22475).Z+"",width:"1680",height:"1130"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s96",src:s(57825).Z+"",width:"1666",height:"1086"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"s97",src:s(445).Z+"",width:"1660",height:"916"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Les encodeurs bidirectionnels sont utilis\xe9s pour g\xe9n\xe9rer des repr\xe9sentations de mots contextualis\xe9es","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"Contextual embeddings"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Un encodeur bidirectionnel de type transformer est pr\xe9entra\xeen\xe9 comme un mod\xe8le de langue masqu\xe9","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Parfois avec d\u2019autres t\xe2ches auxiliaires comme le NSP"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["On peut r\xe9utiliser le mod\xe8le pour une application:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"En ajoutant une t\xeate de pr\xe9diction et"}),"\n",(0,i.jsxs)(n.li,{children:["En ajustant les param\xe8tres sur des exemples du domaine (",(0,i.jsx)(n.em,{children:"fine-tuning"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"logiciel",children:"Logiciel"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/quicktour",children:"Tutorial"})," HuggingFace"]}),"\n",(0,i.jsxs)(n.li,{children:["Quelques mod\xe8les sur HuggingFace:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/model_doc/bert",children:"BERT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/model_doc/roberta#overview",children:"RoBERTa"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/model_doc/distilbert",children:"DistillBERT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/model_doc/electra",children:"ELECTRA"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/model_doc/camembert#overview",children:"CamemBERT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/model_doc/flaubert#overview",children:"FlauBERT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/v4.24.0/en/multilingual#xlm",children:"Mod\xe8les multilingues"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/tasks/sequence_classification",children:"Classification de textes"})," - HuggingFace"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/tasks/token_classification",children:"\xc9tiquetage de mots"})," - HuggingFace"]}),"\n",(0,i.jsxs)(n.li,{children:["Mod\xe8les de langues masqu\xe9s (",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/transformers/tasks/masked_language_modeling",children:"MLM"}),") avec mod\xe8les de HuggingFace"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},90975:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s87-36a015fe818881fd7fffc699204385a9.png"},9730:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s88-b22e5a7a14675d5674ec6384a3a0a13b.png"},10716:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s89-fdd429a2e0990cb5b27e959e027109cf.png"},87066:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s90-1ba98d79b2b0bac416a11d3bf4109395.png"},89845:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s91-547fde5f60fe5838e59d2db3a8836479.png"},70508:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s92-dfe65fb24fbc806eb65e5dee3e79ca6b.png"},78574:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s93-1b54e1fd8bd9ae701bc502ae2ad7c135.png"},1885:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s94-ba8d5c268202b89ffe60973b8807e72a.png"},22475:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s95-b817b807c63ebf4c0b7ff1ab4c1b6539.png"},57825:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s96-f88d954242f6268f601fc8f11bc31312.png"},445:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/s97-ac1e0a23c27482324622ece76a95728c.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(67294);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);