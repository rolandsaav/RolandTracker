hamburger = document.querySelector(".navbar-hamb");
sidebar = document.querySelector(".sidebar")

hamburger.addEventListener('click', event =>{
    sidebar.classList.toggle('hidden')
})

window.addEventListener("resize", event => {
    if(window.innerWidth < 1000)
    {
        sidebar.classList.add("hidden")
    } 
    else 
    {
        sidebar.classList.remove("hidden")
    }
})  

document.querySelectorAll(".modal-trigger").forEach((button) => {
    button.addEventListener('click', function(event) {
        button.querySelector(".modal").classList.toggle("hidden")

    })
})
