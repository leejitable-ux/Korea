document.querySelector('#hero button').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});
