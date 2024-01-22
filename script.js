
document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu_icon');
    var navList = document.querySelector('.nav_list');
    var navLinks = document.querySelectorAll('.nav_list a');
    var screenWidthThreshold = 935;

    // Initialize navList for small screens
    function initNavList() {
        if (window.innerWidth <= screenWidthThreshold) {
            navList.style.right = '-100%';
            navList.style.width = '0';
            navList.style.height = '0';
            navList.style.borderRadius = '75%';
            menuIcon.style.display = 'block';
            navList.style.display = '';
            navList.style.flexDirection = ''; 
        } else {

            navList.style.display = 'flex'; // or 'block' if you want them listed down
            navList.style.flexDirection = 'row'; // Reset to row for larger screens
            navList.style.right = '0';
            navList.style.width = '';
            navList.style.height = ''; 
            navList.style.borderRadius = '';
            menuIcon.style.display = 'none'; 

        }
    }

    function toggleMenu() {
        var isOpen = navList.style.width !== '0px' && navList.style.width !== '';

        if (isOpen) {
            // Close menu
            navList.style.right = '-100%';
            navList.style.width = '0';
            navList.style.height = '0';
            navList.style.borderRadius = '75%';
        } else {
            // Open menu
            navList.style.right = '0%';
            navList.style.width = '100%';
            navList.style.height = '100vh';
            navList.style.borderRadius = '0%';
        }
    }

     menuIcon.addEventListener('click', toggleMenu);
    navLinks.forEach(function(link) { 
        link.addEventListener('click', function() {
            if (window.innerWidth <= screenWidthThreshold) {
                toggleMenu(); // Only toggle menu on mobile view
            }
        }); 
    });
    window.addEventListener('resize', initNavList);

    initNavList();
});





document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    var navbar = document.querySelector('header');
    var screenWidthThreshold = 935; 

    window.addEventListener("scroll", function() {
        // Check if screen width greater than threshold
        if (window.innerWidth > screenWidthThreshold) {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                // Scroll Down
                navbar.style.top = "-120px";
            } else {
                // Scroll Up
                navbar.style.top = "0px";
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile/negative scrolling
        }
    }, false);
});


document.addEventListener("DOMContentLoaded", function() {
    var dynamicText = document.querySelector('.dynamic-text');
    var words = ['Developer', 'Creator', 'Thinker'];
    var letterCount = 0;
    var wordIndex = 0;
    var currentWord = '';
    var isDeleting = false;
    var typingDelay = 200; 
    var deleteSpeed = 100; 
    var newWordDelay = 1000; 

    function typeWords() {
        if (isDeleting) {
            currentWord = words[wordIndex].substring(0, letterCount - 1);
            letterCount--;
            typingDelay = deleteSpeed;
        } else {
            currentWord = words[wordIndex].substring(0, letterCount + 1);
            letterCount++;
        }
        dynamicText.textContent = currentWord;

        if (!isDeleting && letterCount === words[wordIndex].length) {
            typingDelay = newWordDelay;
            isDeleting = true;
        } else if (isDeleting && letterCount === 0) {
            wordIndex = (wordIndex + 1) % words.length;
            isDeleting = false;
        }

        setTimeout(typeWords, typingDelay);
    }

    typeWords();
});


// Logos
document.addEventListener("DOMContentLoaded", function() {
    function addHoverListener(elementId, newId) {
        var element = document.getElementById(elementId);

        element.addEventListener('mouseenter', function() {
            this.id = newId;
        });

        element.addEventListener('mouseleave', function() {
            this.id = elementId;
        });
    }

    addHoverListener('fb', 'newIdFb');
    addHoverListener('ig', 'newIdIg');
    addHoverListener('ln', 'newIdLn');
    addHoverListener('gt', 'newIdGt');
    addHoverListener('gm', 'newIdGm');
});
