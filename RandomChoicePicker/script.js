const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// So then I want to automatically focus on the text area. So we're going to call the focus method, which if we go to the page, it'll automatically put the cursor, and then it start typing.

textarea.focus()

// when press down happens, it's passed the event parameter(e) here
textarea.addEventListener('keyup', (e) =>{
    // when that happens, we're going to call a function called create tags we want to pass in each target, whatever we type in
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value =''    //clear the target value
        }, 10)    //10 milisecond waiting

        randomSelect()
    }
})

function createTags(input){
    // jitna space denge utna array mrin split krte jayrga
    // *filter- filtr is also a high order array method that allows you to return certain things based on a conditional, basically ye humlog ka space hata hai. trim of the white space if that is !== empty string, then will return that
// *map- map will manipulate the array

    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    // Jo bhi likhe ge textarea mein uska niche bhi show krenge means duplicate value
    
    tagsEl.innerHTML=''
    tags.forEach(tag =>{
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    // console.log(123) //kuch bhi likho console mein 123 hi print hoga

    // 30 represents is the number of times it's going to highlight each one before it stops
    const times = 30

    // pick the random tag, and then we want to highlight that random tag
    const interval = setInterval(() =>{

        // here it is causing that, shifting it to each one, highlighting and unhighlighting after a certain amount of time And then take care of stopping it and just picking a random tag to land on and highlight
        const randomTag = pickRandomTag()

        // highlightTag
        highlightTag(randomTag)

        // unhighlight
        setTimeout(()=>{
            unhighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(()=>{
        //there's a function called clear interval to stop it
        clearInterval(interval)  

        //pick a random tag to stop on
        setTimeout(()=>{
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times*100)   //30*100 
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unhighlightTag(tag){
    tag.classList.remove('highlight')
}