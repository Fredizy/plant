// const menu = document.querySelector('.material-symbols-outlined');
 

// menu.addEventListener('click', () => {
//    sidebar.style.opacity = 100;
// });

// Search
const searchInput = document.querySelector('input[type="search"]');
const boxes = document.querySelectorAll('.box');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  boxes.forEach(box => {
    const title = box.querySelector('.boxed-bottom-text p').textContent.toLowerCase();
    
    if (title.includes(searchTerm)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
      
    }
  });
});