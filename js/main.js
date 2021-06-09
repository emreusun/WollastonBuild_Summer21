(() => {
  const mainNavButton = document.querySelectorAll('nav > ul li');

  function logNavButtons() {
    console.log('clicked on a nav element');

  }
  mainNavButton.forEach(item => item.addEventListener('click', logNavButtons));

 })();
