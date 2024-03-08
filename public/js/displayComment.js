const submitComment = async (event) => {
    event.preventDefault();

    // Collect values from the comment field
    const comment = document.querySelector('#comment').value.trim();
    
    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogposts/comment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, reload the page to show comment
            document.location.reload();
        } else {
            alert(response.statusText);
        };
    }
};


document
    .querySelector('#submitComment')
    .addEventListener('submit', submitComment);