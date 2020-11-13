function onLoad() {
    for (i = 1; i <= 9; i++) {
        let randomID = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        document.getElementById("anh" + i).src = "images/anh" + randomID + ".jpg";
        document.getElementById("anh" + i).alt = randomID;
    }
}

function imgClick(img) {
    let id = img.alt;
    if (id == 6) {
        id = 1;
        img.src = "images/anh" + id + ".jpg";
        img.alt = id;
    } else {
        id++
        img.src = "images/anh" + id + ".jpg";
        img.alt = id;
    }
    checkWin();
}

function checkWin() {
    let img1 = document.getElementById('anh1').alt;
    let img2 = document.getElementById('anh2').alt;
    let img3 = document.getElementById('anh3').alt;
    let img4 = document.getElementById('anh4').alt;
    let img5 = document.getElementById('anh5').alt;
    let img6 = document.getElementById('anh6').alt;
    let img7 = document.getElementById('anh7').alt;
    let img8 = document.getElementById('anh8').alt;
    let img9 = document.getElementById('anh9').alt;
    if ((img1 == img2) && (img1 == img3) && (img1 == img4) && (img1 == img5) && (img1 == img6) && (img1 == img7) && (img1 == img8) && (img1 == img9)) {
        alert("You Win!");
    }
}
