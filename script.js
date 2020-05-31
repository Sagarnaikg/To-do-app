/*Todo list app*/

//basic intilization
//input
const input = document.getElementById("input-field");
const addButton = document.getElementById("add-btn");

//items list
const itemsList = document.getElementById("items"); //not done list
const itemsListDone = document.getElementById("itemsDone"); //done list

let createListItem = (inputValue) => {

    // 1) checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // 2) label
    let label = document.createElement("label");
    label.textContent = inputValue;
    input.value = "";
    // 3) remove button
    let cancelButton = document.createElement("input");
    cancelButton.type = "button";
    cancelButton.value = "x";
    cancelButton.className = "cancel-btn";
    // 4)li tag
    let item = document.createElement("li");
    item.className = "item";
    //append operation
    item.appendChild(checkBox);
    item.appendChild(label);
    item.appendChild(cancelButton);

    remove(cancelButton, itemsList, item);
    newListAdd(checkBox, itemsList, item, cancelButton);

    return item;
}

//Creation of new item
addButton.onclick = () => {

    if (!Validity(input.value)) {
        input.style.borderBottom = "2px solid #ff0000"
        input.style.color = "#ff1f1fd5"
        input.value = "Please enter a task first !!!"

        input.onmouseup = () => {
            input.style.borderBottom = "2px solid #c0c0c0"
            input.value = ""
            input.style.color = "#000000";
        }
        return
    }

    item = createListItem(input.value)
    itemsList.insertBefore(item, itemsList.firstChild);
}



//input validation
let Validity = (text) => {
    if (text == "" || text == "Please enter a task first !!!")
        return false;
    else
        return true;
}

//delete operation
let remove = (button, parent, item) => {
    button.onclick = () => {
        parent.removeChild(item);
    }
}

//adding items to new list(done list)
let newListAdd = (checkBox, parent, item, button) => {
    checkBox.onclick = () => {
        parent.removeChild(item); //removing from old list
        itemsListDone.insertBefore(item, itemsListDone.firstChild); //adding to new list
        remove(button, itemsListDone, item); //reinitiliazation of remove button
    }
}