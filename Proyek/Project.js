function validasi() {
    if (document.forms["Login"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["Login"]["email"].focus();
        return false;
    }
    if (document.forms["Login"]["pass"].value == "") {
        alert("Password Tidak Boleh Kosong");
        document.forms["Login"]["pass"].focus();
        return false;
    }
    else{
        alert('Selamat Datang !');
    }
}