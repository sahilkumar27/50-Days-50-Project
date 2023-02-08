// querySelectorAll isliye kiye kyuki more than 1 boxes hai
const boxes = document.querySelectorAll('.box')

// we have a function called checkboxes because we want to check the positioning of each box and a box could be anything
window.addEventListener('scroll', checkboxes)

// checkboxes()

function checkboxes(){
    // whenver we scroll at down we figure ot that where do we went them to start to come in
    const triggerBottom = window.innerHeight / 5 * 4


    // let's get each boxes, then it apply loop
    boxes.forEach(box => {
        // ler's get the top of the box
        const boxTop = box.getBoundingClientRect().top

    // then we need if the top of the box is less than the trigger bottom, if it is, we want to add the class of show.if it's not, if it's more than we want to remove the class show.
    if(boxTop < triggerBottom){
        box.classList.add('show')
    }
    else{
        // remove it
        box.classList.remove('show')
    }
    
    })
}

// getBoundingClientRect() - It returned the value in a DOMRect object which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport.