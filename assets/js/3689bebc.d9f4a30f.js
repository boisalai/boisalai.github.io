"use strict";(self.webpackChunkmy_doc=self.webpackChunkmy_doc||[]).push([[7445],{56647:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=s(85893),t=s(11151);const i={sidebar_label:"OpenAI",sidebar_position:3},a="OpenAI",r={id:"snippets/openai",title:"OpenAI",description:"API",source:"@site/docs/snippets/openai.md",sourceDirName:"snippets",slug:"/snippets/openai",permalink:"/docs/snippets/openai",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/snippets/openai.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"OpenAI",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Llama",permalink:"/docs/snippets/llama"},next:{title:"Python",permalink:"/docs/snippets/python"}},c={},l=[{value:"API",id:"api",level:2},{value:"Best Practices for API Key Safety",id:"best-practices-for-api-key-safety",level:2},{value:"On Linux/MacOS, set your <code>OPENAI_API_KEY</code> Environment Variable using zsh",id:"on-linuxmacos-set-your-openai_api_key-environment-variable-using-zsh",level:3},{value:"Examples",id:"examples",level:2},{value:"Tools",id:"tools",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"openai",children:"OpenAI"}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/openai/openai-python",children:"openai-python"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"best-practices-for-api-key-safety",children:"Best Practices for API Key Safety"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety",children:"Best Practices for API Key Safety"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"on-linuxmacos-set-your-openai_api_key-environment-variable-using-zsh",children:["On Linux/MacOS, set your ",(0,o.jsx)(n.code,{children:"OPENAI_API_KEY"})," Environment Variable using zsh"]}),"\n",(0,o.jsxs)(n.p,{children:["Run the following command in your terminal, replacing yourkey with your ",(0,o.jsx)(n.a,{href:"https://beta.openai.com/account/api-keys",children:"API key"}),"\nand update the shell."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo \"export OPENAI_API_KEY='yourkey'\" >> ~/.zshrc\necho \"export LANGCHAIN_API_KEY='yourkey'\" >> ~/.zshrc\nsource ~/.zshrc\n"})}),"\n",(0,o.jsx)(n.p,{children:"Confirm that you have set your environment variable using the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo $OPENAI_API_KEY\n# sk-fv3...\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can now reference the key in curl or load it in your Python:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nimport openai\n\nopenai.api_key = os.environ["OPENAI_API_KEY"]\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\nfrom getpass import getpass\n\nopenai_api_key = getpass()\nos.environ["OPENAI_API_KEY"] = openai_api_key\n'})}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\nclient = OpenAI()\n\nresponse = client.chat.completions.create(\n    model="gpt-3.5-turbo-1106",\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant designed to output JSON."},\n        {"role": "user", "content": "Who won the world series in 2020?"}\n    ]\n)\nprint(response.choices[0].message.content)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import asyncio\nfrom openai import AsyncOpenAI\n\nclient = AsyncOpenAI()\n\nasync def main() -> None:\n    chat_completion = await client.chat.completions.create(\n        model="gpt-3.5-turbo",\n        messages=[\n            {"role": "system", "content": "You are a helpful assistant designed to output JSON."},\n            {"role": "user", "content": "Who won the world series in 2020? "}\n        ]\n    )\n    print(chat_completion.choices[0].message.content)\n\n\nasyncio.run(main())\n'})}),"\n",(0,o.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://chat.openai.com/g/g-dHRRUFODc",children:"YT Summarizer"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var o=s(67294);const t={},i=o.createContext(t);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);