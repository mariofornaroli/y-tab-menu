window.addEventListener("load", () => {

    document.getElementById('home').addEventListener('click', () => {
        document.body.classList.add('home');
        document.body.classList.remove('portfolio');
        document.body.classList.remove('contact');
    })

    document.getElementById('portfolio').addEventListener('click', () => {
        document.body.classList.add('portfolio');
        document.body.classList.remove('home');
        document.body.classList.remove('contact');
    })

    document.getElementById('contact').addEventListener('click', () => {
        document.body.classList.add('contact');
        document.body.classList.remove('portfolio');
        document.body.classList.remove('home');
    })

})