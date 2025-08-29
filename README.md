#
---

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

**Answer:**

1. `getElementById` selects only a single element that matches a specific id. It is very fast and returns just one element.
2. `getElementsByClassName` can select multiple elements that match a given class, but it returns a **live HTMLCollection**, meaning it automatically updates if the DOM changes.
3. `querySelector` returns the **first element** that matches a CSS selector.
4. `querySelectorAll` returns all matching elements as a **static NodeList**, which does not update automatically when the DOM changes.

---

## 2. How to create and insert a new element into the DOM

**Answer:**  
To create and insert a new element into the DOM:

1. Use `document.createElement()` to make the element.
2. Set its content, attributes, or classes using `innerText`, `innerHTML`, or `classList`.
3. Insert it into the DOM using methods like `appendChild()` to add at the end of a parent element, or `insertBefore()` to place it before a specific child element.

---

## 3. Event Bubbling

**Answer:**  
Event Bubbling is a process in JavaScript where an event triggered on a **child element** first runs on that element and then bubbles up to its parent, grandparent, and so on, all the way up to the `document`.

By default, most events bubble, which means if you click a button inside a div, the button’s event runs first, and then the div’s event runs afterward. This allows parent elements to respond to events happening on their children.

---

## 4. Event Delegation

**Answer:**  
Event Delegation in JavaScript is a technique where instead of adding event listeners to multiple child elements, you add a **single event listener to the parent element**.

The parent then uses the event’s `target` property to determine which child triggered the event.

**Benefits:**

- Reduces memory usage
- Makes code cleaner
- Handles dynamically added elements that weren’t in the DOM when the page loaded

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

**Answer:**

- `preventDefault()` → stops the browser’s default action.
- `stopPropagation()` → stops the event from moving up the DOM.

---

**End**
