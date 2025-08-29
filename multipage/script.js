 // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Carousel Slider Script
        const carouselSlide = document.querySelector('.carousel-slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicators = document.querySelectorAll('.indicator');
        
        // Slide data (images and captions)
        const slides = [
            {
                image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'SUMMER SALE',
                text: 'Get up to 50% off on selected items. Limited time offer!'
            },
            {
                image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                title: 'NEW ARRIVALS',
                text: 'Discover our latest collection for the season'
            },
            {
                image: 'https://images.unsplash.com/photo-1659857924674-24c99f4bc256?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwNGt8ZW58MHx8MHx8fDA%3D',
                title: 'MEN\'S COLLECTION',
                text: 'Stylish outfits for every occasion'
            }
        ];
        
        let currentIndex = 0;
        let autoSlideInterval;
        
        // Initialize carousel
        function initCarousel() {
            updateCarousel();
            startAutoSlide();
        }
        
        // Update carousel display
        function updateCarousel() {
            const slide = slides[currentIndex];
            carouselSlide.innerHTML = `
                <img src="${slide.image}" alt="${slide.title}">
                <div class="carousel-caption">
                    <h3>${slide.title}</h3>
                    <p>${slide.text}</p>
                    <button class="shop-now-btn">SHOP NOW</button>
                </div>
            `;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Go to next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }
        
        // Go to previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }
        
        // Start auto sliding
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }
        
        // Stop auto sliding
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
        
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
                stopAutoSlide();
                startAutoSlide();
            });
        });
        
        // Pause on hover
        carouselSlide.addEventListener('mouseenter', stopAutoSlide);
        carouselSlide.addEventListener('mouseleave', startAutoSlide);
        
        // Initialize
        initCarousel();