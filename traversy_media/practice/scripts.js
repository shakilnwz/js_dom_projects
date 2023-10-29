
let body = document.querySelector('body')

body.style.maxWidth = '968px'
body.style.margin = '0 auto'
body.style.fontFamily = 'sans-serif'
for (let i = 0; i < body.children.length; i++) {
    body.children[i].style.padding = '5px'
}

/** all HTML elements are defined as object 
 * so we can access their properties and methods
 * and we can also change or update their property values just like a javascript object*/

/**SELECTORS */
//these are the most popular and most used selectors (method)
//DOM also have other selectors

//document.getElementById (method) gets any element by their id name in html

let main = document.getElementById('main')

//so lets create a function for easily getting element by their id
function elemById(id) {
    return document.getElementById(id)
}

//document.getElementsByClassName (method) gets all the elements by their class name in html 
//normally we get an html element collection and if we want to change any ones property we have to do by using their index like following
let items = document.getElementsByClassName('testlist')
//console.log(items)
items[0].style.fontSize = '2rem'


//to change all of their properties in that particular class we can to this using a for loop
// here item is not an array, its an html collection so for in, for of , or forEach or any other array method wont work
for (let i = 0; i < items.length; i++) {
    items[i].style.fontSize = '1.5rem'
    items[i].style.color = 'blue'
}


//document.getElementByTagName (method) gets all the elements by their Tag name in html
//same porperty accessing method like class applies here because it also returns htmlcollections

let pg = document.getElementsByTagName('p')
pg[1].style.fontFamily = 'sans-serif'
for (let i = 0; i < pg.length; i++) {
    pg[i].style.fontSize = '2rem'
}

//document.querySelector (method) gets only one element by anything (tag, class, id) in html(gets first element if multiple element available)
//we just select by typing . for class, # for id and name for tag, just like item selection in CSS
let pgQuery = document.querySelector('p') //selects first paragraph in the html
pgQuery.style.backgroundColor = 'lightblue'
let classQ = document.querySelector('.testlist') //selects first item in class named testlist


classQ.style.backgroundColor = 'yellow'
let idQ = document.querySelector('#elem2') //selects item with id elem2
idQ.style.backgroundColor = 'lightblue'
//we can also access attributes just like css
//lets select paragraph with id elem2
let pWithId = document.querySelector('p[id="elem2"]') //selects paragraph with id elem2, can be used to select using other attributes also
pWithId.style.color = 'black'

//we can also select using nth child, first child, last child just like css psudo selectors
//let p5 = document.querySelector('p:nth-child(5)') //selects 5th paragraph
//p5.style.color = 'black'

let liLast = document.querySelector('li:last-child') //selects last list item
liLast.style.backgroundColor = 'red'

//document.querySelectorAll (method) gets all elements by anything (tag, class, id) in html(stores in NodeList, which can use some array methods)

let pgqueryAll = document.querySelectorAll('p')
pgqueryAll.forEach(elem => {
    elem.style.border = '1px solid lightgray'
    elem.style.borderRadius = '10px'
})

//lets select all odd elements in the class testlist
let oddLi = document.querySelectorAll('.testlist:nth-child(odd)') //nth-child(odd) is a css psudo selector for odd nums
oddLi.forEach(elem => {
    elem.style.backgroundColor = 'lightgray'
    elem.style.borderBottom = '2px solid gray'
    elem.style.borderRadius = '10px'
})
//and all even elements
let evenLi = document.querySelectorAll('.testlist:nth-child(even)') //nth-child(even) is a css psudo selector for even nums
evenLi.forEach(element => {
    element.style.color = 'black'

});
//lets change the font family
let testList = document.querySelectorAll('.testlist')
testList.forEach(elem => elem.style.padding = '5px 10px')


/**PROPERTIES */

/** innerHTML (property) sets the html of an item
 * we can also pass html tags inside it and it will parse that to individual html element
*/
main.innerHTML = '<ul id="ul1"> <li>my List item</li></ul>'
//innerHTML can also get any preset content of any html element like below
let elem1 = elemById('elem1')

