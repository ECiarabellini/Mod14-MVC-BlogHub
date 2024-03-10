const submitComment = async (event) => {
    event.preventDefault();

    // Collect values from the comment field
    const contents = document.querySelector('#comment').value.trim();
    const created_by = 1; //need to update this to the logged in user or route??
    const related_post = 1;
    
    console.log('addcomments line 9------------------------')

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogposts/comment', {
            method: 'POST',
            body: JSON.stringify({
                contents,
                created_by,  
                related_post,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if (response.ok) {
            // If successful, reload the page to show comment
            document.location.reload();
        } else {
            console.log('addcomments line 27------------------------')
            alert(response.statusText);
        };
    };
};


document
    .querySelector('#submitComment')
    .addEventListener('submit', submitComment);