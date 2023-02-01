let selectedColor = false;

function validate() {
    const name = document.forms["person"]["name"].value;
    const phoneNumber = document.forms["person"]["phoneNumber"].value;
    const faculty = document.forms["person"]["faculty"].value;
    const dateOfBirth = document.forms["person"]["dateOfBirth"].value;
    const address = document.forms["person"]["address"].value;

    let hasError = false;

    if (!/^[А-Яа-яёЁЇїІіЄєҐґ]+\s[А-Яа-яёЁЇїІіЄєҐґ]\.[А-Яа-яёЁЇїІіЄєҐґ]\.$/i.test(name)) {
        document.getElementById('nameLabel').classList.add("error");
        hasError = true;
    } else {
        document.getElementById('nameLabel').classList.remove("error");
    }

    if (!/^\(\d\d\d\)-\d\d\d-\d\d-\d\d$/i.test(phoneNumber)) {
        document.getElementById('phoneNumberLabel').classList.add("error");
        hasError = true;
    } else {
        document.getElementById('phoneNumberLabel').classList.remove("error");
    }

    if (!/^[А-Яа-яёЁЇїІіЄєҐґ]+$/i.test(faculty)) {
        document.getElementById('facultyLabel').classList.add("error");
        hasError = true;
    } else {
        document.getElementById('facultyLabel').classList.remove("error");
    }

    if (!/^\d\d\.\d\d\.\d\d\d\d$/i.test(dateOfBirth)) {
        document.getElementById('dateOfBirthLabel').classList.add("error");
        hasError = true;
    } else {
        document.getElementById('dateOfBirthLabel').classList.remove("error");
    }

    if (!/^\.\s[А-Яа-яёЁЇїІіЄєҐґ]+$/i.test(address)) {
        document.getElementById('addressLabel').classList.add("error");
        hasError = true;
    } else {
        document.getElementById('addressLabel').classList.remove("error");
    }

    if (!hasError) {
        alert("ПІБ: " + name + "\nТелефон: " + phoneNumber + "\nФакультет: " + faculty + "\nДата народж.: " + dateOfBirth + "\nАдреса: " + address);
    }

    return false;
}


function onHover(element) {
    element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function onOut(element) {
    if (selectedColor) {
        usePickedColor(element);
        return;
    }
    element.style.backgroundColor = "";
    element.style.color = "";
}

function usePickedColor(element) {
    element.style.backgroundColor = document.getElementById("colorpicker").value;
    element.style.color = "black";
    selectedColor = true;
}

function changeRowColor(element) {
    document.getElementById("row2").style.backgroundColor = document.getElementById("colorpicker").value;
    document.getElementById("row2").style.color = "black";
    selectedColor = true;
}

