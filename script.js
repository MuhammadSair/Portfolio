document.querySelector('.header-menu-links').addEventListener('click', (event) => {
    if (event.target.tagName === 'li') {
      console.log(`You clicked on ${event.target.textContent}`);
    }
  });
  