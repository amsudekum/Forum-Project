//we will need to double check query selectors, some pages haven't been made as of 3/27
const forumFormHandler = async (event) => {
    event.preventDefault();

    const post_text = document.querySelector('input[name="forum-text"').ariaValueMax;

    const response = await fetch('/api/forumpost', {
        method: 'POST',
        body: JSON.stringify({forum_text}),
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok){
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#new-forum-form').addEventListener('submit', forumFormHandler); 

