"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6755],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_label:"Pair Programming with a Large Language Model",sidebar_position:7},r="Pair Programming with a Large Language Model",l={unversionedId:"courses/pair-prog-with-llm",id:"courses/pair-prog-with-llm",title:"Pair Programming with a Large Language Model",description:"DeepLearning.AI, Pair Programming with a Large Language Model.",source:"@site/docs/courses/pair-prog-with-llm.md",sourceDirName:"courses",slug:"/courses/pair-prog-with-llm",permalink:"/docs/courses/pair-prog-with-llm",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Pair Programming with a Large Language Model",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"LangChain for LLM Application Development",permalink:"/docs/courses/langchain-1"},next:{title:"References",permalink:"/docs/category/references"}},s={},d=[{value:"Lesson 1: Getting Started",id:"lesson-1-getting-started",level:2},{value:"Lesson 2: Using a String Template",id:"lesson-2-using-a-string-template",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Lesson 3: Pair Programming Scenarios",id:"lesson-3-pair-programming-scenarios",level:2},{value:"Scenario 1: Improve existing code",id:"scenario-1-improve-existing-code",level:3},{value:"Ask for multiple ways of rewriting your code",id:"ask-for-multiple-ways-of-rewriting-your-code",level:4},{value:"Scenario 2: Simplify code",id:"scenario-2-simplify-code",level:3},{value:"Scenario 3: Write test cases",id:"scenario-3-write-test-cases",level:3},{value:"Scenario 4: Make code more efficient",id:"scenario-4-make-code-more-efficient",level:3},{value:"Scenario 5: Debug your code",id:"scenario-5-debug-your-code",level:3},{value:"Lesson 4: Technical Debt",id:"lesson-4-technical-debt",level:2},{value:"Ask an LLM to explain a complex code base",id:"ask-an-llm-to-explain-a-complex-code-base",level:3},{value:"Ask an LLM to document a complex code base",id:"ask-an-llm-to-document-a-complex-code-base",level:3}],p={toc:d},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pair-programming-with-a-large-language-model"},"Pair Programming with a Large Language Model"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DeepLearning.AI"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.deeplearning.ai/short-courses/pair-programming-llm/"},"Pair Programming with a Large Language Model"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"2023-09-27.")),(0,i.kt)("h2",{id:"lesson-1-getting-started"},"Lesson 1: Getting Started"),(0,i.kt)("h2",{id:"lesson-2-using-a-string-template"},"Lesson 2: Using a String Template"),(0,i.kt)("p",null,'In other non-coding prompt engineering tasks, it\'s common to use "chain-of-thought prompting" by asking the model to work through the task "step by step".'),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom utils import get_api_key\nimport google.generativeai as palm\nfrom google.api_core import client_options as client_options_lib\n\n# Set the MakerSuite API key with the provided helper function.\npalm.configure(\n    api_key=get_api_key(),\n    transport="rest",\n    client_options=client_options_lib.ClientOptions(\n        api_endpoint=os.getenv("GOOGLE_API_BASE"),\n    )\n)\n\n# Pick the model that generate text.\nmodels = [m for m in palm.list_models() if \'generateText\' in m.supported_generation_methods]\nmodel_bison = models[0]\nmodel_bison\n\n# Helper function to call the PaLM API.\nfrom google.api_core import retry\n@retry.Retry()\ndef generate_text(prompt, \n                  model=model_bison, \n                  temperature=0.0):\n    return palm.generate_text(prompt=prompt,\n                              model=model,\n                              temperature=temperature)\n\n# Prompt template\nprompt_template = """\n{priming}\n\n{question}\n\n{decorator}\n\nYour solution:\n"""\n\npriming_text = "You are an expert at writing clear, concise, Python code."\nquestion = "create a doubly linked list"\n\n# option 1\ndecorator = "Work through it step by step, and show your work. One step per line."\n\n# option 2\ndecorator = "Insert comments for each line of code."\n\nprompt = prompt_template.format(priming=priming_text,\n                                question=question,\n                                decorator=decorator)\nprint(prompt)\n\n# Call the API to get the completion\ncompletion = generate_text(prompt)\nprint(completion.result)\n')),(0,i.kt)("p",null,"The result is below."),(0,i.kt)("admonition",{title:"result",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n\n    """Node in a doubly linked list."""\n\n    def __init__(self, data):\n        """Initialize a node with the given data."""\n        self.data = data\n        self.next = None\n        self.prev = None\n\n\nclass DoublyLinkedList:\n\n    """Doubly linked list."""\n\n    def __init__(self):\n        """Initialize an empty doubly linked list."""\n        self.head = None\n        self.tail = None\n        self.size = 0\n\n    def __len__(self):\n        """Return the number of nodes in the list."""\n        return self.size\n\n    def is_empty(self):\n        """Return True if the list is empty."""\n        return self.size == 0\n\n    def add_first(self, data):\n        """Add a new node with the given data to the front of the list."""\n        new_node = Node(data)\n        if self.is_empty():\n            self.head = new_node\n            self.tail = new_node\n        else:\n            new_node.next = self.head\n            self.head.prev = new_node\n            self.head = new_node\n        self.size += 1\n\n    def add_last(self, data):\n        """Add a new node with the given data to the end of the list."""\n        new_node = Node(data)\n        if self.is_empty():\n            self.head = new_node\n            self.tail = new_node\n        else:\n            new_node.prev = self.tail\n            self.tail.next = new_node\n            self.tail = new_node\n        self.size += 1\n\n    def remove_first(self):\n        """Remove the first node in the list."""\n        if self.is_empty():\n            raise ValueError("List is empty")\n        self.head = self.head.next\n        if self.head is None:\n            self.tail = None\n        else:\n            self.head.prev = None\n        self.size -= 1\n\n    def remove_last(self):\n        """Remove the last node in the list."""\n        if self.is_empty():\n            raise ValueError("List is empty")\n        self.tail = self.tail.prev\n        if self.tail is None:\n            self.head = None\n        else:\n            self.tail.next = None\n        self.size -= 1\n\n    def __iter__(self):\n        """Iterate over the nodes in the list in order."""\n        node = self.head\n        while node is not None:\n            yield node.data\n            node = node.next\n\n    def __str__(self):\n        """Return a string representation of the list."""\n        return "[" + ", ".join(str(node.data) for node in self) + "]"\n\n'))),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"Try another question."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'question = """create a very large list of random numbers in python, \nand then write code to sort that list"""\n\nprompt = prompt_template.format(priming=priming_text,\n                                question=question,\n                                decorator=decorator)\nprint(prompt)\n\ncompletion = generate_text(prompt)\nprint(completion.result)\n')),(0,i.kt)("p",null,"The result is below."),(0,i.kt)("admonition",{title:"Result",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import random \n\n# Create a list of 100,000 random numbers between 0 and 100\nrandom_numbers = [random.randint(0, 100) for _ in range(100000)]\n\n# Sort the list of random numbers\nsorted_random_numbers = sorted(random_numbers)\n\n# Print the first 10 elements of the sorted list\nprint(sorted_random_numbers[:10])\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explanation:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first line of code creates a list of 100,000 random numbers between 0 and 100. The ",(0,i.kt)("inlineCode",{parentName:"li"},"random.randint()")," function is used to generate a random integer between two specified values."),(0,i.kt)("li",{parentName:"ul"},"The second line of code sorts the list of random numbers using the ",(0,i.kt)("inlineCode",{parentName:"li"},"sorted()")," function. The ",(0,i.kt)("inlineCode",{parentName:"li"},"sorted()")," function takes a list as its argument and returns a new list that is sorted in ascending order."),(0,i.kt)("li",{parentName:"ul"},"The third line of code prints the first 10 elements of the sorted list. The ",(0,i.kt)("inlineCode",{parentName:"li"},"print()")," function is used to print the contents of a list to the console.")),(0,i.kt)("p",null,"This code is clear, concise, and Pythonic. It uses the standard Python library functions to create a list of random numbers, sort the list, and print the results."),(0,i.kt)("h2",{id:"lesson-3-pair-programming-scenarios"},"Lesson 3: Pair Programming Scenarios"),(0,i.kt)("h3",{id:"scenario-1-improve-existing-code"},"Scenario 1: Improve existing code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nI don\'t think this code is the best way to do it in Python, can you help me?\n\n{question}\n\nPlease explain, in detail, what you did to improve it.\n"""\n\nquestion = """\ndef func_x(array)\n  for i in range(len(array)):\n    print(array[i])\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("p",null,"Below, the result."),(0,i.kt)("admonition",{title:"Result",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  print(*array)\n")),(0,i.kt)("p",{parentName:"admonition"},"I improved the code by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," operator to unpack the array into individual arguments for the ",(0,i.kt)("inlineCode",{parentName:"p"},"print()")," function. This is more concise and efficient than using a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop.")),(0,i.kt)("h4",{id:"ask-for-multiple-ways-of-rewriting-your-code"},"Ask for multiple ways of rewriting your code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nI don\'t think this code is the best way to do it in Python, can you help me?\n\n{question}\n\nPlease explore multiple ways of solving the problem, and explain each.\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("admonition",{title:"Result",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are a few ways to improve the code."),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use a list comprehension"),". This will allow you to iterate over the array and print each element in a single line of code.")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  print([element for element in array])\n")),(0,i.kt)("ol",{parentName:"admonition",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"enumerate()")," function"),". This function returns an iterator that yields the index and value of each element in the array. You can use this to print each element in the array with its index.")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def func_x(array):\n  for i, element in enumerate(array):\n    print(f"{i}: {element}")\n')),(0,i.kt)("ol",{parentName:"admonition",start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"map()")," function"),". This function applies a function to each element in an iterable. You can use this to print each element in the array with a custom formatting.")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  print(map(str, array))\n")),(0,i.kt)("p",{parentName:"admonition"},"Here is a table comparing the three methods:"),(0,i.kt)("table",{parentName:"admonition"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Pros"),(0,i.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"List comprehension"),(0,i.kt)("td",{parentName:"tr",align:null},"Concise"),(0,i.kt)("td",{parentName:"tr",align:null},"Can be difficult to read for complex code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enumerate()")),(0,i.kt)("td",{parentName:"tr",align:null},"Easy to read"),(0,i.kt)("td",{parentName:"tr",align:null},"Requires an extra variable to store the index")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"map()")),(0,i.kt)("td",{parentName:"tr",align:null},"Flexible"),(0,i.kt)("td",{parentName:"tr",align:null},"Requires a custom function to format the output")))),(0,i.kt)("p",{parentName:"admonition"},"Ultimately, the best way to solve the problem depends on the specific requirements of your code. If you need a concise solution, the list comprehension is a good option. If you need a solution that is easy to read, the ",(0,i.kt)("inlineCode",{parentName:"p"},"enumerate()")," function is a good option. If you need a solution that is flexible, the ",(0,i.kt)("inlineCode",{parentName:"p"},"map()")," function is a good option.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nI don\'t think this code is the best way to do it in Python, can you help me?\n\n{question}\n\nPlease explore multiple ways of solving the problem, \nand tell me which is the most Pythonic\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("admonition",{title:"result",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are a few ways to solve this problem in Python. The most Pythonic way would be to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," comprehension syntax. This would allow you to iterate over the array and print each element without having to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loop."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  print([element for element in array])\n")),(0,i.kt)("p",{parentName:"admonition"},"Another way to solve this problem would be to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," function. This function takes a function and an iterable as arguments and returns a new iterable where each element of the original iterable has been passed through the function."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  return map(print, array)\n")),(0,i.kt)("p",{parentName:"admonition"},"Finally, you could also solve this problem using the ",(0,i.kt)("inlineCode",{parentName:"p"},"enumerate")," function. This function takes an iterable as an argument and returns an iterable of tuples where the first element of each tuple is the index of the element in the original iterable and the second element is the element itself."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def func_x(array):\n  for i, element in enumerate(array):\n    print(i, element)\n")),(0,i.kt)("p",{parentName:"admonition"},"Of the three solutions, the most Pythonic is the first one, which uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," comprehension syntax. This is because it is the most concise and readable way to solve the problem.")),(0,i.kt)("h3",{id:"scenario-2-simplify-code"},"Scenario 2: Simplify code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# option 1\nprompt_template = """\nCan you please simplify this code for a linked list in Python?\n\n{question}\n\nExplain in detail what you did to modify it, and why.\n"""\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# option 2\nprompt_template = """\nCan you please simplify this code for a linked list in Python? \\n\nYou are an expert in Pythonic code.\n\n{question}\n\nPlease comment each line in detail, \\n\nand explain in detail what you did to modify it, and why.\n"""\n\nquestion = """\nclass Node:\n  def __init__(self, dataval=None):\n    self.dataval = dataval\n    self.nextval = None\n\nclass SLinkedList:\n  def __init__(self):\n    self.headval = None\n\nlist1 = SLinkedList()\nlist1.headval = Node("Mon")\ne2 = Node("Tue")\ne3 = Node("Wed")\nlist1.headval.nextval = e2\ne2.nextval = e3\n\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("p",null,"Below the result."),(0,i.kt)("admonition",{title:"result",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Node:\n    def __init__(self, data=None):\n        self.data = data\n        self.next = None\n\n\nclass SLinkedList:\n    def __init__(self):\n        self.head = None\n\n\ndef create_linked_list(data):\n    head = Node(data[0])\n    current = head\n    for data in data[1:]:\n        new_node = Node(data)\n        current.next = new_node\n        current = new_node\n    return head\n\n\nlist1 = create_linked_list(["Mon", "Tue", "Wed"])\n')),(0,i.kt)("p",{parentName:"admonition"},"I simplified the code by removing the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataval")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nextval")," attributes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," class. These attributes are not necessary because the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," attributes provide the same functionality. I also removed the ",(0,i.kt)("inlineCode",{parentName:"p"},"SLinkedList")," class because it is not necessary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"create_linked_list()")," function can be used to create a linked list without the need for a separate class.")),(0,i.kt)("h3",{id:"scenario-3-write-test-cases"},"Scenario 3: Write test cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nCan you please create test cases in code for this Python code?\n\n{question}\n\nExplain in detail what these test cases are designed to achieve.\n"""\n\n# Note that the code I\'m using here was output in the previous\n# section. Your output code may be different.\nquestion = """\nclass Node:\n  def __init__(self, dataval=None):\n    self.dataval = dataval\n    self.nextval = None\n\nclass SLinkedList:\n  def __init__(self):\n    self.head = None\n\ndef create_linked_list(data):\n  head = Node(data[0])\n  for i in range(1, len(data)):\n    node = Node(data[i])\n    node.nextval = head\n    head = node\n  return head\n\nlist1 = create_linked_list(["Mon", "Tue", "Wed"])\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("p",null,"Below the result."),(0,i.kt)("admonition",{title:"result",type:"info"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import unittest\n\nclass TestSLinkedList(unittest.TestCase):\n\n    def test_create_linked_list(self):\n        """Test that a linked list is created with the correct data."""\n        data = ["Mon", "Tue", "Wed"]\n        head = create_linked_list(data)\n        self.assertEqual(head.dataval, "Mon")\n        self.assertEqual(head.nextval.dataval, "Tue")\n        self.assertEqual(head.nextval.nextval.dataval, "Wed")\n\n    def test_insert_into_linked_list(self):\n        """Test that a new node can be inserted into a linked list."""\n        data = ["Mon", "Tue", "Wed"]\n        head = create_linked_list(data)\n        new_node = Node("Thu")\n        new_node.nextval = head.nextval\n        head.nextval = new_node\n        self.assertEqual(head.nextval.dataval, "Thu")\n        self.assertEqual(head.nextval.nextval.dataval, "Tue")\n\n    def test_delete_from_linked_list(self):\n        """Test that a node can be deleted from a linked list."""\n        data = ["Mon", "Tue", "Wed"]\n        head = create_linked_list(data)\n        del_node = head.nextval\n        head.nextval = del_node.nextval\n        self.assertEqual(head.nextval.dataval, "Wed")\n        self.assertIsNone(del_node.nextval)\n\nif __name__ == "__main__":\n    unittest.main()\n')),(0,i.kt)("p",{parentName:"admonition"},"The test cases are designed to achieve the following:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Test that a linked list is created with the correct data."),(0,i.kt)("li",{parentName:"ul"},"Test that a new node can be inserted into a linked list."),(0,i.kt)("li",{parentName:"ul"},"Test that a node can be deleted from a linked list."))),(0,i.kt)("h3",{id:"scenario-4-make-code-more-efficient"},"Scenario 4: Make code more efficient"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nCan you please make this code more efficient?\n\n{question}\n\nExplain in detail what you changed and why.\n"""\n\nquestion = """\n# Returns index of x in arr if present, else -1\ndef binary_search(arr, low, high, x):\n    # Check base case\n    if high >= low:\n        mid = (high + low) // 2\n        if arr[mid] == x:\n            return mid\n        elif arr[mid] > x:\n            return binary_search(arr, low, mid - 1, x)\n        else:\n            return binary_search(arr, mid + 1, high, x)\n    else:\n        return -1\n\n# Test array\narr = [ 2, 3, 4, 10, 40 ]\nx = 10\n\n# Function call\nresult = binary_search(arr, 0, len(arr)-1, x)\n\nif result != -1:\n    print("Element is present at index", str(result))\nelse:\n    print("Element is not present in array")\n\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question)\n)\nprint(completion.result)\n')),(0,i.kt)("h3",{id:"scenario-5-debug-your-code"},"Scenario 5: Debug your code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nCan you please help me to debug this code?\n\n{question}\n\nExplain in detail what you found and why it was a bug.\n"""\n\n# I deliberately introduced a bug into this code! Let\'s see if the LLM can find it.\n# Note -- the model can\'t see this comment -- but the bug is in the\n# print function. There\'s a circumstance where nodes can be null, and trying\n# to print them would give a null error.\nquestion = """\nclass Node:\n   def __init__(self, data):\n      self.data = data\n      self.next = None\n      self.prev = None\n\nclass doubly_linked_list:\n   def __init__(self):\n      self.head = None\n\n# Adding data elements\n   def push(self, NewVal):\n      NewNode = Node(NewVal)\n      NewNode.next = self.head\n      if self.head is not None:\n         self.head.prev = NewNode\n      self.head = NewNode\n\n# Print the Doubly Linked list in order\n   def listprint(self, node):\n       print(node.data),\n       last = node\n       node = node.next\n\ndllist = doubly_linked_list()\ndllist.push(12)\ndllist.push(8)\ndllist.push(62)\ndllist.listprint(dllist.head)\n\n"""\n\n# Since a temperature > 0 encourages more randomness in the LLM output, you may want \n# to run this code a couple times to see what it outputs.\ncompletion = generate_text(\n    prompt = prompt_template.format(question=question),\n    temperature = 0.7\n)\nprint(completion.result)\n')),(0,i.kt)("admonition",{title:"result",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"I made the following changes to the code to make it more efficient:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"I used the ",(0,i.kt)("inlineCode",{parentName:"li"},"bisect")," function to find the index of the middle element of the array. This is more efficient than using the ",(0,i.kt)("inlineCode",{parentName:"li"},"mid = (high + low) // 2")," expression, as it does not require any division or modulo operations."),(0,i.kt)("li",{parentName:"ul"},"I used the ",(0,i.kt)("inlineCode",{parentName:"li"},"break")," statement to exit the recursive function early if the element is found. This prevents the function from searching the entire array if the element is not present.")),(0,i.kt)("p",{parentName:"admonition"},"The following is the improved code:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Returns index of x in arr if present, else -1\ndef binary_search(arr, x):\n    # Find the index of the middle element of the array\n    mid = bisect.bisect_left(arr, x)\n\n    # Check if the element is found\n    if mid < len(arr) and arr[mid] == x:\n        return mid\n    else:\n        return -1\n\n# Test array\narr = [ 2, 3, 4, 10, 40 ]\nx = 10\n\n# Function call\nresult = binary_search(arr, x)\n\nif result != -1:\n    print("Element is present at index", str(result))\nelse:\n    print("Element is not present in array")\n')),(0,i.kt)("p",{parentName:"admonition"},"This code is significantly faster than the original code, as it does not perform any unnecessary calculations.")),(0,i.kt)("h2",{id:"lesson-4-technical-debt"},"Lesson 4: Technical Debt"),(0,i.kt)("h3",{id:"ask-an-llm-to-explain-a-complex-code-base"},"Ask an LLM to explain a complex code base"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nCan you please explain how this code works?\n\n{question}\n\nUse a lot of detail and make it as clear as possible.\n"""\n\nquestion = """\n[Complicated Swift code here]\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=CODE_BLOCK)\n)\nprint(completion.result)\n')),(0,i.kt)("h3",{id:"ask-an-llm-to-document-a-complex-code-base"},"Ask an LLM to document a complex code base"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'prompt_template = """\nPlease write technical documentation for this code and \\n\nmake it easy for a non swift developer to understand:\n\n{question}\n\nOutput the results in markdown\n"""\n\nquestion = """\n[Complicated Swift code here]\n"""\n\ncompletion = generate_text(\n    prompt = prompt_template.format(question=CODE_BLOCK)\n)\nprint(completion.result)\n')))}u.isMDXComponent=!0}}]);