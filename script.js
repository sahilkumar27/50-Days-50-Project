const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 500

        if(c < target){
            // Math.ceil means round off kr deta hai number ko jo point mein number ayega uska approx value batata hai
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        else{
            counter.innerText = target
        }
    }

    updateCounter()
})

