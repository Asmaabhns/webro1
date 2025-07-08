  function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menuIcon");

    navbar.classList.toggle("show");
    menuIcon.classList.toggle("active");
  }


const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// صورة تفتح بنفس صفحة
const zoomBtns = document.querySelectorAll('.zoom-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

zoomBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault(); // يمنع التوجه للرابط
    const imgSrc = btn.getAttribute('data-image');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  });
});

function closeLightbox() {
  lightbox.style.display = 'none';
}

// service
  const circles = document.querySelectorAll('.step-circle');
  const services = document.querySelectorAll('.service');

  function addHoverEffect(index) {
    document.querySelector(`.step-circle[data-index="${index}"]`)?.classList.add('hovered');
    document.querySelector(`.service[data-index="${index}"]`)?.classList.add('hovered');
  }

  function removeHoverEffect(index) {
    document.querySelector(`.step-circle[data-index="${index}"]`)?.classList.remove('hovered');
    document.querySelector(`.service[data-index="${index}"]`)?.classList.remove('hovered');
  }

  circles.forEach(circle => {
    const index = circle.getAttribute('data-index');
    circle.addEventListener('mouseenter', () => addHoverEffect(index));
    circle.addEventListener('mouseleave', () => removeHoverEffect(index));
  });

  services.forEach(service => {
    const index = service.getAttribute('data-index');
    service.addEventListener('mouseenter', () => addHoverEffect(index));
    service.addEventListener('mouseleave', () => removeHoverEffect(index));
  });




 