document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector("html");
    const btnsw = document.getElementById('light-toggle');
    
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
    
    btnsw.addEventListener("click", () => switchTheme());
    
    setTheme(localStorage.getItem('theme'));
});