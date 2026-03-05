let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];


// 1️ Main Menu Loop (program runs until user types "quit")
let action = "";

while (action !== "quit") {

    action = prompt("Choose option: show / all / add / search / quit");

    if (!action) {
        alert("No option selected. Returning to menu.");
        continue;
    }

    // 2️.a SHOW: display a specific contact by index
    if (action === "show") {

        let index = prompt("Enter contact index (0 - " + (contacts.length - 1) + ")");

        if (index !== null && contacts[index]) {
            alert(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
        } else {
            alert("Invalid index.");
        }
    }

    // 2️.b ALL: display all contacts
    else if (action === "all") {

        for (let i = 0; i < contacts.length; i++) {
            alert(`${i}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }
    }

    // 2️.c ADD: add a new contact
    else if (action === "add") {

        let name = prompt("Enter name:");
        let phone = prompt("Enter phone:");
        let email = prompt("Enter email:");

        // 3️ Data Integrity: only add if all fields exist
        if (name && phone && email) {

            contacts.push({
                name: name,
                phone: phone,
                email: email
            });

            alert("Contact added successfully.");

        } else {
            alert("Contact not added. Missing required data.");
        }
    }

    // 2️.d SEARCH: find contact by name
    else if (action === "search") {

        let searchName = prompt("Enter name to search:");
        let found = false;

        for (let i = 0; i < contacts.length; i++) {

            if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                alert(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Contact not found.");
        }
    }

    // 3️ Data Integrity: handle invalid menu options
    else if (action !== "quit") {
        alert("Invalid option. Please try again.");
    }
}