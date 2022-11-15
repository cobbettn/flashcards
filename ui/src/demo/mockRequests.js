const mockGetCardsResponse = {
    "cards": [{
        "cardList": [{
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
                "back": "used to connect to remote and execute commands on them"
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
        "__v": 84,
        "description": "https://youtu.be/-uleG_Vecis"
    }]
}

const mockLoginResponse = {
    "_id": "6047efaab3fe080cb6825f59",
    "username": "user",
    "email": "user@mail.com",
    "password": "$2b$10$hLWXpF.ty960oLDja41Ed.r4oIUYXzHKZTIU33sR9SU1T3YLUlHsy",
    "activationToken": null,
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwNDdlZmFhYjNmZTA4MGNiNjgyNWY1OSIsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGhMV1hwRi50eTk2MG9MRGphNDFFZC5yNG9JVVlYekhLWlRJVTMzc1I5U1UxVDNZTFVsSHN5IiwiYWN0aXZhdGlvblRva2VuIjpudWxsLCJfX3YiOjB9LCJpYXQiOjE2NjEyNjUyMjh9.-p3MPnG-7DvsNOfDSwpsQRPobOF5EQt6WBnY6qJ6tqM"
}

export {
    mockGetCardsResponse,
    mockLoginResponse
}