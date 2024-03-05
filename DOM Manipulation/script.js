// DOM manipulation Document Object Model

// Note :=> document is the object

// 1. getElementByID
// const heading = document.getElementById("heading");
// console.log(heading);

// 2. getElementsByTagName
// const heading = document.getElementsByTagName("h1");
// console.log(heading, heading[0], heading[1]);

// 3. getElementsByClassName
// const heading = document.getElementsByClassName("heading")
// console.log(heading, heading[0], heading[1]);

// 4. querySelector (write like css(# for id and . for class))
// const heading = document.querySelector("#heading");
// const heading1 = document.querySelector(".heading");
// console.log(heading, heading1);

// 5. querySelectorAll
// const heading = document.querySelectorAll(".heading")
// console.log(heading);




// Traverse DOM
// 1. parentNode
// const node = document.querySelector(".heading")
// const parent = node.parentNode;
// console.log(parent);

// 2. childNodes
// const node = document.querySelector(".parent")
// const children = node.childNodes;
// console.log(children);

// 3. nextElementSibling
// const node = document.querySelector(".heading")
// const nextSibling = node.nextElementSibling
// console.log(nextSibling);

// 4. previousElementSibling
// const node = document.querySelector(".heading1")
// const prevSibling = node.previousElementSibling
// console.log(prevSibling);




// Manipulation

// 1.Basics :-  manipulating text,css,adding and removing class
// const heading = document.querySelector(".heading")
// heading.innerHTML = "Web Dev is Awesome!"
// heading.style.color = "purple"
// heading.style.fontSize = "50px"
// heading.classList.add("heading2")
// heading.classList.remove("heading")

// 2. Advance :- 