// Initialize the default darkMode setting
localStorage['dark-mode'] = localStorage['dark-mode'] ? localStorage['dark-mode'] : false;
document.documentElement.style.setProperty(
    '--dark-mode-back', localStorage['dark-mode']==='true' ? '#000' : '#fff'
);
document.documentElement.style.setProperty(
    '--dark-mode-text', localStorage['dark-mode']==='true' ? '#fff' : '#000'
);

/* Dark Mode */
darkMode = document.querySelector('#dark-mode');
darkMode.checked = localStorage['dark-mode']==='true' ? true : false;
darkMode.addEventListener('click', function(e) {
    if(this.checked ) {
        darkStyles('dark');
        localStorage['dark-mode'] = true;
    } else {
        darkStyles('white');
        localStorage['dark-mode'] = false;
    }
})

function darkStyles(mode = 'white', userChoose={}) {
    userChoose['back'] = mode=='white' ? '#fff' : '#000';
    userChoose['text'] = mode=='white' ? '#000' : '#fff';
    document.documentElement.style.setProperty('--dark-mode-back', userChoose['back']);
    document.documentElement.style.setProperty('--dark-mode-text', userChoose['text']);
    document.documentElement.style.setProperty('transition', 'ease');
    document.documentElement.style.setProperty('transition-duration', '0.5s');
    document.documentElement.style.setProperty('transition-delay', '0s');
}

// Event on the side-menu  to hide it
sideMenu = document.querySelector('.side-menu');
sideMenu.addEventListener('click', function(e) {
    if(e.target.className == 'side-menu') {
        menuBtn = document.querySelector('#menu-btn');
        menuBtn.checked = false;
    }
});

