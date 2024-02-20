document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');

    blogForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents the default form submission action

        // Get values from form
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const author = document.getElementById('author').value; // Capture the author name

        // Create elements for the new post
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        const authorP = document.createElement('p');
        const contentP = document.createElement('p');
        const currentTime = new Date().toISOString().slice(0, 10);

        // Set content
        h2.textContent = title;
        authorP.innerHTML = `Posted on <time datetime="${currentTime}">${currentTime}</time> by ${author}`;
        contentP.textContent = content;

        // Append new elements to the article
        article.appendChild(h2);
        article.appendChild(authorP);
        article.appendChild(contentP);

        // Append the new article to the blogPosts section
        document.getElementById('blogPosts').appendChild(article);

        // Clear form fields
        blogForm.reset();
    });
});