//the console will print what content was in the html document
//console.log(elem1.innerHTML)
//we can also get element that was set via js
let ul1 = elemById('ul1')
ul1.innerHTML = '<li>my list item updated</li>'


/**other properties
 * innerText (only gets text which are visible to the browser)
 * textContent (gets all the textcontent regardless of visibility)
 */


//so if we do this with innertext then it will not add a list item beacuse its pushed as text, not an html element, same applies for textcontent
ul1.innerText = '<li>some text</li>'
ul1.textContent = '<li>some text 33</li>'
ul1.innerHTML = '<li>my list item updated again</li>'



/**STYLE PROPERTY */
//we can style any element just like css
ul1.style.borderBottom = 'solid 1px grey'

//treversing the dom
let itemList = document.querySelector('#items')


//parentNode - gives parent node of element

//console.log(itemList.parentNode)

//we can also use above case as selector
itemList.parentNode.style.backgroundColor = 'lightblue' //the whole divs color changes because its the parent

//we can also chain parentNode to access their parent
//console.log(itemList.parentNode.parentNode) //gives body because the div is inside the body

//parentElement almost same as parentNode
//console.log(itemList.parentElement) //gives same as parentNode

//Accessing children
//childNodes - gives children
//console.log(itemList.childNodes) //gives all children including whitespaces like line break between two html elements as nodelist (whitespace are represented as text)

//children
//console.log(itemList.children) //gives all children except whitespace as HTML collection

//we can also access specific of children using index
//console.log(itemList.children[1]) //gives 2nd children

itemList.children[1].style.backgroundColor = 'yellow'

//firstChild
//console.log(itemList.firstChild) //gives the first child (calculates whitespace included) means if there is any whitespace will return whitespace as textnode

//firstElementChild
//console.log(itemList.firstElementChild)//gives first child, ignores whitespace
itemList.firstElementChild.innerText = 'hello 1'

//lastChild
//console.log(itemList.lastChild)//gives last child, behaves same as first child

//lastElementChild
//console.log(itemList.lastElementChild) //gives last child same as first element child
itemList.lastElementChild.innerText = 'hello last'

//siblings
//nextSibling
//console.log(itemList.nextSibling)//gives next sibling including whitespace, if there is any whitespace then will return that as text
//nextElementSiblings
//console.log(itemList.nextElementSibling) //gives next element sibling, (excludes whitespace, we get a p in this case)
itemList.nextElementSibling.innerText = 'replaced with some random text' //we can also change its properties

//previousSibling
//console.log(itemList.previousSibling) //same as next siblings except gives previous one
//previousElementSibling
//console.log(itemList.previousElementSibling) //same as nextElementSiblings except gives previous one
itemList.previousElementSibling.innerHTML = '<h4>Items</h4>'
itemList.previousElementSibling.style.margin = '2px'


//creating element inside js and using them
//createElement (method)


//create a div
let newDiv = document.createElement('div')

//add class
newDiv.className = 'new'

//add id
newDiv.id = 'new-id'

//add attr (method) goes like (attr name, attribute)
newDiv.setAttribute('title', 'hello div') //we can add any attribute by using this method


//create text node - creates a text node which we can add to any element inside the html
let newDivText = document.createTextNode('hello world')

//to add the texnode to previously created empty div we can use appendChild
newDiv.appendChild(newDivText) //now we have created a div inside js and added some text to it, so the new div is created but not yet inserted to the dom
//console.log(newDiv)
//to insert that to dom we need to specify where we want to put that

//we will put that inside our header so lets grab that

let header = document.querySelector('header')
//we also need before what we want to insert that
let hTitle = document.querySelector('header .title') //so inside the query selector we grab the class title inside the header, just like css
//insertBefore (takes 2 args, what to insert, where to insert)
header.insertBefore(newDiv, hTitle) //now we have successfully inserted newDiv inside the header before the title

newDiv.style.fontSize = '30px' //now we can treat this as regualar div element

//console.log(header)



// EVENTS
//old way of adding events (where we make the function and add to specific event in the html attribute)
function buttonClick() {
    console.log('button clicked')

}
//new way of doing that inside the script file

