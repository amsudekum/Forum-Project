//we will need to double check query selectors, some pages haven't been made as of 3/27
const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
    
    if(comment_text){
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_text })
        }
    )};

    if (Response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#form-comment').addEventListener('submit', commentFormHandler);