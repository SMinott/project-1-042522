document.addEventListener("DOMContentLoaded", () => {
    fetch(`https://excuser.herokuapp.com/v1/excuse/300`)
    .then(resp => resp.json())
    .then(excuses => {
        addButtonListeners(excuses);
    });

    const excuseForm = document.querySelector("form");
    excuseForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const familyOption = document.querySelector("#family-option").textContent;
    
        if (familyOption === "Family") {
            const li = document.createElement("li");
            li.textContent = document.getElementById("new-excuse-text").value;

            document.querySelector("#new-excuse").append(li);
        }
        e.target.reset();

    })

});

function addExcusesByCategory(excuses, category) {
    document.querySelector("ul").textContent = "";
    let filteredExcuses = excuses.filter((excuse) => {
        return excuse.category === category;
    });
   
    filteredExcuses.forEach((obj) => {
        const li = document.createElement("li");
        li.textContent = obj.excuse;
        document.querySelector("ul").append(li); 
    });
}

function addButtonListeners(excuses) {
    const familyButton = document.getElementById("family-button");
    const officeButton = document.getElementById("office-button");
    const childrenButton = document.getElementById("children-button");
    const collegeButton = document.getElementById("college-button");
    const partyButton = document.getElementById("party-button");

    familyButton.addEventListener("click", (e) => {
        addExcusesByCategory(excuses, "family");
    });

    officeButton.addEventListener("click", (e) => {
        addExcusesByCategory(excuses, "office");
    });

    childrenButton.addEventListener("click", (e) => {
        addExcusesByCategory(excuses, "children");
    });

    collegeButton.addEventListener("click", (e) => {
        addExcusesByCategory(excuses, "college");
    });

    partyButton.addEventListener("click", (e) => {
        addExcusesByCategory(excuses, "party");
    });
}






// const excuseForm = document.getElementById('submit-excuse');
// excuseForm.addEventListener('submit', (e) => submitNewExcuse(e));
// function submitNewExcuse(e){
//     e.preventDefault();
//     const li = document.createElement('li');
//     const newExcuseList = document.getElementById('new-excuse');
//     newExcuseList.appendChild(li);
//     li.textContent = e.target.excuse.value;
// }