let contacts = [];

function addContact() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name === "" || phone === "") {
        alert("Please enter both name and phone number");
        return;
    }

    let contact = {
        name: name,
        phone: phone
    };

    contacts.push(contact);

    displayContacts();

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}


function displayContacts() {

    let contactsDiv = document.getElementById("contacts");

    contactsDiv.innerHTML = "";

    contacts.forEach(function(contact) {

        let div = document.createElement("div");

        div.className = "contact";

        div.textContent = contact.name + " - " + contact.phone;

        contactsDiv.appendChild(div);

    });
}