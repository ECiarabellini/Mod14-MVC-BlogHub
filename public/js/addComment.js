const submitComment = async (event) => {
    event.preventDefault();
    console.log('addcomments line 3------------------------')

    // Collect values from the comment field
    const contents = document.querySelector('#comment').value.trim();
    const related_post = 1;  ///need to update this to pull from URL!!!!!!!!!!!!!
    

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogpost/comment', {
            method: 'POST',
            body: JSON.stringify({
                contents,
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
            alert('Comment failed.', response.statusText);
        };
    };
};

document
    .querySelector('#submitComment')
    .addEventListener('submit', submitComment);