const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-002",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const courseOutline = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: 'Generate a complete study material for Python for Exam and level of difficulty will be EASY with the summary of course, list of chapters (Max 3) along with summary, include emoji icon for each chapter, topic list in each chapter all in JSON format",',
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{"course_name": "Introduction to Python (Easy)", "course_summary": "This course provides a foundational understanding of Python programming, covering basic concepts and syntax. It is designed for beginners with little to no prior programming experience. Upon completion, students will be able to write simple Python programs and understand fundamental programming principles.", "chapters": [{"chapter_number": 1, "chapter_title": "Getting Started with Python", "chapter_summary": "Introduction to Python, setting up the environment, and writing your first program.", "icon": "🐍", "topics": ["What is Python?", "Installing Python", "Running Python code", "Variables and data types", "Basic operators"]}, {"chapter_number": 2, "chapter_title": "Control Flow", "chapter_summary": "Learn how to control the execution of your code using conditional statements and loops.", "icon": "🚦", "topics": ["Conditional statements (if, elif, else)", "Loops (for, while)", "Break and continue statements"]}, {"chapter_number": 3, "chapter_title": "Data Structures", "chapter_summary": "Explore different ways to organize and store data in Python.", "icon": "🗄️", "topics": ["Lists", "Tuples", "Dictionaries", "Sets"]}, {"chapter_number": 4, "chapter_title": "Functions", "chapter_summary": "Learn how to create reusable blocks of code using functions.", "icon": "🧱", "topics": ["Defining functions", "Function arguments", "Return values", "Scope of variables"]}, {"chapter_number": 5, "chapter_title": "Working with Strings", "chapter_summary": "Manipulate and process text using string methods.", "icon": "🔤", "topics": ["String concatenation", "String slicing", "String formatting", "Common string methods"]}, {"chapter_number": 6, "chapter_title": "File Handling", "chapter_summary": "Learn how to read and write data to files.", "icon": "📄", "topics": ["Opening and closing files", "Reading from files", "Writing to files"]}, {"chapter_number": 7, "chapter_title": "Modules and Libraries", "chapter_summary": "Explore the power of Python\'s extensive libraries.", "icon": "📚", "topics": ["Importing modules", "Using built-in modules", "Exploring popular libraries"]}]}\n\n```',
          },
        ],
      },
    ],
  });

const notesConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

 export const generateNotesAiModel = model.startChat({
   notesConfig,
   history: [
     {
       role: "user",
       parts: [
         {
           text: 'Generate a course learning material based on this course: Introduction to C++ (Easy), make detail for each chapter and topic, make sure to includes all topic, make sure to generate only in HTML (do not include HTMLKL, Head, Body, title tag), tidy up the HTML, \\nThe chapters :\n"chapter_number": 1,\n      "chapter_title": "Getting Started with C++",\n      "chapter_summary": "Introduction to C++, setting up the environment, and writing your first program.",\n      "icon": "🚀",\n      "topics": [\n        "What is C++?",\n        "Installing a C++ compiler",\n        "Setting up a development environment",\n        "Structure of a C++ program",\n        "Hello, World! program",\n        "Variables and data types",\n        "Input and output using cin and cout"\n      ]',
         },
       ],
     },
     {
       role: "model",
       parts: [
         {
           text: '```html\n<h1>Chapter 1: Getting Started with C++ 🚀</h1>\n\n<p><strong>Chapter Summary:</strong> Introduction to C++, setting up the environment, and writing your first program.</p>\n\n<h2>1.1 What is C++?</h2>\n<p>C++ is a powerful, general-purpose programming language. It is an extension of the C programming language and supports both procedural and object-oriented programming paradigms. C++ is known for its performance, flexibility, and control over system hardware.</p>\n\n\n<h2>1.2 Installing a C++ Compiler</h2>\n<p>A C++ compiler translates your C++ code into machine-readable instructions. Popular compilers include:</p>\n<ul>\n  <li>g++ (GNU Compiler Collection): Available on Linux, macOS, and Windows.</li>\n  <li>Clang:  A popular compiler known for helpful error messages.</li>\n  <li>Visual Studio: Microsoft\'s Integrated Development Environment (IDE) includes a C++ compiler.</li>\n  <li>Code::Blocks: An open-source, cross-platform IDE with a built-in compiler.</li>\n</ul>\n<p>Instructions for installing these compilers can be found on their respective websites.</p>\n\n\n<h2>1.3 Setting up a Development Environment</h2>\n<p>A development environment typically includes a text editor or IDE, a compiler, and a debugger. Popular IDEs include:</p>\n<ul>\n  <li>Visual Studio</li>\n  <li>Code::Blocks</li>\n  <li>Xcode (for macOS)</li>\n  <li>Eclipse CDT</li>\n</ul>\n<p>Using an IDE can simplify the compilation and debugging process.</p>\n\n\n<h2>1.4 Structure of a C++ Program</h2>\n<p>A basic C++ program has the following structure:</p>\n<pre><code>\n#include &lt;iostream&gt; // Include necessary header files\n\nusing namespace std; // Use the standard namespace\n\nint main() { // Main function - execution starts here\n  // Your code goes here\n  return 0; // Indicate successful execution\n}\n</code></pre>\n\n\n<h2>1.5 Hello, World! Program</h2>\n<p>The traditional first program:</p>\n<pre><code>\n#include &lt;iostream&gt;\n\nusing namespace std;\n\nint main() {\n  cout &lt;&lt; "Hello, World!" &lt;&lt; endl; // Output "Hello, World!" to the console\n  return 0;\n}\n</code></pre>\n\n\n<h2>1.6 Variables and Data Types</h2>\n<p>Variables store data. C++ has several built-in data types:</p>\n<ul>\n  <li><code>int</code>: Integer numbers (e.g., 10, -5, 0)</li>\n  <li><code>float</code>: Single-precision floating-point numbers (e.g., 3.14)</li>\n  <li><code>double</code>: Double-precision floating-point numbers (e.g., 2.71828)</li>\n  <li><code>char</code>: Single characters (e.g., \'a\', \'Z\', \'$\')</li>\n  <li><code>bool</code>: Boolean values (true or false)</li>\n  <li><code>string</code>: Text strings (e.g., "Hello")</li>\n</ul>\n<p>Example:</p>\n<pre><code>\nint age = 30;\nfloat price = 99.99;\nchar initial = \'J\';\nstring name = "John Doe";\n</code></pre>\n\n\n<h2>1.7 Input and Output using cin and cout</h2>\n<p><code>cin</code> is used for input, and <code>cout</code> is used for output:</p>\n<pre><code>\n#include &lt;iostream&gt;\n#include &lt;string&gt; // Include the string header for string variables\n\nusing namespace std;\n\nint main() {\n  string name;\n  cout &lt;&lt; "Enter your name: ";\n  cin &gt;&gt; name; // Read input from the user\n  cout &lt;&lt; "Hello, " &lt;&lt; name &lt;&lt; "!" &lt;&lt; endl; \n  return 0;\n}\n\n</code></pre>\n```',
         },
       ],
     },
     {
       role: "user",
       parts: [
         {
           text: 'Generate a course learning material based on this course: Python for Coding Preparation (Easy), make detail for each chapter and topic, make sure to includes all topic, make sure to generate only in HTML (do not include HTMLKL, Head, Body, title tag), tidy up the HTML, \\nThe chapters :\n"chapter_number": 1,\n      "chapter_title": "Python Fundamentals",\n      "chapter_summary": "Introduction to Python syntax, data types, operators, and input/output operations.",\n      "icon": "🐍",\n      "topics": [\n        "Variables and Data Types",\n        "Operators",\n        "Input and Output",\n        "Control Flow (if/else statements, loops)",\n        "Basic String Operations"\n      ]',
         },
       ],
     },
     {
       role: "model",
       parts: [
         {
           text: '```html\n<h1>Chapter 1: Python Fundamentals 🐍</h1>\n\n<p><strong>Chapter Summary:</strong> Introduction to Python syntax, data types, operators, and input/output operations.</p>\n\n<h2>1.1 Variables and Data Types</h2>\n<p>Variables store data. Python has dynamic typing, meaning you don\'t explicitly declare the data type.</p>\n<ul>\n  <li><code>int</code>: Integer numbers (e.g., 10, -5, 0)</li>\n  <li><code>float</code>: Floating-point numbers (e.g., 3.14, -2.5)</li>\n  <li><code>str</code>: Strings of text (e.g., "Hello", \'Python\')</li>\n  <li><code>bool</code>: Boolean values (<code>True</code> or <code>False</code>)</li>\n  <li><code>list</code>: Ordered, mutable sequences (e.g., [1, 2, "apple"])</li>\n  <li><code>tuple</code>: Ordered, immutable sequences (e.g., (1, 2, "apple"))</li>\n  <li><code>dict</code>: Key-value pairs (e.g., {"name": "Alice", "age": 30})</li>\n</ul>\n\n<pre><code class="language-python">\nname = "Alice"\nage = 30\nprices = [10.99, 5.50, 20]\n</code></pre>\n\n\n\n<h2>1.2 Operators</h2>\n<p>Operators perform actions on variables and values.</p>\n<ul>\n  <li>Arithmetic: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>//</code> (integer division), <code>%</code> (modulo), <code>**</code> (exponentiation)</li>\n  <li>Comparison: <code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code></li>\n  <li>Logical: <code>and</code>, <code>or</code>, <code>not</code></li>\n  <li>Assignment: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, etc.</li>\n</ul>\n\n<pre><code class="language-python">\nx = 10\ny = 5\nsum_result = x + y\nis_equal = x == y\n</code></pre>\n\n\n<h2>1.3 Input and Output</h2>\n<ul>\n  <li><code>input()</code>: Reads user input as a string.</li>\n  <li><code>print()</code>: Displays output to the console.</li>\n</ul>\n\n<pre><code class="language-python">\nname = input("Enter your name: ")\nprint("Hello, " + name + "!")\n\nage = int(input("Enter your age: ")) # Convert input to integer\nprint(f"You are {age} years old.") # f-strings for formatted output\n</code></pre>\n\n\n\n\n<h2>1.4 Control Flow (if/else statements, loops)</h2>\n<ul>\n  <li><code>if</code>, <code>elif</code>, <code>else</code>: Conditional execution of code blocks.</li>\n  <li><code>for</code>: Iterates over a sequence (e.g., list, string, range).</li>\n  <li><code>while</code>: Repeats a code block as long as a condition is true.</li>\n</ul>\n\n<pre><code class="language-python">\nif age &gt;= 18:\n    print("You are an adult.")\nelse:\n    print("You are a minor.")\n\n\nfor i in range(5):  # Loop from 0 to 4\n    print(i)\n\n\ncount = 0\nwhile count &lt; 3:\n    print("Count:", count)\n    count += 1\n</code></pre>\n\n\n\n<h2>1.5 Basic String Operations</h2>\n<ul>\n  <li>Concatenation: <code>+</code> (joins strings)</li>\n  <li>Slicing: <code>[start:end]</code> extracts a portion of a string.</li>\n  <li>Length: <code>len()</code> returns the length of a string.</li>\n  <li>Methods: Strings have built-in methods like <code>lower()</code>, <code>upper()</code>, <code>split()</code>, etc.</li>\n</ul>\n\n<pre><code class="language-python">\nmessage = "Hello, world!"\ngreeting = "Hi" + " there"\nsubstring = message[7:12]  # "world"\nlength = len(message)\nlowercase_message = message.lower()\n</code></pre>\n\n```\n',
         },
       ],
     },
   ],
 });

 export const generateStudyTypeContentAiModel = model.startChat({
   generationConfig,
   history: [
     {
       role: "user",
       parts: [
         {
           text: "Generate flashcards based on these chapter : Python Fundamentals, Data Structures and Algorithms,  Problem Solving. Course name Python for Coding Preparation (Easy) in JSON format only with front back content, maximum 15",
         },
       ],
     },
     {
       role: "model",
       parts: [
         {
           text: '```json\n[\n    {\n        "front": "What is a variable in Python?",\n        "back": "A named storage location that holds a value."\n    },\n    {\n        "front": "List three basic data types in Python.",\n        "back": "Integer (int), Float (float), String (str)"\n    },\n    {\n        "front": "What is an operator in Python? Give an example.",\n        "back": "Symbols that perform operations on values. Example: +, -, *, /"\n    },\n    {\n        "front": "What is a list in Python?",\n        "back": "An ordered, mutable collection of items."\n    },\n    {\n        "front": "What is a tuple in Python?",\n        "back": "An ordered, immutable collection of items."\n    },\n    {\n        "front": "What is a dictionary in Python?",\n        "back": "An unordered collection of key-value pairs."\n    },\n    {\n        "front": "What is the time complexity of searching in a sorted list?",\n        "back": "O(log n) using binary search."\n    },\n    {\n        "front": "What is the purpose of an algorithm?",\n        "back": "A step-by-step set of instructions to solve a problem."\n    },\n    {\n        "front": "Explain the concept of \'Big O\' notation.",\n        "back": "A way to describe the performance of an algorithm in terms of time or space complexity."\n    },\n    {\n        "front": "What are the steps in the problem-solving process?",\n        "back": "1. Understand the problem, 2. Devise a plan, 3. Implement the plan, 4. Test and debug, 5. Optimize."\n    },\n    {\n        "front": "What is a brute-force approach to problem-solving?",\n        "back": "Trying every possible solution until a correct one is found."\n    },\n    {\n        "front": "Explain the concept of recursion.",\n        "back": "A function calling itself within its definition."\n    },\n    {\n        "front": "What is debugging?",\n        "back": "The process of identifying and fixing errors in code."\n    },\n    {\n        "front": "Describe the importance of code comments.",\n        "back": "They improve code readability and explain the logic behind the code."\n    },\n    {\n        "front": "What is pseudocode?",\n        "back": "An informal description of an algorithm, not tied to a specific programming language."\n    }\n]\n```',
         },
       ],
     },
   ],
 });

 export const generateQuiz = model.startChat({
   generationConfig,
   history: [
     {
       role: "user",
       parts: [
         {
           text: "Generate Quiz on topic : Introduction to Atoms with Question and Options along with correct answer in JSON format, maximum 10",
         },
       ],
     },
     {
       role: "model",
       parts: [
         {
           text: '```json\n[\n    {\n        "question": "What is the smallest particle of an element that retains its chemical properties?",\n        "options": ["Molecule", "Atom", "Neutron", "Electron"],\n        "answer": "Atom"\n    },\n    {\n        "question": "Which subatomic particle has a positive charge?",\n        "options": ["Proton", "Neutron", "Electron", "Quark"],\n        "answer": "Proton"\n    },\n    {\n        "question": "Which subatomic particle has a negative charge?",\n        "options": ["Proton", "Neutron", "Electron",  "Quark"],\n        "answer": "Electron"\n    },\n    {\n        "question": "Which subatomic particle has no charge (neutral)?",\n        "options": ["Proton", "Neutron", "Electron", "Ion"],\n        "answer": "Neutron"\n    },\n    {\n        "question": "Where are protons and neutrons located in an atom?",\n        "options": ["Nucleus", "Electron Cloud", "Orbitals", "Valence Shell"],\n        "answer": "Nucleus"\n    },\n    {\n        "question": "Where are electrons located in an atom?",\n        "options": ["Nucleus", "Electron Cloud", "Proton Shell", "Neutron Shell"],\n        "answer": "Electron Cloud"\n    },\n    {\n        "question": "The atomic number of an element represents the number of which subatomic particle?",\n        "options": ["Protons", "Neutrons", "Electrons", "Quarks"],\n        "answer": "Protons"\n    },\n    {\n        "question": "What is the approximate mass of a proton and a neutron?",\n        "options": ["1 amu", "0 amu",  "1/1836 amu", "Negligible"],\n        "answer": "1 amu"\n    },\n    {\n        "question": "Atoms of the same element with different numbers of neutrons are called:",\n        "options": ["Ions", "Isotopes", "Molecules", "Compounds"],\n        "answer": "Isotopes"\n    },\n    {\n        "question": "The mass number of an atom is the sum of which two subatomic particles?",\n        "options": ["Protons and Electrons", "Neutrons and Electrons", "Protons and Neutrons", "Protons and Quarks"],\n        "answer": "Protons and Neutrons"\n    }\n]\n```',
         },
       ],
     },
   ],
 });
