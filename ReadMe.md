FUNDAMENTALS 1.Node.js – Basics 2.Main Features of Node.js 3.Project setup & Modules 4.Top built in modules
1. Node.js Basics
Q1. What is Node.js?
Node is neither a language nor a framework.Node/ Node.js is a runtime environment for executing JavaScript code on the server side.
Q2. How Node is a runtime environment on server side? What is V8?
Browsers execute JavaScript on the client side, and similarly, Node.js executes JavaScript on the server side.V8 is a JavaScript engine for the JavaScript language.
Q3. What is the difference between Runtime environment & Framework?
Runtime Environment: Primarily focuses on providing the necessary infrastructure for code execution, including services like memory management and I/O operations.
Framework: Primarily focuses on simplifying the development process by offering a structured set of tools, libraries, and best practices. 
Q4. What is the difference between Node.js & Express.js?
Node.js is a runtime environment that allows the execution of JavaScript code server-side.Express.js is a framework built on the top Node.js.It is designed to simplify the process of building web applications and APIs by providing a set of features like simple routing system, middleware support etc.
Q5. What are the differences between Client-Side(Browser) & Server-Side(Node.js)?
Client-Side (Browser): Runs on the user's web browser.Uses HTML, CSS, and JavaScript.Has access to Document, Window, Navigator, and Event objects.Does not have access to Request, Response, Server, or Database objects.Handles UI display, interactions, and client-side logic.
Server-Side (Node.js/Server):Runs on the server.Primarily uses JavaScript.Does not have access to Document, Window, Navigator, and Event objects.Has access to Request, Response, Server, and Database objects.Handles business logic, data storage/access, authentication, authorization, etc.
2.Main Features of Node.js
Q. What are the 7 Main Features of Node.js?
Single threaded : uses a single thread to handle multiple requests concurrently, optimizing performance for I/O-heavy operations.
Asynchronous : supports asynchronous programming, allowing non-blocking operations. This means tasks can be initiated and continue running in the background, freeing up the main thread to handle other tasks, enhancing scalability and performance.
Single Threaded: Uses a single thread to handle multiple requests concurrently.
Asynchronous: Supports non-blocking operations for enhanced scalability.
Event-Driven: Operates based on events, efficiently handling concurrent connections.
V8 JavaScript Engine: Compiles JavaScript into fast, machine-executable code.
Cross-Platform: Runs on various operating systems (Windows, macOS, Linux).
NPM: Provides a vast ecosystem of open-source libraries and packages.
Real-Time Capabilities: Ideal for real-time applications like chat and online gaming.
Q. What is Single Threaded Programming?
Thread is smallest unit of execution within the process. Threads allow a process to perform multiple tasks concurrently by dividing work into smaller.
Single-threaded programming means that a program uses only one thread to execute tasks.
Node js is single threaded because it uses asynchronous apprach.The event loop which is core of  

client > request > client-side server > API > 


To find thread : 
In windows : Task Manager > CPU > Performance tab > check for logical processors
In linux : lscpu > Threads
Hyper-threading (HT) is a technology developed by Intel that allows a single physical CPU core to execute multiple threads simultaneously.
Q. What is Synchronous Programming?
In a synchronous program, each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.
Synchronous programming focuses on the order of execution in a sequential manner, while single-threaded programming focuses on the single thread.
Q. What is Multi Threaded Programming?
In a multi-threaded application, multiple threads can execute multiple tasks simultaneously and parallelly.As soon as one thread starts a task, the next task is immediately initiated by creating a second thread.
Q. What is Asynchronous Programming?
Q. What is the difference between Synchronous & Asynchronous programming?
Q. What are Events, Event Emitter, Event Queue, Event Loop & Event Driven?
Q. What are the main features & advantages of Node.js?
Q. What are the disadvantages of node?

3.Project Setup & Modules
Q. How to setup node.js project?
Q. What is NPM? What is the role of node_modules folder?
Q. What is the role of package.json file in Node?
Q. What are Modules in Node?
Q. How many ways are there to Export a module?
Q. What will happen if you don’t export the module?
Q. How to import single and multiple functions from a module?
Q. What is module wrapper function?
Q. What are the Types of modules in Node?

4.Top built in modules
Q. What are the Top 5 built in modules commonly used in node projects?
Q. Explain the role of fs module? Name some functions of it?
Q. Explain the role of path module? Name some functions of it?
Q. Explain the role of OS module? Name some functions of it?
Q. Explain the role of events module? How to handle events in Node?
Q. What are Event Arguments?
Q. What is the difference between a function and an event?
Q. What is the role of http module in node?
Q. What is the role createServer() method of http module?

