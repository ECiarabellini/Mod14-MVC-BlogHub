const submitComment = async (event) => {
    event.preventDefault();

    const contents = document.querySelector('#comment').value.trim();    // Collect values from the comment field

    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to related_post id.
    const related_post = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
    ];


    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comment', {
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
            console.log('addcomments line 25------------------------')
            alert('Comment failed.', response.statusText);
        };
    };
};

document
    .querySelector('#comment-form')
    .addEventListener('submit', submitComment);