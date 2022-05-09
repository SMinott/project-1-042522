document.addEventListener("DOMContentLoaded", ()=>{
    const url ="https://excuser.herokuapp.com/v1/excuse/200"
    fetch(url)
    .then(response =>{
        return response.json()
    })
    .then(response =>{
        response.forEach(getElementsOnDom)
    })
})


function getElementsOnDom(response){
    console.log(response)
    const quotes = document.getElementById("excuses")
    const newQuote = document.createElement("li")
    newQuote.textContent = response.excuse
    quotes.append(newQuote)
}