EXPRESS 
5. Express - Basics
Q. What are the advantages of using Express.js with Node.js?
Q. How do you install Express.js in a Node.js project?
Q. How to create an HTTP Sever using Express.js?
Q. How do you create and start Express.js application?

6. Express - Middleware
Q. What is Middleware in Express.js and when to use them?
Q. How do you implement middleware in Express.js?
Q. What is the purpose of the app.use() function in Express.js?
Q. What is the purpose of the next parameter in Express.js?
Q. How to use middleware globally for a specific route?
Q. What is Request Pipeline in Express?

7. Express - Types of Middleware's
Q. What are the type of middleware's in Express.js?
Q. What is the difference btw application-level & route-level middleware?
Q. What is error handling middleware and how to implement it?
Q. If you have 5 middlewares then in which middleware you will do the error handling?
Q. What is built in middleware? How to serve static files from Express.js?
Q. What are third-party middleware's? Give some examples?
Q. Can you summarize all the type of middleware's?
Q. What are the advantages of using middleware in Express.js?

8. Express - Routing - I
Q. What is Routing in Express.js?
Q. What is the difference between middleware & routing in Express?
Q. How to implement routing? How do you define routes in Express.js?
Q. How to handle Routing in Express.js real applications?
Q. What are Route Handlers?
Q. What are Route Parameters in Express.js?

9. Express - Routing - II
Q. What are Router object & Router Methods and how to implement them?
Q. What are the types of Router Methods?
Q. What is the difference between app.get() and router.get() method?
Q. What is express.Router() in Express.js?
Q. Share a real application use of Routing?
Q. What is Route Chaining in Express.js?
Q. What is Route Nesting in Express.js?
Q. How to implement route nesting in Express.js?

10. Express - Template Engines
Q. What are Template Engines in Express.js?
Q. Name some Template Engines libraries?
Q. How to implement EJS templating engine in a Express.js application?

REST API
11. REST API - Basics
Q. What is REST & RESTful API?
Q. What are HTTP Request and Response structures in UI and REST API?
Q. What are Top 5 REST guidelines and the advantages of them?
Q. What is the difference between REST API and SOAP API?

12. REST API - HTTP Methods & Status Codes
Q. What are HTTP Verbs and HTTP methods?
Q. What are GET, POST, PUT & DELETE HTTP methods?
Q. What is the difference between PUT & PATCH methods?
Q. Explain the concept of Idempotence in RESTful APIs.
Q. What are the role of status codes in RESTful APIs?

13. REST API - CORS, Serialization, Deserialization, Others
Q. What is CORS in RESTful APIs?
Q. How to remove CORS restrictions RESTful APIs?
Q. What are Serialization & Deserialization?
Q. What are the types of serialization?
Q. How to Serialize & Deserialize in Node.js?
Q. Explain the concept of versioning in RESTful APIs.
Q. What is an API document? What are the popular documentation formats?
Q. What is the typical structure of a REST API project in Node?

14. REST API - Authentication & Authorization
Q. What are Authentication and Authorization?
Q. What are the types of authentication in Node.js?
Q. What is Basic Authentication?
Q. What are the security risks associated with storing passwords in plain text in Node.js?
Q. What is the role of Hashing and Salt in securing passwords?
Q. How can we securely hash passwords in Node.js?
Q. What is API Key Authentication?
Q. What is Token based and JWT authentication?
Q. What are the parts of JWT token?
Q. Where JWT token reside in the request?

NODE-OTHERS
15. Error Handling & Debugging
Q. What is Error Handling? In how many ways you can do error handling in Node.js?
Q. How to handle errors in synchronous operations using try-catch-finally?
Q. What is Error-First Callbacks?
Q. How to handle errors using Promises?
Q. How to handle errors while using async-await?
Q. How can you Debug Node.js applications?

16. Security, Performance & Deployment
Q. What is XSS (Cross-Site Scripting) attack?
Q. How to prevent XSS attacks? What is sanitize-html module?
Q. What is SQL Injection attack?
Q. How do you prevent SQL injection attacks in Node?
Q. How can you improve the performance of a Node.js application?
Q. How can you Deploy a Node.js application?

17. Testing & Web Socket
Q. What is Testing? What are the types of testing?
Q. What are testing frameworks?
Q. How to create unit tests using Jest framework?
Q. How to write code for Unit Testing? Explain AAA?
Q. What is Test-Driven Development (TDD)?
Q. What is WebSocket? How to create a real-time chat application using Node?

MONGO DB
18. MongoDB - Basics
Q. What is MongoDB?
Q. What is NoSQL?
Q. What is the difference between NoSQL & RDBMS?
Q. When to use RDBMS and when to use NoSQL DB in your applications?
Q. What are Documents and Collections in NoSQL?
Q. What are the advantages of NoSQL over RDBMS/SQL databases?
Q. What are the dis-advantages of NoSQL as comparison to RDBMS databases?

