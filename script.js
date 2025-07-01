const link = document.getElementById('credits');
const image = document.getElementById('kanyeStaring');

link.addEventListener('mouseenter', () => {
  image.style.display = 'block';
});

link.addEventListener('mouseleave', () => {
  image.style.display = 'none';
});
