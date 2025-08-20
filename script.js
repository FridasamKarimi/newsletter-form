document.getElementById('newsletterForm').addEventListener('submit', function
    (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message');

        if (!document.getElementById('newsletterForm') || !document.getElementById('email') || !document.getElementById('message')) {
            console.error('One or more elements not found');
            return;
        }

        if (email) {
            message.textContent = `Thankyou for subscribing with ${email}!`;
            message.classList.add('text-green');
            message.classList.remove('text-red');

            form.reset();
        } else {
            message.textContent = 'Please enter a valid email address.';
            message.classList.add('text-red');
            message.classList.remove('text-green');

        }

    }
);
