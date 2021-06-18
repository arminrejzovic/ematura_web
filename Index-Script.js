function playAsGuest() {
    window.open("Menu.html","_self");
}

function openPlayStore() {
    window.open("https://play.google.com/store/apps/details?id=com.arminrejzovicsoftware.armin.maturaapk&hl=en", '_blank');
}

window.onload = function () {
    let message = window.location.hash.substring(1);

    if (message=="invalidusername"){
        document.getElementById("username").style.border = "3px solid";
        document.getElementById("username").style.borderColor = "red";
        alert("Korisničko ime nije validno");
    }

    if (message=="statementfailed"){
        alert("Neuspješno spajanje sa bazom podataka");
    }

    if (message=="wrongpassword"){
        document.getElementById("username").style.border = "3px solid";
        document.getElementById("password").style.borderColor = "red";
        alert("Šifra nije tačna");
    }

    if (message=="successfullogin"){
        alert("Dobrodošli nazad!");
        window.open("Menu.html","_self");
    }
}

