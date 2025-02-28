// External

function validateForm(x) {
    let nameInput = document.getElementById('name-input');

    if (nameInput.value == '') {
        alert('nama ga boleh kosong!')  // if itu untuk benar atau hal itu baru dimulai kayak nama kosong kita alert
    } else {
        alert('Welcome ' + nameInput.value);
    } //else untuk yang salah
}

// For Index Identifier
let indexbanner = 0;

showBanner();

function nextBanner() {
    //Increment indexBanner
    indexbanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('main-banner');

    if (indexbanner > banner.length -1) {
        indexbanner = 0
    }

    for (let i = 0; i < banner.length; i++) {
        banner[i].style.display = 'none';
    }

    banner[indexbanner].style.display = 'block';

    //length i nya 0 karena Array itu 0
}

//console log dihapus setelah development biar ga diserang dengan hacker