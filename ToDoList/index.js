const myText = document.getElementById("myText");
const showRemoveButton = document.getElementById("remBtn");
const allLists = document.querySelector(".allList");
const removeBtn = document.getElementById("removeButton");


function addList () {

    if (myText.value !== "") {
        const newList = document.createElement("p");
        newList.textContent = myText.value;
        newList.classList.add("lists");
        allLists.appendChild(newList);

        showRemoveButton.style.display = "flex";
        myText.value = "";
 
        newList.addEventListener("click", (event) => {
            newList.style.backgroundColor = "#5D4E4F";
            newList.style.color = "white"; 
        }); 
    }



//remove button
}





removeBtn.addEventListener("click", () => {
    const items = allLists.querySelectorAll("p");

    console.log(allLists);
    items.forEach(item => {
        if (item.style.backgroundColor === "#5D4E4F" || item.style.color === "white") {
            removeElement(allLists, item);
        }

    });
    if (items.length === 1) {
            showRemoveButton.style.display = "none";

    };
    console.log(items.length);
});




function removeElement (papa, pikin) {
    papa.removeChild(pikin);
}