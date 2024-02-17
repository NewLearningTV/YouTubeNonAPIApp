document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('youtubeSearchForm');
    const container = document.getElementById('videoResults'); // Reference to the video results container

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        const searchTerm = document.getElementById('searchTerm').value.trim(); // Trim whitespace

        // Check for empty or null response
        if (!searchTerm) {
            alert("You cannot enter blank. Please enter a search term.");
            return; // Exit the function early
        }

        // Handle 'home' response
        if (searchTerm.toLowerCase() === 'home') {
            container.innerHTML = ''; // Clear any existing videos
            // Optionally, reset any other state or UI elements to their initial condition here
            return; // Exit the function early
        }

        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;

        // Check if the search term is "coding" or "코딩"
        if (searchTerm.toLowerCase() === "coding" || searchTerm === "코딩") {
            // Define video IDs for "coding" or "코딩"
            const videoIDs = ['nv03ypyVC7U', 'fXME3xdjzgU', 'hkMZyR3KOQw', 'EZrIcHYQwx8', 'UQu74DSvEPY',
    'ccaN6GCfFiM','2x8Bx7kVhCU','fNrPsPA6Lf8','tqM8IAIO7q8','r_nwIydakbE','Xm2u62NK1NQ','7CvkbrP28Zg'];
            displayVideos(videoIDs);
        } else {
            // Redirect the user to YouTube search for other terms
            window.location.href = youtubeSearchUrl;
        }
    });
});

function displayVideos(videoIDs) {
    const container = document.getElementById('videoResults');
    container.innerHTML = ''; // Clear existing videos

    // Apply grid styles to the container
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Creates a 4-column layout
    container.style.gap = '10px'; // Adds some space between the videos

    videoIDs.forEach(id => {
        const iframe = document.createElement('iframe');
        iframe.width = "100%"; // Make iframe take full width of the grid column
        iframe.height = "200"; // Set a fixed height
        iframe.src = `https://www.youtube.com/embed/${id}`;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen";

        // Wrap the iframe in a div that acts as the grid item
        const videoWrapper = document.createElement('div');
        videoWrapper.appendChild(iframe);
        container.appendChild(videoWrapper);
    });
}
