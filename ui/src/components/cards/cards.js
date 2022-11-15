export default {
    "data": {
        "cards": [
            {
                "cardList": [
                    {
                        "front": "what happens when you visit a website in your browser?",
                        "back": "The browser goes to the DNS server, and finds the real address of the server that the website lives on.\n\nThe browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.\n\nIf the server approves the client's request, the server sends the client a \"200 OK\" message, which means \"Of course you can look at that website! Here it is\", and then starts sending the website's files to the browser as a series of small chunks called data packets.\n\nThe browser assembles the small chunks into a complete web page and displays it to you."
                    },
                    {
                        "front": "in what order do the webpage files returned from the servet get parsed?",
                        "back": "html, css, then js"
                    },
                    {
                        "front": "what are packets?",
                        "back": "Packets are  the format in which the data is sent from server to client. What do we mean here? Basically, when data is sent across the web, it is sent as thousands of small chunks, so that many different web users can download the same website at the same time."
                    },
                    {
                        "front": "what is http?",
                        "back": "Hypertext Transfer Protocol, or HTTP, is a messaging protocol that allows web browsers to communicate with web servers (where web sites are stored)."
                    },
                    {
                        "front": "what is graceful degradation? ",
                        "back": "writing code so that it falls back to a simpler but still usable experience in older browsers"
                    },
                    {
                        "front": "what is the html5 equivalent of an img tag?",
                        "back": "<figure>, which wraps the img tag and allows for <figcaption> tags in place of a title attribute on the img"
                    },
                    {
                        "front": "aside from video and audio tags, what are the other html tags used to embed content",
                        "back": "<iframe> (other web pages), <embed>, and <object> (pdfs, svgs, and"
                    },
                    {
                        "front": "what attribute should you always use with an iframe to prevent security vulnerabilities",
                        "back": "sandbox"
                    },
                    {
                        "front": "what is SVG?",
                        "back": "SVG is an XML-based language for describing vector images. It's basically markup, like HTML, except that you've got many different elements for defining the shapes you want to appear in your image, and the effects you want to apply to those shapes"
                    },
                    {
                        "front": "what is art direction?",
                        "back": "The problem whereby you want to serve cropped images for different layouts — for example a landscape image showing a full scene for a desktop layout, and a portrait image showing the main subject zoomed in for a mobile layout. You can solve this problem using the <picture> element."
                    },
                    {
                        "front": "what is resolution switching?",
                        "back": "The problem whereby you want to serve smaller image files to narrow screen devices, as they don't need huge images like desktop displays do — and also optionally that you want to serve different resolution images to high density/low density screens. You can solve this problem by using vector graphics (SVG images) and the srcset with sizes attributes."
                    },
                    {
                        "front": "describe mobile first design",
                        "back": "create a single column design for mobile devices and then use media queries to check for larger screens and implement multi-column designes"
                    }
                ],
                "_id": "6063bef222383a00d846dfb4",
                "name": "web dev catchall",
                "userId": "6047efaab3fe080cb6825f59",
                "__v": 13,
                "description": "catch all for web related cards"
            },
            {
                "cardList": [
                    {
                        "front": "what does CSS stand for?",
                        "back": "cascading style sheets"
                    },
                    {
                        "front": "true or false: is css a programming language?",
                        "back": "false"
                    },
                    {
                        "front": "what is css used for?",
                        "back": "web page layout and design (used in conjunction with html which simply provides stucture)"
                    },
                    {
                        "front": "what are the three ways to style html elements with css?",
                        "back": "inline: directly in the html\ninternal: within  <style> tags\nexternal: with <link> tags that reference an external style sheet"
                    },
                    {
                        "front": "describe the box model from inside out",
                        "back": "content > padding > border > margin"
                    },
                    {
                        "front": "what is a pseudo class?",
                        "back": "A pseudo-class is a selector that selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to act as if you had applied a class to some part of your document, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code. "
                    },
                    {
                        "front": "what is a pseudo element?",
                        "back": "Pseudo-elements behave in a similar way, however they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing element"
                    },
                    {
                        "front": "how does pseudo-class and pseudo-element sytnax differ?",
                        "back": "pseudo class = a single colon, pseudo element = double colon (: vs ::)"
                    },
                    {
                        "front": "write a css selector to select only text inputs",
                        "back": "input[type=text] {\nrules\n}"
                    },
                    {
                        "front": "what is the difference between box-sizing: content-box; and box-sizing: border-bod",
                        "back": "content-box is the default value for box-sizing. it calculates an elements dimensions by content (width, height) without factoring in, padding, border, and margin. border-box calculates width by factoring in content, padding, and border, but not margin"
                    },
                    {
                        "front": "describe position: static",
                        "back": "element will be positioned as it appears in the html document"
                    },
                    {
                        "front": "describe position: relative",
                        "back": "element will be positioned in relation to its defautl ( static)  positioning"
                    },
                    {
                        "front": "describe position: absolute",
                        "back": " is positioned relative to the nearest positioned ancestor, if there are no positioned elements, it will be positioned of the body. it sits on its own plane in the document"
                    },
                    {
                        "front": "describe position: fixed",
                        "back": "element is fixed in viewport and wont leave the viewport when scrolling"
                    },
                    {
                        "front": "describe position: initial",
                        "back": "sets the position back to the default setting"
                    },
                    {
                        "front": "describe position: inherit",
                        "back": "inherits position from parent"
                    },
                    {
                        "front": "a css ___ selector applies rules by targeting tag names",
                        "back": "element"
                    },
                    {
                        "front": "a css ___ selector applies rules by targeting element with a specific id",
                        "back": "id"
                    },
                    {
                        "front": "a css ___ selector applies rules to all elements, what is its syntax",
                        "back": "universal, asterisk"
                    },
                    {
                        "front": "a css ___ selector applies rules by targeting element with a specific class",
                        "back": "class"
                    },
                    {
                        "front": "The CSS ___ selector matches elements based on the presence or value of a given attribute.",
                        "back": "attribute"
                    },
                    {
                        "front": "A CSS ___ is a keyword added to a selector that specifies a special state of the selected element(s)",
                        "back": "pseudo-class"
                    },
                    {
                        "front": "A CSS ___ is a keyword added to a selector that lets you style a specific part of the selected element(s).",
                        "back": "pseudo-element"
                    },
                    {
                        "front": "The ___ — typically represented by a single space ( ) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc) element matching the first selector.",
                        "back": "descendant combinator"
                    },
                    {
                        "front": "The ___ (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.",
                        "back": "child combinator"
                    },
                    {
                        "front": "The ___ (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.",
                        "back": " adjacent sibling combinator"
                    },
                    {
                        "front": "The ___ (~) separates two selectors and matches all iterations of the second element, that are following the first element (though not necessarily immediately), and are children of the same parent element.",
                        "back": "general sibling combinator"
                    },
                    {
                        "front": "what are user agent styles?",
                        "back": "the browser's (user agent) default style rules"
                    },
                    {
                        "front": "arrange the following selector types in order of specificity, least to greatest: class, type, id ",
                        "back": "type, class, id"
                    },
                    {
                        "front": "if two style rules with the same specificity are contained in a stylesheet, which is applied?",
                        "back": "as per the cascade rule, the one that occurs later in the style sheet"
                    },
                    {
                        "front": "define specificity: ",
                        "back": "Specificity is how the browser decides which rule applies if multiple rules have different selectors, but could still apply to the same element. It is basically a measure of how specific a selector's selection will be"
                    },
                    {
                        "front": "what style rules count towards thousands in a specificity calculation? ",
                        "back": "inline styles with the style attribute"
                    },
                    {
                        "front": "what style rules count towards hundreds in a specificity calculation? ",
                        "back": "id selectors"
                    },
                    {
                        "front": "what style rules count towards tens in a specificity calculation? ",
                        "back": "class selectors, attribute selectors, or pseudo-classes"
                    },
                    {
                        "front": "what style rules count towards ones in a specificity calculation? ",
                        "back": "element selector or pseudo-element"
                    },
                    {
                        "front": "how do you override specificity calculations and force styles on element(s)",
                        "back": "the !important keyword"
                    },
                    {
                        "front": "what are the outer display types",
                        "back": "inline and block"
                    },
                    {
                        "front": "what are the inner display types",
                        "back": "flex and grid"
                    },
                    {
                        "front": "say two block level elements have a margin of 50px and 30px respectively, how much space will be between the 2 elements? 80px or 50px? why?",
                        "back": "50px, since the larger of the 2 margins is what gets dispalyed, they aren't combined"
                    },
                    {
                        "front": "which part of the box model can have negative values?",
                        "back": "margin"
                    },
                    {
                        "front": "applying margin padding and border to inline elements will cause other boxes to be pushed away from the element, true or false?",
                        "back": "false"
                    },
                    {
                        "front": "applying margin padding and border to inline-block elements will cause other boxes to be pushed away from the element, true or false?",
                        "back": "true"
                    },
                    {
                        "front": "describe overflow",
                        "back": "verflow happens when there is too much content to fit in a box"
                    },
                    {
                        "front": "what are the vw and vh units equivalent to",
                        "back": "vw is 1% of the viewport's width, vh is 1% of the viewport's height"
                    },
                    {
                        "front": "what is the em unit equivalent to ?",
                        "back": "the parent element's font size"
                    },
                    {
                        "front": "what is the em unit equivalent to ?",
                        "back": "the root element's font size"
                    },
                    {
                        "front": "in what cases do the top, bottom, left, and right properties take effect? ",
                        "back": "when an element is positioned (position: relative | absolute | fixed | sticky)"
                    },
                    {
                        "front": "what does flex-wrap: wrap; do?",
                        "back": "keeps flex children from overflowing parent container"
                    },
                    {
                        "front": "what does it mean to clear a float?",
                        "back": "instead of content displaying beside a floated element, a cleared float will force content after it in the document flow to be pushed below"
                    },
                    {
                        "front": "the z-index property only works on ___ elements",
                        "back": "positioned"
                    },
                    {
                        "front": "what does a media query consist of?",
                        "back": "a media type (screen, print, etc), a media expression which acts as a test to determine when to apply the media rules, and media rules, which are a set of css rules"
                    }
                ],
                "_id": "605e2757455fda00b4077408",
                "name": "css",
                "userId": "6047efaab3fe080cb6825f59",
                "__v": 33
            },
            {
                "cardList": [
                    {
                        "front": "what does HTML stand for?",
                        "back": "HyperText Markup Language"
                    },
                    {
                        "front": "HTML is a programming language true or false?",
                        "back": "false, it is just presentational. There is not logic or control structures"
                    },
                    {
                        "front": "what is html used for?",
                        "back": "to define the structure of the webpage"
                    },
                    {
                        "front": "what are the building blocks of html?",
                        "back": "tags (div, p, a, form, etc.)"
                    },
                    {
                        "front": "what goes between html tags? ",
                        "back": "content"
                    },
                    {
                        "front": "what is the outermost tag of a web page",
                        "back": "<html> tag"
                    },
                    {
                        "front": "what does the <!DOCTYPE> tag do? Is it an html tag?",
                        "back": "tells the browser what version of html the document is (html, html5, xhtml)\n\nDoctype is not html"
                    },
                    {
                        "front": "most of the time there are 2 children of an html tag, what tags are they?",
                        "back": "head and body are the most common child tags of the html tag"
                    },
                    {
                        "front": "what is the <head> tag used for?",
                        "back": "The head of an HTML document is the part that is not displayed in the web browser when the page is loaded. It contains information such as the page <title>, links to CSS and JS, links to custom favicons, and other metadata (data about the HTML, such as the author, and important keywords that describe the document.)"
                    },
                    {
                        "front": "what is the syntax for html comments?",
                        "back": "<!-- comment -->"
                    },
                    {
                        "front": "all html tags have one of two default dispaly values, what are they?",
                        "back": "block  or inline"
                    },
                    {
                        "front": "fill in the blank: ____ elements do not start a new line and fill in only the necessary space",
                        "back": "inline"
                    },
                    {
                        "front": "fill in the blank: ____ elements start a new line and take the full width available",
                        "back": "block"
                    },
                    {
                        "front": "name some of the more popular semantic html5 tags",
                        "back": "header, footer, section, article, nav, details, aside"
                    },
                    {
                        "front": "when should you load javscript in the <head> tag?",
                        "back": "If the scripts contain some event-triggered functions or library"
                    },
                    {
                        "front": "when should you load javscript in the <body> tag?",
                        "back": " If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom"
                    },
                    {
                        "front": "What is the difference between “display: none” and “visibility: hidden”",
                        "back": "hen we use the attribute “visibility:hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage."
                    },
                    {
                        "front": "how does whitespace work in html tag content",
                        "back": "No matter how much whitespace you use inside HTML element content (which can include one or more space character, but also line breaks), the HTML parser reduces each sequence of whitespace to a single space when rendering the code"
                    },
                    {
                        "front": "how would you specify an html documents character encoding as utf-8?",
                        "back": "<meta charset=\"utf-8\">"
                    },
                    {
                        "front": "what are the 2 most common attributes of <meta> tags?",
                        "back": "name, which specifies what type of information the tag contains\ncontenet, which contains the actual information"
                    },
                    {
                        "front": "Ideally, what is the max number of h1 elements to use on a page",
                        "back": "just one"
                    },
                    {
                        "front": "what is an absolute URL",
                        "back": "Points to a location defined by its absolute location on the web, including protocol and domain name."
                    },
                    {
                        "front": "what is an relative URL",
                        "back": "Points to a location that is relative to the file you are linking from\n\nA relative URL will point to different places depending on the actual location of the file you refer from"
                    }
                ],
                "_id": "605e1c39455fda00b4077407",
                "name": "html",
                "userId": "6047efaab3fe080cb6825f59",
                "__v": 12
            },
            {
                "cardList": [
                    {
                        "front": "Turing Machine",
                        "back": "a device that can read and write from a length of tape containing 1s and 0s, a foundational model of computability and computer science"
                    },
                    {
                        "front": "CPU",
                        "back": "Central processing unit, core of modern computer. Silicon chip containing billions of transistors"
                    },
                    {
                        "front": "Transistor",
                        "back": "An on/off switch used to represented a bit in the context of a CPU"
                    },
                    {
                        "front": "Bit",
                        "back": "The smallest unit of information a computer can use, a binary value 0 or 1"
                    },
                    {
                        "front": "Byte",
                        "back": "a unit of digital information consisting of 8 bits, 0-255. The smallest addressable unit of memory in many computer architectures"
                    },
                    {
                        "front": "ASCII",
                        "back": "American Standard Code for Information Interchange, a character encoding. Characters/values correspond to binary values (0000000 Null, 1000001 A)"
                    },
                    {
                        "front": "Binary",
                        "back": "a number system, a system for counting. Base-2 as opposed to Base-10"
                    },
                    {
                        "front": "Hexadecimal format",
                        "back": "a binary format for numbers, base-16. more human readable than 1s and 0s"
                    },
                    {
                        "front": "nibble",
                        "back": "a four bit aggregation (0001, 0010, ...) each hexidecimal digit is a nibble"
                    },
                    {
                        "front": " machine code",
                        "back": "a binary format that can be decoded and executed by the cpu. A program written in a programming language will be converted into machine code"
                    },
                    {
                        "front": "random access memory",
                        "back": "volatile memory that can be read and changed in any order, typically used to store working data and machine code"
                    },
                    {
                        "front": "memory address",
                        "back": "a reference to a specific location in memory, typically fixed-length sequences of digits conventionally displayed and manipulated as unsigned integers"
                    },
                    {
                        "front": "I/0",
                        "back": "input and output, input: keyboard, mouse, output monitor, speakers.\nIt is the communication between an information processing system, such as a computer, and the outside world, possibly a human or another information processing system."
                    },
                    {
                        "front": "kernel",
                        "back": "Operating system kernels (windows, linux, mac) control all hardware resources via device drivers. It is the portion of the operating system code that is always resident in memory"
                    },
                    {
                        "front": "shell",
                        "back": "A program that wraps around the kernel and exposes the operating system to the end user (in the form of a cli) or other programs"
                    },
                    {
                        "front": "CLI",
                        "back": "command line interface: Takes a line of text as input and produces an output"
                    },
                    {
                        "front": "ssh",
                        "back": "used to connect to remote servers and execute commands on them"
                    },
                    {
                        "front": "mainframe ",
                        "back": "A high end commercial computer used for tasks such as bulk data-processing. Not a supercomputer but more powerful than a pc"
                    },
                    {
                        "front": "programming language",
                        "back": "is any set of rules that converts strings to various kinds of machine code output. Used in computer programming to implement algorithms"
                    },
                    {
                        "front": "abstraction principle",
                        "back": "A basic dictum that aims to reduce duplication of information in a program (usually with emphasis on code duplication) whenever practical by making use of abstractions provided by the programming language or software libraries."
                    },
                    {
                        "front": "interpreted languages",
                        "back": "An interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program"
                    },
                    {
                        "front": "compiled languages",
                        "back": "a compiler converts the entire program into machine code in advance before the cpu attempts to execute it"
                    },
                    {
                        "front": "executable",
                        "back": "a file that can be run by an OS, the output of compiling a program"
                    },
                    {
                        "front": "data types",
                        "back": "an attribute of data which tells the compiler or interpreter how the programmer intends to use the data (int, float, string, boolean)"
                    },
                    {
                        "front": "variable",
                        "back": "attaches a name to a data point which can be referenced in code, stored in memory"
                    },
                    {
                        "front": "dynamically typing",
                        "back": "variable types are not requited in dynamically typed languages, types are determined at runtime"
                    },
                    {
                        "front": "static typing",
                        "back": "variable types are required in these languages"
                    },
                    {
                        "front": "pointer",
                        "back": "a variable whose value is the memory address of another variable, used for low-level memory control"
                    },
                    {
                        "front": "garbage collection",
                        "back": "automatically allocates and deallocates memory when an object is no longer referenced in the code"
                    },
                    {
                        "front": "int",
                        "back": "used to represent whole numbers"
                    },
                    {
                        "front": "signed",
                        "back": "signed data types support negative values unlike unsigned"
                    },
                    {
                        "front": "floating point",
                        "back": "used for numbers that require decimal points"
                    },
                    {
                        "front": "double ",
                        "back": "a float that is twice as big as a float and can represent decimals with greater precision"
                    },
                    {
                        "front": "char",
                        "back": "used to represent a single character"
                    },
                    {
                        "front": "string",
                        "back": "used to represent an array of characters"
                    },
                    {
                        "front": "big endian",
                        "back": "most significant byte is stored in the smallest memory address"
                    },
                    {
                        "front": "little endian",
                        "back": "least signifcant byte is stored in the smallest memory address"
                    },
                    {
                        "front": "data structures",
                        "back": "a data structure is a data organization, management, and storage format that enables efficient access and modification. or... a collection of data values, the relationships among them, and the functions or operations that can be applied to the data"
                    },
                    {
                        "front": "array",
                        "back": "an indexed list that organizes multiple data points in order"
                    },
                    {
                        "front": "linked list",
                        "back": "each item has a pointer to the next item in front of it"
                    },
                    {
                        "front": "stack",
                        "back": "first in, last out. Pop() removes item from top of stack"
                    },
                    {
                        "front": "queue",
                        "back": "first in, first out. dequeue removes first item in queue"
                    },
                    {
                        "front": "hash ",
                        "back": "dictionary (map, dict) like an array, but instead of indeces, there are user defined keys that point to items (k/v pairs). Not ordered like an array"
                    },
                    {
                        "front": "tree ",
                        "back": "nodes organized in a hierarchy that can usually be traversed more quickly"
                    },
                    {
                        "front": "graph ",
                        "back": "nodes can be connected in an unlimited number of ways. nodes contain data and edges define relations between nodes"
                    },
                    {
                        "front": "edge",
                        "back": "a connection or relationship between two nodes in a graph"
                    },
                    {
                        "front": "algorithm",
                        "back": "code that is used to solve a problem"
                    },
                    {
                        "front": "function ",
                        "back": "a block of code that takes an input and returns and output. functions have names and can be called from"
                    },
                    {
                        "front": "return",
                        "back": "to output a value"
                    },
                    {
                        "front": "arguments",
                        "back": "input parameters of a function"
                    },
                    {
                        "front": "operators",
                        "back": "can be used to compare 2 values"
                    },
                    {
                        "front": "boolean",
                        "back": "a values that is true or false"
                    },
                    {
                        "front": "expression",
                        "back": "code that produces a value (a < b will evaluate to a boolaen)"
                    },
                    {
                        "front": "statement",
                        "back": "code that does something (as opposed to an expression)"
                    },
                    {
                        "front": "conditional logic",
                        "back": "code that is only executed if a certain condition is met"
                    },
                    {
                        "front": "while loop",
                        "back": "code that repeats indefinitely until the expression it is given evaluates to false"
                    },
                    {
                        "front": "iterable",
                        "back": "something that can be looped over (an array for example)"
                    },
                    {
                        "front": "for loop",
                        "back": "for each item in a given iterable data structure, do something"
                    },
                    {
                        "front": "void",
                        "back": "used to denote functions without return values"
                    },
                    {
                        "front": "recursion",
                        "back": "when a function calls itself"
                    },
                    {
                        "front": "call stack",
                        "back": "memory that is used when calling a function in code. calling a function puts frames onto the call stack to be executed"
                    },
                    {
                        "front": "stack overflow",
                        "back": "error that occurs when all available call stack memory has been allocated"
                    },
                    {
                        "front": "base condition",
                        "back": "the condition that needs to be met to terminate a loop"
                    },
                    {
                        "front": "big-o notation",
                        "back": "the standard format for approximating the performance of an algorithm at scale"
                    },
                    {
                        "front": "time complexity",
                        "back": "how fast an algorithm runs"
                    },
                    {
                        "front": "space complexity",
                        "back": "how much memory is required to run the algorithm"
                    },
                    {
                        "front": "brute force",
                        "back": "when an algorithm loops over every possible combination in the problem "
                    },
                    {
                        "front": "divide and conquer",
                        "back": "where the problem is cut in half each iteration (binary search)"
                    },
                    {
                        "front": "dynamic programming",
                        "back": "problem is broken into multiple smaller sub-problems"
                    },
                    {
                        "front": "memoization",
                        "back": "saves the output of a function so that when it has already been called, the return value is not computed again"
                    },
                    {
                        "front": "greedy",
                        "back": "algorithms that make the choice that will be most beneficial in the short term"
                    },
                    {
                        "front": "dijkstra's shortest path",
                        "back": "an algorithm for finding the shortest paths between nodes in a graph, an example of a greedy algorithm"
                    },
                    {
                        "front": "backtracking algorithm",
                        "back": "a general algorithm for finding solutions to some computational problems,, that incrementally builds candidates to the solutions, and abandons a candidate (\"backtracks\") as soon as it determines that the candidate cannot possibly be completed to a valid solution."
                    },
                    {
                        "front": "declarative",
                        "back": "describe what the code does and the outcome with expressions (doesnt care about control flow)"
                    },
                    {
                        "front": "functional programming",
                        "back": "a programming paradigm where programs are constructed by applying and composing functions."
                    },
                    {
                        "front": "imperative programming",
                        "back": "code uses statements and instructions about how to produce an outcome (haskell)"
                    },
                    {
                        "front": "procedural programming",
                        "back": "a programming paradigm, derived from imperative programming, based on the concept of the procedure call (C)"
                    },
                    {
                        "front": "multi paradigm languages",
                        "back": "support multiple language paradigms simultaneously"
                    },
                    {
                        "front": "object oriented programming",
                        "back": ""
                    },
                    {
                        "front": "class",
                        "back": "a blue print for the data or objects in code "
                    },
                    {
                        "front": "property",
                        "back": "a variable encapsulated within a class"
                    },
                    {
                        "front": "method",
                        "back": "functions that belong to a class"
                    },
                    {
                        "front": "inheritance",
                        "back": "a way for classes share behavior between each other. a child subclass extends a parent super class"
                    },
                    {
                        "front": "design patterns",
                        "back": "A reusable solution to a commonly occurring problem within a given context in software design"
                    },
                    {
                        "front": "instantiate",
                        "back": "to create an object in the memory of the computer running a program"
                    },
                    {
                        "front": "heap",
                        "back": "where object instances and variables are stored in memory. can grow and shrink unlike the call stack"
                    },
                    {
                        "front": "reference",
                        "back": "same object can be assigned to multiple variables without using more memory"
                    },
                    {
                        "front": "thread",
                        "back": "a vitrual cpu core that allows code to run simultaneously. The physical cpu core is broken into multiple virutal cores"
                    },
                    {
                        "front": "parallelism",
                        "back": "code executes on 2 different threads simultaneously"
                    },
                    {
                        "front": "concurrency ",
                        "back": "event loop or some mechanism that can pause normal execution to handle multiple jobs on a single thread"
                    },
                    {
                        "front": "bare metal",
                        "back": "physical computer"
                    },
                    {
                        "front": "virtual machine",
                        "back": "a peice of software that simulates computer hardwares"
                    },
                    {
                        "front": "ip address",
                        "back": "unique identifier on a network"
                    },
                    {
                        "front": "url",
                        "back": "ip addresses are aliased to these,"
                    },
                    {
                        "front": "dns",
                        "back": "database that maps urls to ips"
                    },
                    {
                        "front": "tcp handshake",
                        "back": ""
                    },
                    {
                        "front": "packets",
                        "back": ""
                    },
                    {
                        "front": "ssl",
                        "back": ""
                    },
                    {
                        "front": "http",
                        "back": ""
                    },
                    {
                        "front": "api",
                        "back": ""
                    }
                ],
                "_id": "6075ad67826ca206cedaa6e9",
                "name": "100 cs concepts",
                "userId": "6047efaab3fe080cb6825f59",
                "__v": 85,
                "description": "https://youtu.be/-uleG_Vecis"
            },
            {
                "cardList": [
                    {
                        "front": "What's the difference between undefined and not defined in JavaScript?",
                        "back": "A variable can be declared but not defined. When we try to access it, It will output as undefined.\n\n'not defined' occurs when a variable is referenced that doesnt exist\n"
                    },
                    {
                        "front": "What is the drawback of declaring methods directly in JavaScript objects?",
                        "back": "it is not efficient in terms of memory usage. It is better to add the method to the object's prototype. that way the method isnt copied on each instance and is created only once"
                    },
                    {
                        "front": "What is “closure” in javascript?",
                        "back": "A closure is a function defined inside another function (called parent function) and as such it has access to the variables declared and defined within its parent function's scope.\n\nThe closure has access to the variables in three scopes:\n\nVariable declared in his own scope\nVariable declared in its parent function's scope\nVariable declared in the global namespace"
                    },
                    {
                        "front": " Write a mul function which will work properly when invoked with following syntax; mul(x)(y)(z)",
                        "back": "const mul = function(x) { return function(y) { return(z) { return x* y * z; } } }"
                    },
                    {
                        "front": "what does Array.splice() do?",
                        "back": "method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place"
                    },
                    {
                        "front": "describe the parameters of array.splice()",
                        "back": "start: the index at which to start changing the array. if > or = to array.length the index will be set to array.length\n\ndeleteCount: (optional) An integer indicating the number of elements in the array to remove from start\n\nitem1, item2, ... : (optional) items to add to the array at start. "
                    },
                    {
                        "front": "how can you get the length of a string in js?",
                        "back": "<string>.length"
                    },
                    {
                        "front": "how can you get a specific character of a string in js?",
                        "back": "str[i] where i is the 0-index"
                    },
                    {
                        "front": "how can you check for a substring within another string?",
                        "back": "str.includes(substring)"
                    },
                    {
                        "front": "describe the string.slice() method ",
                        "back": "it extracts a section of a string and returns it as a new string, without modifying the original string"
                    },
                    {
                        "front": "each browser tab has its own execution environment for javascript to run within. Code running in one tab doesn't interfere with code running in another tab, T or F?",
                        "back": "true"
                    },
                    {
                        "front": "what does the defer attribute on a script tag do?",
                        "back": "tells the browsers to load an external script after the page is done being parsed"
                    },
                    {
                        "front": "what does the async attribute on the script tag do?",
                        "back": "tells the browser to download an external script without blocking the rendering of the page"
                    },
                    {
                        "front": "how would you slice off all but 3 decimal places on a number (without rounding)",
                        "back": "number.toFixed(3)"
                    },
                    {
                        "front": "how can you escape characters in a string?",
                        "back": "\\ (backslash)"
                    },
                    {
                        "front": "how can you turn a delimited string into an array",
                        "back": "string.split(<delimiter>)"
                    },
                    {
                        "front": "how can you convert an array into a delimited string",
                        "back": "arr.join(<delimiter>)"
                    },
                    {
                        "front": "how can you add an item to the end of an array",
                        "back": "arr.push(item)"
                    },
                    {
                        "front": "how can you remove an item from the end of an array (and return it)",
                        "back": "arr.pop()"
                    },
                    {
                        "front": "how can you add an item to the beginning of an array",
                        "back": "arr.shift(item)"
                    },
                    {
                        "front": "how can you remove an item from the beginning of an array (and return it)",
                        "back": "arr.unshift()"
                    },
                    {
                        "front": "what are the falsy values in js?",
                        "back": "false, undefined, null, 0, NaN, or an empty string ('')"
                    },
                    {
                        "front": "how do you exit a loop prematurely",
                        "back": "break"
                    },
                    {
                        "front": "how do you skip an iteration of a loop and go on to the next one? ",
                        "back": "continue"
                    },
                    {
                        "front": "what is the difference between a function and a method?",
                        "back": "methods are functions that belong to an object"
                    },
                    {
                        "front": "what does the bind function do?",
                        "back": "it creates a new function that, when called, has its this keyword set to the provided value"
                    },
                    {
                        "front": "what does the call function do?",
                        "back": "calls a function with a given 'this' value and arguments provided individually"
                    },
                    {
                        "front": "what are the main differences between call() and bind()",
                        "back": "1. Accepts additional parameters as well.\n2. Executes the function it was called upon right away.\n3. The call() method does not make a copy of the function it is being called on."
                    },
                    {
                        "front": "what does the apply function do?",
                        "back": "calls a function with a given 'this' value and arguments provided as an array"
                    },
                    {
                        "front": "what are the differences between call() and apply()",
                        "back": "call takes individual params to call the function with, apply takes a single array of those params"
                    },
                    {
                        "front": "what does the this keyword refer to?",
                        "back": "the current object the code is being written inside"
                    }
                ],
                "_id": "60632ef7e4b5390070be5f9b",
                "name": "javascript",
                "userId": "6047efaab3fe080cb6825f59",
                "__v": 24
            },
            {
                "cardList": [
                    {
                        "front": "What are the 4 layers of guidance under WCAG 2?",
                        "back": "1. Principles (POUR), 2. guidelines (13 non-testable goals), 3. success criteria (testable criteria under each guideline), 4. sufficient and advisory techniques (sufficient are pretty much non-negotiable, advisory are nice-to-haves)"
                    },
                    {
                        "front": "What does the Perceivable principle enforce? ",
                        "back": "Information and user interface components must be presentable to users in ways they can perceive."
                    },
                    {
                        "front": "What are the 4 guidelines of the Perceivable principle?",
                        "back": "1. text alternatives, 2. time-based media, 3. adaptable, 4. distinguishable."
                    },
                    {
                        "front": "What is the purpose of providing text alternatives to content? (P.1.1)",
                        "back": "So that content can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language"
                    },
                    {
                        "front": "How do you provide alternatives to time based media (P.1.2)?  ",
                        "back": "Usually a document including correctly sequenced text descriptions of time-based visual and auditory information and providing a means for achieving the outcomes of any time-based interaction"
                    },
                    {
                        "front": "How do you ensure the web content is adaptable (P.1.3)?",
                        "back": "By ensuring that content can be presented in different ways"
                    },
                    {
                        "front": "How do you ensure that content is distinguishable (P.1.4)?",
                        "back": "By making it easier for users to see and hear content including separating foreground from background"
                    },
                    {
                        "front": "What does the Operable principle state?",
                        "back": "That user interface components and navigation be operable"
                    },
                    {
                        "front": "What does it mean for a website to be keyboard accessible?",
                        "back": "All functionality is available from a keyboard without requiring specific timings for individual keystrokes"
                    },
                    {
                        "front": "What is a keyboard trap?",
                        "back": "When keyboard focus can be moved to a component of the page using a keyboard interface, but cannot be moved away from that component using the keyboard."
                    },
                    {
                        "front": "If character key shortcuts are implemented using only upper or lowercase letter, punctuation, number, or symbol characters, then at least one of the following 3 things must be true?",
                        "back": "1. turn off: a mechanism must exist to turn the shortcut off. 2. remap a mechanism is available to remap the shortcut. 3. active only on focus: the shortcut is only available when the ui component has focus"
                    },
                    {
                        "front": "When a time limit is set in web content it is import that it is _____.",
                        "back": "Adjustable"
                    },
                    {
                        "front": "For moving, blinking, or scrolling information that 1) starts automatically 2) lasts more than 5 seconds 3) is presented in parallel with other content, there is a mechanism to _____, _____, or _____ it.",
                        "back": "pause, stop, hide"
                    },
                    {
                        "front": "Updates, alerts and other _____ must be able to be postponed or suppressed by users (2.2.4)",
                        "back": "interuptions"
                    },
                    {
                        "front": "Any time limits set by content should be _____ when possible to allow users adequate time (2.2.1)",
                        "back": "adjustable"
                    },
                    {
                        "front": "When a user session expires, the user can continue without data loss after  _____ . (2.2.5)",
                        "back": "re-authenticating"
                    },
                    {
                        "front": "Users should be warned about the duration of _____ that can could cause data loss, unless the data is preserved for more than _____ hours if the user does not take action (2.2.6)",
                        "back": "user inactivity, 20"
                    },
                    {
                        "front": "Web pages should be _____ , in other words, users should be able to find content and determine where they are (2.4)",
                        "back": "navigable"
                    },
                    {
                        "front": "a mechanism is available that allows users to _____  blocks of content that are repeated on multiple web pages",
                        "back": "bypass"
                    },
                    {
                        "front": "A web page  should have a title that describes its _____ or _____ .",
                        "back": "topic, purpose"
                    },
                    {
                        "front": "If the navigation sequence of a page affects the meaning or operation of the page, components should receive _____ in an order that preserves meaning and operability (2.4.3)",
                        "back": "focus"
                    },
                    {
                        "front": "A link's _____ should be able to be determined from the link text alone or from the text and the link's context",
                        "back": "purpose"
                    },
                    {
                        "front": "it is desirable to have multiple ways to _____ a webpage within a set of webpages, except when the page is a result of or a step in a process.",
                        "back": "locate"
                    },
                    {
                        "front": "To make pages more navigable, use _____ or ______ to describe topic or purpose",
                        "back": "topic, purpose"
                    },
                    {
                        "front": "any keyboard operable UI has a mode of operation where the _____ is visible",
                        "back": "keyboard focus indicator"
                    },
                    {
                        "front": "information about the user's _____ within a set of web pages should be made available (2.4.8 navigable)",
                        "back": "location"
                    },
                    {
                        "front": "It is important to use section _____ to organize content (navigable)",
                        "back": "headings"
                    },
                    {
                        "front": "What should input modalities do (2.5)?",
                        "back": "Make it easier for users to operate functionality through various inputs beyond keyboard."
                    },
                    {
                        "front": "All functionality that uses multipoint or path-based _____ for operation can be operated with a _____ _____ without a _____ gesture, unless a multipoint or path-based gesture is essential. (input modalities)",
                        "back": "gestures, single pointer, path-based"
                    }
                ],
                "_id": "63459cc510eb4708bc8efa7c",
                "name": "100 days of a11y",
                "userId": "6047efaab3fe080cb6825f59",
                "description": "https://100daysofa11y.com/",
                "__v": 28
            }
        ]
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "36317",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "url": "http://localhost:3000/user/6047efaab3fe080cb6825f59/cards",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwNDdlZmFhYjNmZTA4MGNiNjgyNWY1OSIsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGhMV1hwRi50eTk2MG9MRGphNDFFZC5yNG9JVVlYekhLWlRJVTMzc1I5U1UxVDNZTFVsSHN5IiwiYWN0aXZhdGlvblRva2VuIjpudWxsLCJfX3YiOjB9LCJpYXQiOjE2NjgxOTgwMDJ9.RfiS8LarI-ohEABQiZFxTV1Lg72S7wsAewb5bmVqrv8"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "baseUrl": "http://localhost:3000"
    },
    "request": {}
}