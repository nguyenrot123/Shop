var stars = document.querySelectorAll('.star');
        var ratingValue = document.getElementById('rated-value');
        var ratingContainer = document.querySelector('.stars');

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
            ratingValue.textContent = index + 1;
            resetStars();
            star.classList.add('checked');
            });
        });

        function resetStars() {
            stars.forEach(star => {
            star.classList.remove('checked');
            });
        }