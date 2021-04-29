

(() => { 
                // Header change background on scroll
    const header = document.querySelector('header')
    window.addEventListener('scroll', (e) => {
        function getScrollY() {
            var  scrOfY = 0;
            if( typeof( window.pageYOffset ) == 'number' ) {
                
                scrOfY = window.pageYOffset;
        
            } else if( document.body && document.body.scrollTop )  {
                
                scrOfY = document.body.scrollTop;
            } 
            return scrOfY;
        }

        const y = getScrollY();
        if (y > 100) {
            header.classList.add('bg');
        } else {
            header.classList.remove('bg');
        }
        
    })
                    // Hamburger Menu
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    hamburgerButton.addEventListener('click', () => {
        if(hamburgerButton.classList.contains("open")) {
            hamburgerButton.classList.remove("open");
            mobileNav.style.opacity = '0';
            mobileNav.style.visibility = 'hidden';
            

        } else {
            hamburgerButton.classList.add("open");
            mobileNav.style.opacity = '1';
            mobileNav.style.visibility = 'visible';
            
            
        }
    })
                    // Carousel
    const options = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        arrows: false,
        pagination: false
        
        
      }
    $('.slideshow').slick(options);

})();

