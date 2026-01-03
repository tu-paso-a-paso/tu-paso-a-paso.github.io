document.addEventListener('DOMContentLoaded', () => {
    const asideSw = document.getElementById('aside-switch');
    const contentClass = document.querySelector('.content');

    function setAsidePos(position) {
        localStorage.setItem('asidePos', position);
        if(position == 'right') {
            contentClass.style.flexDirection = 'row-reverse';
        }
        else {
            contentClass.style.flexDirection = 'row';
        }
    }

    function switchAsidePos() {
        if(localStorage.getItem('asidePos') == 'right')
            setAsidePos('left');
        else
            setAsidePos('right');
    }

    asideSw.onclick = () => switchAsidePos();
    
    setAsidePos(localStorage.getItem('asidePos') || 'left');
});