//addEventListener (click)
let button = document.querySelector('#button')//getting the button
//button.addEventListener('click', buttonClick) //the addeventlistner takes two parameter, the event to listen and the function to run
//we can also pass the event inside the function
//let buttonC = (event) => console.log(event)
//button.addEventListener('click', buttonC) //will return the event object with lot of information about the event. we can also use those object values inside the function for different use case
//examples
//button.addEventListener('click', (event) => console.log(event.target)) //will log the actual element on which the event was performed, (inthis case the button element)
/**
 button.addEventListener('click', (event) => {
    console.log(event.target.id)//returns the id of the button
    console.log(event.target.className) //returns class ina single string
    console.log(event.target.classList) //returns classlist in a object

    //instead of console.logging we can also output this inside the document
    console.log(event.type)//returns element type
    console.log(event.clientX, event.clientY) // returns mouse position while clicked from the active window
    console.log(event.offsetX, event.offsetY) //returns mouse position from the elements starting point when clicked
    console.log(event.altKey, event.ctrlKey, event.shiftKey) //returns true if any of those keys were press hold during mouseevent
})
*/

// //double click
// button.addEventListener('dblclick', runEvent)//runs only on doubleclick
// //mouse up
// button.addEventListener('mouseup', runEvent)//runs only when mouse is released after clicking
// //mousedown
// button.addEventListener('mousedown', runEvent)//runs as soon as clicked

//lets make the button bigger to test other type of mouse event
button.style.width = '300px'
button.style.height = '100px'

// //mouseenter - triggers if cursor enters its area
// button.addEventListener('mouseenter', runEvent)//runs as soon as cursor goes there
// //mouseleave
// button.addEventListener('mouseleave', runEvent)//runs as soon as cursor exits its area

// //mouseover almost same as mouse enter but if there is any element inside the parent then it triggers off when cursor is on the child element
// button.addEventListener('mouseover', runEvent) //we can see that as soon as the cursor goes to not here the over stops
// //mouse out - oposit of over
// button.addEventListener('mouseout', runEvent) //triggers when mouse leaves the specified element, we can see if cursor enters not here it triggers

//mousemove runs each time mouse is moved inside trigger area
//exact mouse position can be returnd in the event realtime
button.addEventListener('mousemove', runEvent)
let mousePlace = document.querySelector('#mouse')
mousePlace.style.fontSize = '20px'
mousePlace.style.margin = '10px auto 0px auto'
//we can see the p changes as we move the cursor
function runEvent(e) {
    console.log(`Event type: ${e.type}`)
    //mousePlace.innerHTML = `X: ${e.offsetX}, Y: ${e.offsetY}` //returns mouse location
    //mousePlace.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0)` //we can also use the values to do other things
    //this will change the background color of the pg

    //we can get any value that is entered inside any input field
    //console.log(`User Input: ${e.target.value}`)

    //to see the submit event work 
    //e.preventDefault()
}

//INPUT EVENT
let itemInput = document.querySelector('input[type="text"]')
let form = document.querySelector('form')

//keydown - returns if any key is pressed
//itemInput.addEventListener('keydown', runEvent)

//keyup -- returns when any key is released
//itemInput.addEventListener('keyup', runEvent)

//keypress - runs when any key is pressed
//itemInput.addEventListener('keypress', runEvent)

//focus - runs when field is focused/clicked
//itemInput.addEventListener('focus', runEvent)

//blur - runs when specific field is exited
//itemInput.addEventListener('blur', runEvent) 

//cut - runs if the operation 'cut' is performed inside the input field
//itemInput.addEventListener('cut', runEvent)

//paste -- runs if anything is pasted from the clipboard inside the input field
//itemInput.addEventListener('paste', runEvent) 

//input -- anything is done with the input field, it runs
//itemInput.addEventListener('input', runEvent)


let select = document.querySelector('select')

//change -- triggers if anything changes in an element, we can also get the changevalue using the event.target.value
select.addEventListener('change', runEvent)

//submit -- triggers if a form is submitted
form.addEventListener('submit', runEvent) //