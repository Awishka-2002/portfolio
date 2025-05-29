// Select all buttons with class 'view-project-btn'
const buttons = document.querySelectorAll('.view-project-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const githubUrl = button.getAttribute('data-github');
    if (githubUrl) {
      window.open(githubUrl, '_blank'); // Opens the link in a new tab
    }
  });
});

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('main-nav').classList.toggle('active');
  });


