const createNewPost = async (event) => {
    event.preventDefault();
    console.log('createpost line 3------------------------')

    // Collect values from the post fields
    const title = document.querySelector('#post-title').value.trim();    
    const contents = document.querySelector('#post-content').value.trim();

    console.log(title, contents, 'title, contents on createPost.js ------------------------------')

    if (title && contents) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/createPost', {
            method: 'POST',
            body: JSON.stringify({
                title,
                contents,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            // If successful, reload the page to show comment
            document.location.reload();
        } else {
            console.log('createPost line 26------------------------')
            alert('Post failed.', response.statusText);
        };
    };
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', createNewPost);