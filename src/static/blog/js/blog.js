sideMenu = document.querySelector('.side-menu');

sideMenu.addEventListener('click', function(e) {
    if(e.target.className == 'side-menu') {
        menuBtn = document.querySelector('#menu-btn');
        menuBtn.checked = false;
    }
});