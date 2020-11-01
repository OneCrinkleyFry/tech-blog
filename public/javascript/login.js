async function createProfileHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-create').value.trim();
    const email = document.querySelector('#email-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users/', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) console.log('success');
        else alert(response.statusText);
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) document.location.replace('/dashboard');
        else alert(response.statusText);
    }
}

document.querySelector('.create-form').addEventListener('submit', createProfileHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);