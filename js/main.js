const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');

loginContainer.classList.add('active');
signupContainer.classList.remove('active');

const formTitles = document.querySelectorAll('.form-title');

formTitles.forEach(title => {
    title.addEventListener('click', () => {
        const target = title.dataset.target;

        if (target === 'login') {
            loginContainer.classList.add('active');
            signupContainer.classList.remove('active');

            document.querySelector('[data-target="login"]').classList.add('active');
            document.querySelector('[data-target="signup"]').classList.remove('active');
        }
        else if (target === 'signup') {
            signupContainer.classList.add('active');
            loginContainer.classList.remove('active');

            document.querySelector('[data-target="signup"]').classList.add('active');
            document.querySelector('[data-target="login"]').classList.remove('active');
        }
    });
});