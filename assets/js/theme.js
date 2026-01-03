document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html');
    const themeSw = document.getElementById('light-toggle');
    
    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        html.dataset.theme = theme;
    }
    
    function switchTheme() {
        if(localStorage.getItem('theme') == 'light')
            setTheme('dark');
        else
            setTheme('light');
    }
    
    themeSw.onclick = () => switchTheme();
    
    setTheme(localStorage.getItem('theme') || 'light');
});