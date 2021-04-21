# Landing Page Project

This is a multi-section landing page project for the second rubric of udacity's front end web developer nanodegree program.

This project aims to give you real-world scenarios of manipulating the DOM. The functionality that is used serves two purposes: to prepare for appending dynamically added data to the DOM and to show how javascript can improve the usability of an otherwise static site.
This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Contents**

1- Navigation bar:
-----------
It is fixed and dynamically, as we can create a navigation elements/items based on the sections of the page by javascript. In addition, when scroll, it's background changes from none to black.


2- Navigation menu:
-----------
This is for the responsive view for tablets and mobiles and as the same as the navigation bar, in addition to open and close functions to it.


3- Header
-----------
It is added for some pretty design to the page.


4- Sections:
-----------
We have in this project 5 sections, each with a title & a little icon and a content for it.


5- Footer:
-----------
This project has a pretty designed footer which has a copyrights reserved text and social contact icons.


6- Back to top button:
-----------
It is added to scroll back smoothly to the top of the page and only visible when the user scrolls below the fold of the page.


7- Font awesome:
-----------
This is for the icons used.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Some Notes**

- To make an active state to the navigation elements/items when a section is in the viewport, I have used the Intersection Observer API (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), as it provides a way to asynchronously observe changes in the intersection of a target element/item with an ancestor element or with a top-level document's viewport.

- To scroll smoothly either when click in a navigation element/item to scroll to the appropriate section or when click on the back to top button, I have made the scroll behavior for the whole html by CSS.

- The navigation bar and menu have a functionality which make them hidden when scrolling the page or while not scrolling, but be present on page load. I made this code in a hash comment in order to see the active state effect, but you can uncomment the code to see the changes.

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Technologies Used**

- HTML
- CSS
- JavaScript
- Bootstrap

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Architecture**

assets
  - fontawesome
      - css
         - all.min.css
         - fontawesome.min.css
      - webfonts

css
  - images
  - bootstrap.min.css
  - style.css

images

js
  - app.js

index.html

README.md

ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

**Result**

- The Codes:
-----------
https://github.com/yewess97/Landing_Page_Project_Udacity


- The Landing Page
-----------
https://yewess97.github.io/Landing_Page_Project_Udacity/