19. MongoDB - Setup & CRUD operations in Node.js
Q. What is the difference between MongoDB Server and MongoDB Database?
Q. How to install and run MongoDB server? What is MongoDB compass?
Q. How to create database and a collection in MongoDB server?
Q. What are CRUD operations in MongoDB?
Q. How to Connect to MongoDB server from Node.js application?
Q. How to create/ insert a record in MongoDB via Node.js?
Q. How to read/ select a record in MongoDB via Node.js?
Q. How to update a record in MongoDB via Node.js?
Q. How to delete a record in MongoDB via Node.js?
Q. How to insert, select, update & delete multiple records in MongoDB via Node.js?

20. MongoDB - Query Operators & Projection
Q. What are Query Operators in MongoDB?
Q. Compare Query Operators in SQL & MongoDB?
Q. How to implement comparison operators?
Q. What are in, nin, exists, and, or, regex, not query operators in MongoDB?
Q. What is projection in MongoDB? How to implement it?
Q. How to remove _id field from result in MongoDB?
Q. How do you perform sorting in ascending & descending order in MongoDB?

21. MongoDB - Indexes
Q. What are Indexes in MongoDB? How indexing make data retrieval faster?
Q. What are indexes? How indexing make data retrieval faster?
Q. How to create indexes in MongoDB?
Q. On which filed you will create an index - projection field or filter field?
Q. What happens if I create an index on all fields of the collection?
Q. What is the difference between Single Field Indexes & Compound Indexes?

22. MongoDB - Mongoose
Q. What is Mongoose? What are the advantages of using it?
Q. How to install Mongoose in Node.js?
Q. What is the role of Schema in Mongoose? How to define it?
Q. How to perform database operation using Mongoose with Node.js?
Q. How Mongoose will do data validation for Node applications?
Q. How to perform CRUD operations using Mongoose in Node.js application?
Q. How to define relationships between collections using Mongoose?
Q. How to create a Mongoose model from a schema?
Q. How Mongoose provide middleware support? What are Pre & Post Hooks?

23. Application based questions
Q. How you would organize your Node.js project for building a RESTful API? What modules or frameworks would you use for routing and handling requests?
Q. Describe the steps you would take to implement user authentication in a Node.js application. What strategies or libraries would you consider for secure authentication?
Q. Describe the steps you would follow to deploy a Node.js application to a production environment? How would you manage dependencies, environment variables, and monitor the application in production?
Q. Your Node.js application needs to interact with a MongoDB database. How would you handle database
transactions and ensure data integrity?
Q. How to secure your Node.js application. What security measures would you implement?

24. Scenario based short questions
Q. How to perform file operations in Node.js?
Q. How you will handle HTTP requests and responses in a Node.js application?
Q. How you will handle processing large amounts of file data efficiently?
Q. How to execute a task after a certain delay in a Node.js application?
Q. How to implement centralized error handling and logging in an Express.js application.
Q. How to optimize the performance of database queries in a Node.js application?
Q. How to handle form submissions and POST Requests in an Express.js application?
Q. How to connect to a MongoDB database in a Node.js application?
Q. How to perform CRUD operations on a MongoDB collection in a Node.js application?

25: JavaScript Essentials for React
Q. What are variables? What is the difference between var, let, and const ?
Q. What are the types of conditions statements in JS?
Q. What is Error Handling in JS?
Q. What is the difference between Spread and Rest operator in JS?
Q. What are Arrays in JS? How to get, add & remove elements from arrays?
Q. What is Array Destructuring in JS?
Q. What are Functions in JS? What are the types of function?
Q. What is the difference between named and anonymous functions? When to use what in applications?
Q. What is function expression in JS?
Q. What are Arrow Functions in JS? What is it use?
Q. What are Callback Functions? What is it use?
Q. What is Higher-order function In JS?
Q. What are Pure and Impure functions in JS?
Q. What are template literals and string interpolation in strings?
Q. What are Objects in JS?
Q. What is the difference between an array and an object?
Q. How do you add or modify or delete properties of an object?
Q. What are Classes in JS?
Q. What is a constructor?
Q. What is the use of this keyword?
Q. What are the techniques for achieving asynchronous operations in JS?
Q. What is setTimeout()? How is it used to handle asynchronous operations?
Q. What is setInterval()? How is it used to handle asynchronous operations?
Q. What are Promises in JavaScript?
Q. How to implement Promises in JavaScript?
Q. When to use Promises in real applications?
Q. What is the purpose of async/ await? Compare it with Promises?
Q. Explain the use of async and await keywords in JS?
Q. Can we use async keyword without await keyword and vice versa?
Q. How do you handle errors in async/ await functions?
