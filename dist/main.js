const menuIcon = document.getElementById("menu-icon")
const navbar = document.getElementById("navbar")
const contactBtn = document.getElementById("contact-btn")

function handleMenu() {
  menuIcon.addEventListener("click", (e) => {
    if (navbar.style.display == "none" && contactBtn.style.display == "none") {
      navbar.style.display = "block";
      navbar.style.marginBlock = "15px";
      navbar.style.backgroundColor = "#ca943d66";
      contactBtn.style.display = "block";
      contactBtn.style.textAlign = "center";
    } else {
      navbar.style.display = "none";
      contactBtn.style.display = "none";
    }
  })
}

handleMenu();
