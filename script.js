
      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const main = document.querySelector(".mainDiv");
        sidebar.classList.toggle("hidden");
        if (sidebar.classList.contains("hidden")) {
          main.style.marginLeft = "0";
        } else {
          main.style.marginLeft = "160px";
        }
      }