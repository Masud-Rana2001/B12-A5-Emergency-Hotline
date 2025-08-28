# Emergency Service Directory

A simple web appication that provides quick access to emergency service hotlines in Bangladesh . User can view, copy ,and call emergency numbers, as well as track their call and copy history.

---

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?
-**getElementByID**:
Returns the first element with the specified `id` . Returns a single element or `null` if not found any things.
```js
const element =  document.getElementByID("id");
```

-**getElementsByClassName**:
Returns a live HTMLcollecton of all elements with the specified class name . You have to use indexing or loop to access elements .
```js
const elements =  document.getElementsByClassName("className");
```
-**querySelector**:
Returns the first element that matches a cdd selector .Return a single value or `null` .
```js
const element =  document.querySelector(".className");
```

-**querySelectorAll**:
Returns a static Nodelist of all elements matching a css selector . You can use `forEach` method to through them.
```js
const elements =  document.querySelectorAll(".className");
```
---

## 2.How do you create and insert a new element into the DOM?

1. **Create the elements:**
```js
const myDiv = document.createElement("div");
```
2. **Set its properties or content:**
```js
dmyDiviv.textContent = "Hello everyone!!";
myDiv.className = 'greeting';
```
2. **Insert it into the Dom:**
```js
document.body.appendChild(myDiv);
```
---

## 3. What is Event Bubbling and how does it work?
**Event Bubbling** is the process where an event starts from the deepest element and the bubbles up to its ancestors in the DOM tree. 

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- **Event Delegation** is a technique where you attach a single event listener to a parent element instead of multiple listeners to individual child elements.
The parent listens for events that bubble up from its children , and you use logic to determine which child triggered the event.
---

## 5. What is the difference between preventDefault() and stopPropagation() methods?
- **preventDefault()**:
Prevents the default action associted with the event.

- **stopPropagation**:
Stops the event from bubbling up the Dom tree, si parent elements do not receive the event.
---