// yeh querySelectorAll isliye kiye because it doesn't matter how many labels are we want, then they will give us a no list of all labels
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    // innerText give the each letter
    label.innerHTML = label.innerText

    // then we split into the array, if we put an empty string in here is it splits the letter into array, suppose 'E' then 'm' then 'a' and so on
    .split('')

    // then we're mapping it to create an array of the letter with a span around it, fir inline css span k aandar isliye kr rhe hai ki mera transition delay rhe or fir humlog chhate hai ki mera value fixed nah rhe woo flicker them all up at the same time pe isliye humlog idx(0) ko multiply kr rhe hai 50 se, ye 50*0, 50*1, 50*2, 50*3, 50*4, 50*5, and so on..... after the transition delay number we need to apply time in "ms" millisecond
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)

    // Then we're turning it back into a string
    .join('')
})

// idx*50 (50 mera delay hai kitna slow move krrna hai) jab humlog form k aandar input krrege na tb mera transition delay k sath show krrega. jo bhi multiply krrna hai index k sath ap wo kr sakte hai