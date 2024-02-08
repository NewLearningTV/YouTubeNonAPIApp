document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('youtubeSearchForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Comment out the redirection for now
        // const searchTerm = document.getElementById('searchTerm').value;
        // const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchTerm)}`;
        // window.location.href = youtubeSearchUrl; // Redirect the user to YouTube search

        // For demonstration, we're calling displayVideos here, but in practice,
        // you'd fetch relevant video IDs based on the searchTerm and then display those.
        displayVideos(videoIDs);
    });
});

// Predefined video IDs; replace these with dynamically fetched IDs based on search term in the future
const videoIDs = ['nv03ypyVC7U', 'fXME3xdjzgU', 'hkMZyR3KOQw', 'EZrIcHYQwx8', 'UQu74DSvEPY',
    'ccaN6GCfFiM','2x8Bx7kVhCU','fNrPsPA6Lf8','tqM8IAIO7q8','r_nwIydakbE','Xm2u62NK1NQ','7CvkbrP28Zg'];

function displayVideos(videoIDs) {
    const container = document.getElementById('videoResults');
    container.innerHTML = ''; // Clear existing videos

    videoIDs.forEach(id => {
        const iframe = document.createElement('iframe');
        iframe.width = "300";
        iframe.height = "200";
        iframe.src = `https://www.youtube.com/embed/${id}`;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen";

        container.appendChild(iframe);
    });
}