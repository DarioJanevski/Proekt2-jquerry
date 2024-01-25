$(document).ready(function() {
    // Handle order form submission
    $('#orderForm').submit(function(event) {
        event.preventDefault();

        $('#successMessage').show();
        $('#customerName').val('');
        $('#customerEmail').val('');
        $('#productSelection').prop('selectedIndex', 0);
        $('#quantity').val('');
    });

    // Handle login form submission
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        if (username === 'dario' && password === 'dario') {
            alert('Login successful!');
            window.location.replace('proizvodi.html');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

let productLikes = {};

function likeProduct(productName) {
    productLikes[productName] = (productLikes[productName] || 0) + 1;
    updateLikeCounter(productName);
}

function updateLikeCounter(productName) {
    const likeCounter = $(`#likeCounter-${productName}`);

    if (likeCounter.length) {
        likeCounter.text(`Likes: ${productLikes[productName]}`);
    }
}

function addComment(productName) {
    const commentInput = $(`#comment-${productName}`);
    const commentText = commentInput.val().trim();

    if (commentText !== '') {
        const commentsDiv = $(`#comments-${productName}`);
        commentsDiv.append(`<p>${commentText}</p>`);
        commentInput.val('');
    }
}