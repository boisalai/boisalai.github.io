"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[5346],{91042:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var s=r(85893),a=r(11151);const t={sidebar_label:"Build LLM Apps with LangChain.js",sidebar_position:9},o="Build LLM Apps with LangChain.js",i={id:"courses/deeplearning-ai/sp09-langchain-js",title:"Build LLM Apps with LangChain.js",description:"2024-01-12",source:"@site/docs/courses/deeplearning-ai/sp09-langchain-js.md",sourceDirName:"courses/deeplearning-ai",slug:"/courses/deeplearning-ai/sp09-langchain-js",permalink:"/docs/courses/deeplearning-ai/sp09-langchain-js",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/courses/deeplearning-ai/sp09-langchain-js.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_label:"Build LLM Apps with LangChain.js",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Advanced Retrieval for AI with Chroma",permalink:"/docs/courses/deeplearning-ai/sp08-advanced-rag"},next:{title:"Retrieval Augmented Generation for Production with LangChain & LlamaIndex",permalink:"/docs/courses/activeloop/rag-for-production/"}},c={},l=[{value:"Building Blocks",id:"building-blocks",level:2},{value:"Language model",id:"language-model",level:3},{value:"Prompt template",id:"prompt-template",level:3},{value:"LangChain Expression Language (LCEL)",id:"langchain-expression-language-lcel",level:3},{value:"Output parser",id:"output-parser",level:3},{value:"Streaming",id:"streaming",level:3},{value:"Batch",id:"batch",level:3},{value:"Loading and preparing data",id:"loading-and-preparing-data",level:2},{value:"Loading",id:"loading",level:3},{value:"Splitting",id:"splitting",level:3},{value:"Vectorstores and embeddings",id:"vectorstores-and-embeddings",level:2},{value:"Vectorstore ingestion",id:"vectorstore-ingestion",level:3},{value:"Retrievers",id:"retrievers",level:3},{value:"Question answering",id:"question-answering",level:2},{value:"Document retrieval in a chain",id:"document-retrieval-in-a-chain",level:3},{value:"Synthesizing a response",id:"synthesizing-a-response",level:3},{value:"Augmented generation",id:"augmented-generation",level:3},{value:"Conversational question answering",id:"conversational-question-answering",level:2},{value:"Retrieval chain from previous lesson",id:"retrieval-chain-from-previous-lesson",level:3},{value:"Adding history",id:"adding-history",level:3},{value:"Putting it all together",id:"putting-it-all-together",level:3},{value:"Shipping as a web API",id:"shipping-as-a-web-api",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"build-llm-apps-with-langchainjs",children:"Build LLM Apps with LangChain.js"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"2024-01-12"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://www.deeplearning.ai/short-courses/build-llm-apps-with-langchain-js/",children:"Build LLM Apps with LangChain.js"})," in collaboration with LangChain."]}),"\n",(0,s.jsx)(e.h2,{id:"building-blocks",children:"Building Blocks"}),"\n",(0,s.jsx)(e.h3,{id:"language-model",children:"Language model"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\n\r\nimport { ChatOpenAI } from "@langchain/openai";\r\nimport { HumanMessage } from "@langchain/core/messages";\r\n\r\nconst model = new ChatOpenAI({\r\n    modelName: "gpt-3.5-turbo-1106"\r\n});\r\n\r\nawait model.invoke([\r\n    new HumanMessage("Tell me a joke.")\r\n]);\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'AIMessage {\r\n  lc_serializable: true,\r\n  lc_kwargs: {\r\n    content: "Why don\'t skeletons fight each other? They don\'t have the guts!",\r\n    additional_kwargs: { function_call: undefined, tool_calls: undefined }\r\n  },\r\n  lc_namespace: [ "langchain_core", "messages" ],\r\n  content: "Why don\'t skeletons fight each other? They don\'t have the guts!",\r\n  name: undefined,\r\n  additional_kwargs: { function_call: undefined, tool_calls: undefined }\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"prompt-template",children:"Prompt template"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\r\n\r\nconst prompt = ChatPromptTemplate.fromTemplate(\r\n    `What are three good names for a company that makes {product}?`\r\n)\r\n\r\nawait prompt.format({\r\n    product: "colorful socks"\r\n});\r\n\r\nawait prompt.formatMessages({\r\n    product: "colorful socks"\r\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:'"Human: What are three good names for a company that makes colorful socks?"\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'await prompt.formatMessages({\r\n    product: "colorful socks"\r\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'[\r\n  HumanMessage {\r\n    lc_serializable: true,\r\n    lc_kwargs: {\r\n      content: "What are three good names for a company that makes colorful socks?",\r\n      additional_kwargs: {}\r\n    },\r\n    lc_namespace: [ "langchain_core", "messages" ],\r\n    content: "What are three good names for a company that makes colorful socks?",\r\n    name: undefined,\r\n    additional_kwargs: {}\r\n  }\r\n]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { \r\n  SystemMessagePromptTemplate, \r\n  HumanMessagePromptTemplate \r\n} from "@langchain/core/prompts";\r\n\r\nconst promptFromMessages = ChatPromptTemplate.fromMessages([\r\n  SystemMessagePromptTemplate.fromTemplate(\r\n    "You are an expert at picking company names."\r\n  ),\r\n  HumanMessagePromptTemplate.fromTemplate(\r\n    "What are three good names for a company that makes {product}?"\r\n  )\r\n]);\r\n\r\nawait promptFromMessages.formatMessages({\r\n    product: "shiny objects"\r\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'[\r\n  SystemMessage {\r\n    lc_serializable: true,\r\n    lc_kwargs: {\r\n      content: "You are an expert at picking company names.",\r\n      additional_kwargs: {}\r\n    },\r\n    lc_namespace: [ "langchain_core", "messages" ],\r\n    content: "You are an expert at picking company names.",\r\n    name: undefined,\r\n    additional_kwargs: {}\r\n  },\r\n  HumanMessage {\r\n    lc_serializable: true,\r\n    lc_kwargs: {\r\n      content: "What are three good names for a company that makes shiny objects?",\r\n      additional_kwargs: {}\r\n    },\r\n    lc_namespace: [ "langchain_core", "messages" ],\r\n    content: "What are three good names for a company that makes shiny objects?",\r\n    name: undefined,\r\n    additional_kwargs: {}\r\n  }\r\n]\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const promptFromMessages = ChatPromptTemplate.fromMessages([\r\n  ["system", "You are an expert at picking company names."],\r\n  ["human", "What are three good names for a company that makes {product}?"]\r\n]);\r\n\r\nawait promptFromMessages.formatMessages({\r\n  product: "shiny objects"\r\n});\n'})}),"\n",(0,s.jsx)(e.h3,{id:"langchain-expression-language-lcel",children:"LangChain Expression Language (LCEL)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const chain = prompt.pipe(model);\r\n\r\nawait chain.invoke({\r\n    product: "colorful socks"\r\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'AIMessage {\r\n  lc_serializable: true,\r\n  lc_kwargs: {\r\n    content: "1. ChromaSock\\n2. SpectrumSocks\\n3. RainbowThread Co.",\r\n    additional_kwargs: { function_call: undefined, tool_calls: undefined }\r\n  },\r\n  lc_namespace: [ "langchain_core", "messages" ],\r\n  content: "1. ChromaSock\\n2. SpectrumSocks\\n3. RainbowThread Co.",\r\n  name: undefined,\r\n  additional_kwargs: { function_call: undefined, tool_calls: undefined }\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"output-parser",children:"Output parser"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { StringOutputParser } from "@langchain/core/output_parsers";\r\n\r\nconst outputParser = new StringOutputParser();\r\n\r\nconst nameGenerationChain = prompt.pipe(model).pipe(outputParser);\r\n\r\nawait nameGenerationChain.invoke({\r\n    product: "fancy cookies"\r\n});\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:'"1. Crispy Delights\\n2. Heavenly Bites\\n3. Gourmet Crumbles"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"https://smith.langchain.com/",children:"LangSmith"})," for detail."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableSequence } from "@langchain/core/runnables";\r\n\r\nconst nameGenerationChain = RunnableSequence.from([\r\n    prompt,\r\n    model,\r\n    outputParser\r\n])\r\n\r\nawait nameGenerationChain.invoke({\r\n    product: "fancy cookies"\r\n});\n'})}),"\n",(0,s.jsx)(e.h3,{id:"streaming",children:"Streaming"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const stream = await nameGenerationChain.stream({\r\n  product: "really cool robots",\r\n});\r\n\r\nfor await (const chunk of stream) {\r\n    console.log(chunk);\r\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"batch",children:"Batch"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const inputs = [\r\n    { product: "large calculators" },\r\n    { product: "alpaca wool sweaters" }\r\n];\r\n\r\nawait nameGenerationChain.batch(inputs);\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'[\r\n  "1. BigCalc Co.\\n2. MegaMath Inc.\\n3. JumboCompute Solutions",\r\n  "1. Alpaca Luxe\\n2. Andean Threads\\n3. Cozy Alpaca Knits"\r\n]\n'})}),"\n",(0,s.jsx)(e.h2,{id:"loading-and-preparing-data",children:"Loading and preparing data"}),"\n",(0,s.jsx)(e.h3,{id:"loading",children:"Loading"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\n\r\nimport { GithubRepoLoader } from "langchain/document_loaders/web/github";\r\n// Peer dependency, used to support .gitignore syntax\r\nimport ignore from "ignore";\r\n\r\n// Will not include anything under "ignorePaths"\r\nconst loader = new GithubRepoLoader(\r\n  "https://github.com/langchain-ai/langchainjs",\r\n  { recursive: false, ignorePaths: ["*.md", "yarn.lock"] }\r\n);\r\n\r\nconst docs = await loader.load();\r\n\r\nconsole.log(docs.slice(0, 3));\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'// Peer dependency\r\nimport * as parse from "pdf-parse";\r\nimport { PDFLoader } from "langchain/document_loaders/fs/pdf";\r\n\r\nconst loader = new PDFLoader("./data/MachineLearning-Lecture01.pdf");\r\n\r\nconst rawCS229Docs = await loader.load();\r\n\r\nconsole.log(rawCS229Docs.slice(0, 5));\n'})}),"\n",(0,s.jsx)(e.h3,{id:"splitting",children:"Splitting"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";\r\n\r\nconst splitter = RecursiveCharacterTextSplitter.fromLanguage("js", {\r\n  chunkSize: 32,\r\n  chunkOverlap: 0,\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const code = `function helloWorld() {\r\nconsole.log("Hello, World!");\r\n}\r\n// Call the function\r\nhelloWorld();`;\r\n\r\nawait splitter.splitText(code);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { CharacterTextSplitter } from "langchain/text_splitter";\r\n\r\nconst splitter = new CharacterTextSplitter({\r\n  chunkSize: 32,\r\n  chunkOverlap: 0,\r\n  separator: " "\r\n});\r\n\r\nawait splitter.splitText(code);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const splitter = RecursiveCharacterTextSplitter.fromLanguage("js", {\r\n  chunkSize: 64,\r\n  chunkOverlap: 32,\r\n});\r\n\r\nawait splitter.splitText(code);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const splitter = new RecursiveCharacterTextSplitter({\r\n  chunkSize: 512,\r\n  chunkOverlap: 64,\r\n});\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const splitDocs = await splitter.splitDocuments(rawCS229Docs);\r\n\r\nconsole.log(splitDocs.slice(0, 5));\n"})}),"\n",(0,s.jsx)(e.h2,{id:"vectorstores-and-embeddings",children:"Vectorstores and embeddings"}),"\n",(0,s.jsx)(e.h3,{id:"vectorstore-ingestion",children:"Vectorstore ingestion"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\n\r\nimport { OpenAIEmbeddings } from "@langchain/openai";\r\n\r\nconst embeddings = new OpenAIEmbeddings();\r\n\r\nawait embeddings.embedQuery("This is some sample text");\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { similarity } from "ml-distance";\r\n\r\nconst vector1 = await embeddings.embedQuery(\r\n    "What are vectors useful for in machine learning?"\r\n);\r\nconst unrelatedVector = await embeddings.embedQuery(\r\n    "A group of parrots is called a pandemonium."\r\n);\r\n\r\nsimilarity.cosine(vector1, unrelatedVector);\r\n# 0.6962144676957391\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const similarVector = await embeddings.embedQuery(\r\n    "Vectors are representations of information."\r\n);\r\n\r\nsimilarity.cosine(vector1, similarVector);\r\n# 0.85905992625929\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'// Peer dependency\r\nimport * as parse from "pdf-parse";\r\nimport { PDFLoader } from "langchain/document_loaders/fs/pdf";\r\nimport { \r\n    RecursiveCharacterTextSplitter\r\n} from "langchain/text_splitter";\r\n\r\nconst loader = new PDFLoader("./data/MachineLearning-Lecture01.pdf");\r\n\r\nconst rawCS229Docs = await loader.load();\r\n\r\nconst splitter = new RecursiveCharacterTextSplitter({\r\n  chunkSize: 128,\r\n  chunkOverlap: 0,\r\n});\r\n\r\nconst splitDocs = await splitter.splitDocuments(rawCS229Docs);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { MemoryVectorStore } from "langchain/vectorstores/memory";\r\n\r\nconst vectorstore = new MemoryVectorStore(embeddings);\r\n\r\nawait vectorstore.addDocuments(splitDocs);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const retrievedDocs = await vectorstore.similaritySearch(\r\n    "What is deep learning?", 4\r\n);\r\n\r\nconst pageContents = retrievedDocs.map(doc => doc.pageContent);\r\n\r\npageContents\n'})}),"\n",(0,s.jsx)(e.h3,{id:"retrievers",children:"Retrievers"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const retriever = vectorstore.asRetriever();\r\n\r\nawait retriever.invoke("What is deep learning?")\n'})}),"\n",(0,s.jsx)(e.h2,{id:"question-answering",children:"Question answering"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\nimport { loadAndSplitChunks } from "./lib/helpers.ts";\r\n\r\nconst splitDocs = await loadAndSplitChunks({\r\n    chunkSize: 1536,\r\n    chunkOverlap: 128\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { initializeVectorstoreWithDocuments } from "./lib/helpers.ts";\r\n\r\nconst vectorstore = await initializeVectorstoreWithDocuments({\r\n  documents: splitDocs,\r\n});\r\n\r\nconst retriever = vectorstore.asRetriever();\n'})}),"\n",(0,s.jsx)(e.h3,{id:"document-retrieval-in-a-chain",children:"Document retrieval in a chain"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableSequence } from "@langchain/core/runnables";\r\nimport { Document } from "@langchain/core/documents";\r\n\r\nconst convertDocsToString = (documents: Document[]): string => {\r\n  return documents.map((document) => {\r\n    return `<doc>\\n${document.pageContent}\\n</doc>`\r\n  }).join("\\n");\r\n};\r\n\r\n/*\r\n{\r\nquestion: "What is deep learning?"\r\n}\r\n*/\r\n\r\nconst documentRetrievalChain = RunnableSequence.from([\r\n    (input) => input.question,\r\n    retriever,\r\n    convertDocsToString\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const results = await documentRetrievalChain.invoke({\r\n  question: "What are the prerequisites for this course?"\r\n});\r\nconsole.log(results);\n'})}),"\n",(0,s.jsx)(e.h3,{id:"synthesizing-a-response",children:"Synthesizing a response"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\r\n\r\nconst TEMPLATE_STRING = `You are an experienced researcher, \r\nexpert at interpreting and answering questions based on provided sources.\r\nUsing the provided context, answer the user\'s question \r\nto the best of your ability using only the resources provided. \r\nBe verbose!\r\n\r\n<context>\r\n\r\n{context}\r\n\r\n</context>\r\n\r\nNow, answer this question using the above context:\r\n\r\n{question}`;\r\n\r\nconst answerGenerationPrompt = ChatPromptTemplate.fromTemplate(\r\n    TEMPLATE_STRING\r\n);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableMap } from "@langchain/core/runnables";\r\n\r\nconst runnableMap = RunnableMap.from({\r\n  context: documentRetrievalChain,\r\n  question: (input) => input.question,\r\n});\r\n\r\nawait runnableMap.invoke({\r\n    question: "What are the prerequisites for this course?"\r\n})\n'})}),"\n",(0,s.jsx)(e.h3,{id:"augmented-generation",children:"Augmented generation"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatOpenAI } from "@langchain/openai";\r\nimport { StringOutputParser } from "@langchain/core/output_parsers";\r\n\r\nconst model = new ChatOpenAI({\r\n    modelName: "gpt-3.5-turbo-1106"\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const retrievalChain = RunnableSequence.from([\r\n  {\r\n    context: documentRetrievalChain,\r\n    question: (input) => input.question,\r\n  },\r\n  answerGenerationPrompt,\r\n  model,\r\n  new StringOutputParser(),\r\n]);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const answer = await retrievalChain.invoke({\r\n  question: "What are the prerequisites for this course?"\r\n});\r\n\r\nconsole.log(answer);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const followupAnswer = await retrievalChain.invoke({\r\n  question: "Can you list them in bullet point form?"\r\n});\r\n\r\nconsole.log(followupAnswer);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const docs = await documentRetrievalChain.invoke({\r\n  question: "Can you list them in bullet point form?"\r\n});\r\n\r\nconsole.log(docs);\n'})}),"\n",(0,s.jsx)(e.h2,{id:"conversational-question-answering",children:"Conversational question answering"}),"\n",(0,s.jsx)(e.h3,{id:"retrieval-chain-from-previous-lesson",children:"Retrieval chain from previous lesson"}),"\n",(0,s.jsx)(e.p,{children:"Let's split and load our documents into a vector store and create a retriever. Then we will convert its output to a string."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\n\r\nimport { loadAndSplitChunks } from "./lib/helpers.ts";\r\n\r\nconst splitDocs = await loadAndSplitChunks({\r\n    chunkSize: 1536,\r\n    chunkOverlap: 128\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { initializeVectorstoreWithDocuments } from "./lib/helpers.ts";\r\n\r\nconst vectorstore = await initializeVectorstoreWithDocuments({\r\n  documents: splitDocs,\r\n});\r\n\r\nconst retriever = vectorstore.asRetriever();\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableSequence } from "@langchain/core/runnables";\r\nimport { Document } from "@langchain/core/documents";\r\n\r\nconst convertDocsToString = (documents: Document[]): string => {\r\n  return documents.map((document) => {\r\n    return `<doc>\\n${document.pageContent}\\n</doc>`\r\n  }).join("\\n");\r\n};\r\n\r\nconst documentRetrievalChain = RunnableSequence.from([\r\n    (input) => input.question,\r\n    retriever,\r\n    convertDocsToString\r\n]);\n'})}),"\n",(0,s.jsx)(e.p,{children:"Now that we have a retriever, lets build a retriever chain."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatPromptTemplate } from "@langchain/core/prompts";\r\n\r\nconst TEMPLATE_STRING = `You are an experienced researcher, \r\nexpert at interpreting and answering questions based on provided sources.\r\nUsing the provided context, answer the user\'s question \r\nto the best of your ability using only the resources provided. \r\nBe verbose!\r\n\r\n<context>\r\n\r\n{context}\r\n\r\n</context>\r\n\r\nNow, answer this question using the above context:\r\n\r\n{question}`;\r\n\r\nconst answerGenerationPrompt = ChatPromptTemplate.fromTemplate(\r\n    TEMPLATE_STRING\r\n);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatOpenAI } from "@langchain/openai";\r\nimport { StringOutputParser } from "@langchain/core/output_parsers";\r\n\r\nconst model = new ChatOpenAI({\r\n    modelName: "gpt-3.5-turbo-1106"\r\n});\r\n\r\nconst retrievalChain = RunnableSequence.from([\r\n  {\r\n    context: documentRetrievalChain,\r\n    question: (input) => input.question,\r\n  },\r\n  answerGenerationPrompt,\r\n  model,\r\n  new StringOutputParser(),\r\n]);\n'})}),"\n",(0,s.jsx)(e.h3,{id:"adding-history",children:"Adding history"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { MessagesPlaceholder } from "@langchain/core/prompts";\r\n\r\nconst REPHRASE_QUESTION_SYSTEM_TEMPLATE = \r\n  `Given the following conversation and a follow up question, \r\nrephrase the follow up question to be a standalone question.`;\r\n\r\nconst rephraseQuestionChainPrompt = ChatPromptTemplate.fromMessages([\r\n  ["system", REPHRASE_QUESTION_SYSTEM_TEMPLATE],\r\n  new MessagesPlaceholder("history"),\r\n  [\r\n    "human", \r\n    "Rephrase the following question as a standalone question:\\n{question}"\r\n  ],\r\n]);\r\n\r\nconst rephraseQuestionChain = RunnableSequence.from([\r\n      rephraseQuestionChainPrompt,\r\n      new ChatOpenAI({ temperature: 0.1, modelName: "gpt-3.5-turbo-1106" }),\r\n      new StringOutputParser(),\r\n])\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { HumanMessage, AIMessage } from "@langchain/core/messages";\r\n\r\nconst originalQuestion = "What are the prerequisites for this course?";\r\n\r\nconst originalAnswer = await retrievalChain.invoke({\r\n  question: originalQuestion\r\n});\r\n\r\nconsole.log(originalAnswer);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const chatHistory = [\r\n  new HumanMessage(originalQuestion),\r\n  new AIMessage(originalAnswer),\r\n];\r\n\r\nawait rephraseQuestionChain.invoke({\r\n  question: "Can you list them in bullet point form?",\r\n  history: chatHistory,\r\n});\n'})}),"\n",(0,s.jsx)(e.h3,{id:"putting-it-all-together",children:"Putting it all together"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const convertDocsToString = (documents: Document[]): string => {\r\n  return documents.map((document) => `<doc>\\n${document.pageContent}\\n</doc>`).join("\\n");\r\n};\r\n\r\nconst documentRetrievalChain = RunnableSequence.from([\r\n  (input) => input.standalone_question,\r\n  retriever,\r\n  convertDocsToString,\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const ANSWER_CHAIN_SYSTEM_TEMPLATE = `You are an experienced researcher, \r\nexpert at interpreting and answering questions based on provided sources.\r\nUsing the below provided context and chat history, \r\nanswer the user\'s question to the best of \r\nyour ability \r\nusing only the resources provided. Be verbose!\r\n\r\n<context>\r\n{context}\r\n</context>`;\r\n\r\nconst answerGenerationChainPrompt = ChatPromptTemplate.fromMessages([\r\n  ["system", ANSWER_CHAIN_SYSTEM_TEMPLATE],\r\n  new MessagesPlaceholder("history"),\r\n  [\r\n    "human", \r\n    "Now, answer this question using the previous context and chat history:\\n{standalone_question}"\r\n  ]\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { HumanMessage, AIMessage } from "@langchain/core/messages";\r\nawait answerGenerationChainPrompt.formatMessages({\r\n  context: "fake retrieved content",\r\n  standalone_question: "Why is the sky blue?",\r\n  history: [\r\n    new HumanMessage("How are you?"),\r\n    new AIMessage("Fine, thank you!")\r\n  ]\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnablePassthrough } from "@langchain/core/runnables";\r\n\r\nconst conversationalRetrievalChain = RunnableSequence.from([\r\n  RunnablePassthrough.assign({\r\n    standalone_question: rephraseQuestionChain,\r\n  }),\r\n  RunnablePassthrough.assign({\r\n    context: documentRetrievalChain,\r\n  }),\r\n  answerGenerationChainPrompt,\r\n  new ChatOpenAI({ modelName: "gpt-3.5-turbo" }),\r\n  new StringOutputParser(),\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableWithMessageHistory } from "@langchain/core/runnables";\r\nimport { ChatMessageHistory } from "langchain/stores/message/in_memory";\r\n\r\nconst messageHistory = new ChatMessageHistory();\r\n\r\nconst finalRetrievalChain = new RunnableWithMessageHistory({\r\n  runnable: conversationalRetrievalChain,\r\n  getMessageHistory: (_sessionId) => messageHistory,\r\n  historyMessagesKey: "history",\r\n  inputMessagesKey: "question",\r\n});\r\n\r\nconst originalQuestion = "What are the prerequisites for this course?";\r\n\r\nconst originalAnswer = await finalRetrievalChain.invoke({\r\n  question: originalQuestion,\r\n}, {\r\n  configurable: { sessionId: "test" }\r\n});\r\n\r\nconst finalResult = await finalRetrievalChain.invoke({\r\n  question: "Can you list them in bullet point form?",\r\n}, {\r\n  configurable: { sessionId: "test" }\r\n});\r\n\r\nconsole.log(finalResult);\n'})}),"\n",(0,s.jsxs)(e.p,{children:["See ",(0,s.jsx)(e.a,{href:"https://smith.langchain.com/",children:"LangSmith"})," for detail."]}),"\n",(0,s.jsx)(e.h2,{id:"shipping-as-a-web-api",children:"Shipping as a web API"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import "dotenv/config";\r\n\r\nimport { \r\n  loadAndSplitChunks, \r\n  initializeVectorstoreWithDocuments \r\n} from "./lib/helpers.ts";\r\n\r\nconst splitDocs = await loadAndSplitChunks({\r\n  chunkSize: 1536,\r\n  chunkOverlap: 128,\r\n});\r\n\r\nconst vectorstore = await initializeVectorstoreWithDocuments({\r\n  documents: splitDocs,\r\n});\r\n\r\nconst retriever = vectorstore.asRetriever();\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { \r\n  createDocumentRetrievalChain, \r\n  createRephraseQuestionChain \r\n} from "./lib/helpers.ts";\r\n\r\nconst documentRetrievalChain = createDocumentRetrievalChain();\r\nconst rephraseQuestionChain = createRephraseQuestionChain();\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";\r\n\r\nconst ANSWER_CHAIN_SYSTEM_TEMPLATE = `You are an experienced researcher,\r\nexpert at interpreting and answering questions based on provided sources.\r\nUsing the below provided context and chat history, \r\nanswer the user\'s question to the best of your ability\r\nusing only the resources provided. Be verbose!\r\n\r\n<context>\r\n{context}\r\n</context>`;\r\n\r\nconst answerGenerationChainPrompt = ChatPromptTemplate.fromMessages([\r\n  ["system", ANSWER_CHAIN_SYSTEM_TEMPLATE],\r\n  new MessagesPlaceholder("history"),\r\n  [\r\n    "human", \r\n    `Now, answer this question using the previous context and chat history:\r\n  \r\n    {standalone_question}`\r\n  ]\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { \r\n  RunnablePassthrough, \r\n  RunnableSequence \r\n} from "@langchain/core/runnables";\r\nimport { ChatOpenAI } from "@langchain/openai";\r\n\r\nconst conversationalRetrievalChain = RunnableSequence.from([\r\n  RunnablePassthrough.assign({\r\n    standalone_question: rephraseQuestionChain,\r\n  }),\r\n  RunnablePassthrough.assign({\r\n    context: documentRetrievalChain,\r\n  }),\r\n  answerGenerationChainPrompt,\r\n  new ChatOpenAI({ modelName: "gpt-3.5-turbo-1106" }),\r\n]);\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { HttpResponseOutputParser } from "langchain/output_parsers";\r\n\r\n// "text/event-stream" is also supported\r\nconst httpResponseOutputParser = new HttpResponseOutputParser({\r\n  contentType: "text/plain"\r\n});\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'import { RunnableWithMessageHistory } from "@langchain/core/runnables"; \r\nimport { ChatMessageHistory } from "langchain/stores/message/in_memory";\r\n\r\nconst messageHistory = new ChatMessageHistory();\r\n\r\nconst finalRetrievalChain = new RunnableWithMessageHistory({\r\n  runnable: conversationalRetrievalChain,\r\n  getMessageHistory: (_sessionId) => messageHistory,\r\n  historyMessagesKey: "history",\r\n  inputMessagesKey: "question",\r\n}).pipe(httpResponseOutputParser);\n'})}),"\n",(0,s.jsx)(e.p,{children:"Additionally, we'll want to bear in mind that users should not share chat histories, and we should create a new history object per session:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const messageHistories = {};\r\n\r\nconst getMessageHistoryForSession = (sessionId) => {\r\n    if (messageHistories[sessionId] !== undefined) {\r\n        return messageHistories[sessionId];\r\n    } \r\n    const newChatSessionHistory = new ChatMessageHistory();\r\n    messageHistories[sessionId] = newChatSessionHistory;\r\n    return newChatSessionHistory;\r\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"We'll recreate our final chain with this new method:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const finalRetrievalChain = new RunnableWithMessageHistory({\r\n  runnable: conversationalRetrievalChain,\r\n  getMessageHistory: getMessageHistoryForSession,\r\n  inputMessagesKey: "question",\r\n  historyMessagesKey: "history",\r\n}).pipe(httpResponseOutputParser);\r\n\r\nconst port = 8087;\r\n\r\nconst handler = async (request: Request): Response => {\r\n  const body = await request.json();\r\n  const stream = await finalRetrievalChain.stream({\r\n    question: body.question\r\n  }, { configurable: { sessionId: body.session_id } });\r\n\r\n  return new Response(stream, { \r\n    status: 200,\r\n    headers: {\r\n      "Content-Type": "text/plain"\r\n    },\r\n  });\r\n};\r\n\r\nDeno.serve({ port }, handler);\n'})}),"\n",(0,s.jsx)(e.p,{children:"The previous code should return this."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",children:"Listening on http://localhost:8087/\r\n{\r\n  finished: Promise { <pending> },\r\n  shutdown: [AsyncFunction: shutdown],\r\n  ref: [Function: ref],\r\n  unref: [Function: unref],\r\n  [Symbol(Symbol.asyncDispose)]: [Function: [Symbol.asyncDispose]]\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const decoder = new TextDecoder();\r\n\r\n// readChunks() reads from the provided reader and yields the results into an async iterable\r\nfunction readChunks(reader) {\r\n  return {\r\n    async* [Symbol.asyncIterator]() {\r\n      let readResult = await reader.read();\r\n      while (!readResult.done) {\r\n        yield decoder.decode(readResult.value);\r\n        readResult = await reader.read();\r\n      }\r\n    },\r\n  };\r\n}\r\n\r\nconst sleep = async () => {\r\n  return new Promise((resolve) => setTimeout(resolve, 500));\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const response = await fetch(`http://localhost:${port}`, {\r\n    method: "POST",\r\n    headers: {\r\n        "content-type": "application/json",\r\n    },\r\n    body: JSON.stringify({\r\n        question: "What are the prerequisites for this course?",\r\n        session_id: "1", // Should randomly generate/assign\r\n    })\r\n});\r\n\r\n// response.body is a ReadableStream\r\nconst reader = response.body?.getReader();\r\n\r\nfor await (const chunk of readChunks(reader)) {\r\n  console.log("CHUNK:", chunk);\r\n}\r\n\r\nawait sleep();\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const response = await fetch(`http://localhost:${port}`, {\r\n  method: "POST",\r\n  headers: {\r\n    "content-type": "application/json",\r\n  },\r\n  body: JSON.stringify({\r\n    question: "Can you list them in bullet point format?",\r\n    session_id: "1", // Should randomly generate/assign\r\n  })\r\n});\r\n\r\n// response.body is a ReadableStream\r\nconst reader = response.body?.getReader();\r\n\r\nfor await (const chunk of readChunks(reader)) {\r\n  console.log("CHUNK:", chunk);\r\n}\r\n\r\nawait sleep();\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'const response = await fetch(`http://localhost:${port}`, {\r\n  method: "POST",\r\n  headers: {\r\n    "content-type": "application/json",\r\n  },\r\n  body: JSON.stringify({\r\n    question: "What did I just ask you?",\r\n    session_id: "2", // Should randomly generate/assign\r\n  })\r\n});\r\n\r\n// response.body is a ReadableStream\r\nconst reader = response.body?.getReader();\r\n\r\nfor await (const chunk of readChunks(reader)) {\r\n  console.log("CHUNK:", chunk);\r\n}\r\n\r\nawait sleep();\n'})})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},11151:(n,e,r)=>{r.d(e,{Z:()=>i,a:()=>o});var s=r(67294);const a={},t=s.createContext(a);function o(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);