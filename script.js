
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

    const link = document.getElementById('kanyeText');
    const image = document.getElementById('kanyeStaring');

    link.addEventListener('mouseenter', () => {
      image.style.display = 'block';
    });

    link.addEventListener('mouseleave', () => {
      image.style.display = 'none';
    });

function confirmLeave(url) {
  const leave = confirm("Are you sure you want to leave this page? You will be redirected to: " + url);
  if (leave) {
    window.location.href = url;
  } else {

  }
}
