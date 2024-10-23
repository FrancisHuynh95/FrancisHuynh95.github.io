const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
},
{
    threshold: .34,
}
)

const hiddenElement = document.querySelectorAll(".hidden1")
hiddenElement.forEach(element => observer.observe(element));


// headerObserver.observe(hiddenElement)
