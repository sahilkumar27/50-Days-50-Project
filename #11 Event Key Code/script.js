// to add the even listener and show how we get these actual properties like key, keyCode and code
// So let's take the window, which is the top level object in the browser, here(event) is the event object 

const isnert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    isnert.innerHTML = `
    <div class="key">
    ${event.key == ' ' ? 'space' : event.key }
    <small>event.key</small>
</div>

<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${event.code}
    <small>event.code</small>
</div>
    `
})

    // whatever you're testing goes here, which is our case, testing to see if he equals an empty string, agar key empty hai too space print kr doo agar empty nhi hai too key ka value print krr doo
 


// ` ` back tactics here so that this is we can put dynamic