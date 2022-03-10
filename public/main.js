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
        event.stopPropagation()
        document.querySelectorAll(".modal").forEach((modal) => {
            if(modal != button.querySelector(".modal"))
            {
                modal.classList.add("hidden")
            }
            
        })
        button.querySelector(".modal").classList.toggle("hidden")
    })
})

window.addEventListener('click', event => {
    document.querySelectorAll(".modal").forEach((modal) => {
        if(!modal.classList.contains("hidden")){
            modal.classList.add("hidden")
        }
    })
})