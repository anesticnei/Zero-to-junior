
const form = document.forms.namedItem('register');
const firstName = form.elements.namedItem('name');
const surname = form.elements.namedItem('surname');
const login = form.elements.namedItem('login');
const password = form.elements.namedItem('password');
const date = form.elements.namedItem('date');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
});
const validation = () => {
    const dataCheck = {
        name: firstName.value,
        surname: surname.value,
        login: login.value,
        password: password.value,
        date: date.value,
        sex: document.querySelector('input[name="sex"]:checked'),
    };

    let isValid = true;
    for (const [key, value] of Object.entries(dataCheck)) {
        const errorElement = document.getElementById(key + "Error");
        if (errorElement) {
            if (value === "" || value === null || value === undefined) {
                errorElement.innerHTML = "Pole nie może być puste!";
                isValid = false;
            } else {
                errorElement.innerHTML = "";
            }
        }
    }

    if(isValid){
        if(dataCheck.sex.value === "men"){
            alert(
                "Pan " + dataCheck.name + " " + dataCheck.surname + " urodzony " + dataCheck.date + " chce utworzyć konto o loginie " + dataCheck.login);

        }else if(dataCheck.sex.value === "woman"){
             alert("Pani " + dataCheck.name + " " + dataCheck.surname + " urodzona " + dataCheck.date + " chce utworzyć konto o loginie " + dataCheck.login);
        }
    }
}
