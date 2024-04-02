document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.container__right__login');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        // Extract values from form
        const firstName = document.querySelector('.login__firstname').value;
        const lastName = document.querySelector('.login__lastname').value;
        const email = document.querySelector('.login__email').value;
        const password = document.querySelector('.login__password').value;

        // Log the values to the console
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
    });
});
