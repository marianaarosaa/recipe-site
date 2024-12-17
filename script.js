function showCategory(category) {
    document.querySelectorAll('.recipe-section').forEach(section => {
      section.style.display = 'none';
    });
  
    document.getElementById(category).style.display = 'block';
  }

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
  
        document.body.style.opacity = 0;
  
        setTimeout(() => {
          window.location.href = target;
        }, 500); 
      });
    });
  });