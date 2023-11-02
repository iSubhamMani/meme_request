import loadMeme from "./load_meme";

const nextMeme = document.getElementById('next-meme-btn');

nextMeme.addEventListener('click', () => {
    // Fetch a new meme
    loadMeme();
});

loadMeme();