var toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        document.getElementById('header-logo').src='/icons/logo-dark.svg'
        document.getElementById('footer-logo').src='/icons/logo-dark.svg'
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('header-logo').src='/icons/logo-dark.svg'
        document.getElementById('footer-logo').src='/icons/logo-dark.svg'
        localStorage.setItem('theme', 'dark');
    }
    else {        
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById('header-logo').src='/icons/logo-light.svg'
      document.getElementById('footer-logo').src='/icons/logo-light.svg'
      localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);



