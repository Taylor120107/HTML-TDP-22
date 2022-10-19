const sections = document.querySelectorAll(`section`);
const sectBtns = document.querySelectorAll(`.controlls`);
const allSections = document.querySelector(`.main-content`);

(function () {
    document.querySelectorAll(`.control`).forEach(btn => {
        btn.addEventListener('click', function() {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    });
})();
