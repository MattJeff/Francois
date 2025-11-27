// ================================================
// FRANÇOIS - Site Web Professionnel
// Animations et Interactions JavaScript
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    // -------------------- Navigation Mobile --------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fermer le menu en cliquant sur un lien
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // -------------------- Navbar Scroll Effect --------------------
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.background = 'rgba(26, 21, 18, 0.95)';
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(26, 21, 18, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // -------------------- Smooth Scroll --------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // -------------------- Gallery Lightbox --------------------
    const galleryItems = document.querySelectorAll('.gallery-item img, .app-screenshot');

    galleryItems.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;

            Object.assign(lightbox.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '10000',
                opacity: '0',
                transition: 'opacity 0.3s ease',
                cursor: 'zoom-out'
            });

            const content = lightbox.querySelector('.lightbox-content');
            Object.assign(content.style, {
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90%'
            });

            const lightboxImg = lightbox.querySelector('img');
            Object.assign(lightboxImg.style, {
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
            });

            const closeBtn = lightbox.querySelector('.lightbox-close');
            Object.assign(closeBtn.style, {
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '10px'
            });

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            requestAnimationFrame(() => {
                lightbox.style.opacity = '1';
            });

            const closeLightbox = () => {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                }, 300);
            };

            lightbox.addEventListener('click', closeLightbox);
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeLightbox();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') closeLightbox();
            }, { once: true });
        });
    });

    // -------------------- Button Hover Effect --------------------
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // -------------------- Console Easter Egg --------------------
    console.log('%c🚀 François - L\'IDE du Futur', 'font-size: 24px; font-weight: bold; color: #D97757;');
    console.log('%cPowered by Claude', 'font-size: 14px; color: #888;');
    console.log('%c"Comme d\'habitude" — mais en mieux.', 'font-size: 12px; font-style: italic; color: #666;');
});

// -------------------- Scroll to Top Button --------------------
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollBtn = document.querySelector('.scroll-to-top');

    if (!scrollBtn) {
        scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '↑';
        scrollBtn.setAttribute('aria-label', 'Retour en haut');

        Object.assign(scrollBtn.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#D97757',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            boxShadow: '0 4px 12px rgba(217, 119, 87, 0.4)',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '1000'
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.transform = 'scale(1.1)';
            scrollBtn.style.background = '#C4593D';
        });

        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.transform = 'scale(1)';
            scrollBtn.style.background = '#D97757';
        });

        document.body.appendChild(scrollBtn);
    }

    if (scrollTop > 500) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
    }
});
