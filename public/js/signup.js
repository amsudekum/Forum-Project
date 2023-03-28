//we will need to double check query selectors, some pages haven't been made as of 3/27
const signUpFormHandler = async (event) => {
    event.preventDefault();
    
    const username = document.querySelector('#register-form-username').value.trim();
    const password = document.querySelector('#register-form-password').value.trim(); 

    if (username && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            console.log('Successful Login.');
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#form-signup').addEventListener('submit', signUpFormHandler)