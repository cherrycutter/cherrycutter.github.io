(function () {
    const burger = document.querySelector('.header-burger-image');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());