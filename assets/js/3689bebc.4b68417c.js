"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[7445],{56647:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=s(85893),o=s(11151);const r={},a="OpenAI",i={id:"snippets/openai",title:"OpenAI",description:"Best Practices for API Key Safety",source:"@site/docs/snippets/openai.md",sourceDirName:"snippets",slug:"/snippets/openai",permalink:"/docs/snippets/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/openai.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Llama",permalink:"/docs/snippets/llama"}},c={},p=[{value:"Best Practices for API Key Safety",id:"best-practices-for-api-key-safety",level:2},{value:"On Linux/MacOS, set your <code>OPENAI_API_KEY</code> Environment Variable using zsh",id:"on-linuxmacos-set-your-openai_api_key-environment-variable-using-zsh",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"openai",children:"OpenAI"}),"\n",(0,t.jsx)(n.h2,{id:"best-practices-for-api-key-safety",children:"Best Practices for API Key Safety"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety",children:"Best Practices for API Key Safety"}),"."]}),"\n",(0,t.jsxs)(n.h3,{id:"on-linuxmacos-set-your-openai_api_key-environment-variable-using-zsh",children:["On Linux/MacOS, set your ",(0,t.jsx)(n.code,{children:"OPENAI_API_KEY"})," Environment Variable using zsh"]}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command in your terminal, replacing yourkey with your ",(0,t.jsx)(n.a,{href:"https://beta.openai.com/account/api-keys",children:"API key"}),"\nand update the shell."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo \"export OPENAI_API_KEY='yourkey'\" >> ~/.zshrc\necho \"export LANGCHAIN_API_KEY='yourkey'\" >> ~/.zshrc\nsource ~/.zshrc\n"})}),"\n",(0,t.jsx)(n.p,{children:"Confirm that you have set your environment variable using the following command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo $OPENAI_API_KEY\n# sk-fv3...\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can now reference the key in curl or load it in your Python:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import os\nimport openai\n \nopenai.api_key = os.environ["OPENAI_API_KEY"]\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>a});var t=s(67294);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);