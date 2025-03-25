const themeToggle = document.getElementById('theme-toggle');
const toggle = document.getElementById('toggle');

const body = document.body;

// verifica se o usuário já escolheu um tema
 if (localStorage.getItem('theme') === 'dark') {
   body.classList.add("dark-mode");
 }

// ao clicar no botão, troca o tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle("dark-mode");
  
  // salva o tema escolhido no localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    toggle.classList.add("active");
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.classList.remove("active");
  }
});