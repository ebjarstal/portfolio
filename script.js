document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.container');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var opacity = 1 - scrollPosition / (window.innerHeight * 0.7); /* Adjust the factor as needed */

        // Apply the animation
        container.style.opacity = opacity;
        container.style.transform = 'translateY(' + scrollPosition / 2 + 'px)'; /* Adjust the factor as needed */
    });
});
