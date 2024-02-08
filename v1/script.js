document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('youtubeSearchForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        const searchTerm = document.getElementById('searchTerm').value;
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
        window.location.href = youtubeSearchUrl; // Redirect the user to YouTube search
    });
});
