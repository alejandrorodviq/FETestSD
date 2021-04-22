console.log('SD Frontend Test');

function openNav() {
    var x = document.getElementById("mobile-menu");
    if (x.className === "inactive") {
      x.className = "";
      document.getElementById("menu-btn").src = "images/menu-close-btn.png";
    } else {
      x.className = "inactive";
      document.getElementById("menu-btn").src = "images/menu-btn.png";
    }
  }

