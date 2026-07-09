// # JavaScript DOM Practice Questions (Before Learning Events)

// ## Level 1 – Basic DOM + Click

// ### 1. Change Heading
// - Create an `<h1>` with text "Hello".
// - Add a button.
// - On button click, change the heading to "Welcome Yuvraj".

// ---

// ### 2. Change Paragraph Color
// - Create a paragraph.
// - Add a button.
// - On click, change the paragraph color to blue.

// ---

// ### 3. Increase Font Size
// - Create a paragraph.
// - Add a button.
// - Every click should increase the font size by 2px.

// ---

// ### 4. Hide / Show Paragraph
// - Create a paragraph.
// - Add one button.
// - Clicking the button should hide the paragraph.
// - Clicking again should show it.

// ---

// ### 5. Change Image
// - Display an image.
// - Add a button.
// - On click, switch between two different images.

// ---

// ## Level 2 – DOM Manipulation

// ### 6. Counter
// - Display a number starting from 0.
// - Buttons:
//   - Increment (+)
//   - Decrement (-)
//   - Reset

// ---

// ### 7. Background Color Changer
// - Create four buttons:
//   - Red
//   - Green
//   - Blue
//   - White
// - Clicking a button changes the page background.

// ---

// ### 8. Emoji Switch
// - Display one emoji.
// - Button changes:
//   😊 → 😎 → 🥳 → 🤖 → 😊

// ---

// ### 9. Quote Changer
// - Store 5 quotes in an array.
// - Every click displays the next quote.
// - After the last quote, start again from the first.

// ---

// ### 10. Box Color Toggle
// - Create a square div.
// - Button toggles:
//   White ↔ Black

// ---

// ## Level 3 – Creating Elements

// ### 11. Add Paragraph
// - Button: "Add Paragraph"
// - Every click creates:
//   Hello World

// ---

// ### 12. Remove Last Paragraph
// - Button removes the last paragraph added.

// ---

// ### 13. Create 10 Boxes
// - Button creates 10 square boxes dynamically using JavaScript.

// ---

// ### 14. Dynamic List
// - Button: "Add Item"
// - Every click adds:
//   Item 1
//   Item 2
//   Item 3
//   ...

// ---

// ### 15. Remove Last List Item
// - Remove the last list item whenever the button is clicked.

// ---

// ## Level 4 – Attributes

// ### 16. Increase Image Width
// - Button increases image width by 20px every click.

// ---

// ### 17. Change Link
// - Create a link to Google.
// - Button changes it to GitHub.

// ---

// ### 18. Display Image Source
// - Print the image's `src` in the console using `getAttribute()`.

// ---

// ### 19. Enable / Disable Input
// - Button toggles the disabled state of an input field.

// ---

// ## Level 5 – classList

// ### 20. Highlight Box
// - Button toggles a yellow background using `classList.toggle()`.

// ---

// ### 21. Active Navigation
// - Create:
//   - Home
//   - About
//   - Contact
// - Clicking one item makes only that item active.

// ---

// ## Challenge

// ### 22. Student Card Generator
// Inputs:
// - Name
// - Age
// - Course

// Button:
// - Create Card

// Output Example:

// -------------------------
// Yuvraj Singh

// Age: 20

// Course: CSE
// -------------------------



// Create the entire card using JavaScript.



// ---

// ## Concepts to Practice

// - getElementById()
// - getElementsByClassName()
// - querySelector()
// - querySelectorAll()
// - innerText
// - textContent
// - innerHTML
// - createElement()
// - appendChild()
// - removeChild()
// - prepend()
// - setAttribute()
// - getAttribute()
// - removeAttribute()
// - style
// - classList.add()
// - classList.remove()
// - classList.toggle()
// - onclick
// - addEventListener("click")


// ### 1. Change Heading
// - Create an `<h1>` with text "Hello".
// - Add a button.
// - On button click, change the heading to "Welcome Yuvraj".

let h1= document.querySelector("h1")


let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    h1.textContent = "Welcome Yuvraj"
})



//---------Another way by creating something in js entirely


let h2 = document.createElement("h2")
h2.textContent = "just change me "
document.querySelector("body").prepend(h2)

let bttn = document.createElement("button")
// console.log(bttn)
bttn.textContent ="magic button"
document.querySelector("body").prepend(bttn)

bttn.addEventListener("click" , function(){
    h2.textContent = "i am changed now"
})

