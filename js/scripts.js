function openForm() {
    document.getElementById("hireForm").style.display = "block";
    document.getElementById("curtain").style.display = "block";
}

function closeForm() {
    document.getElementById("hireForm").style.display = "none";
    document.getElementById("curtain").style.display = "none";
}

function closeNav() {
    document.getElementById("fixed-menu-check").click();
}

function closeCookBar() {
    document.getElementById("coobar").style.visibility = "hidden";
    document.getElementById("coobar").style.height = "0";
}