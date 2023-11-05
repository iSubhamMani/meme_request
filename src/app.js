import { MemeUrl } from "./fetch_url";
import loadMeme from "./load_meme";
import toggleNav from "./toggle_nav_elements";

const nextMeme = document.getElementById('next-meme-btn');
const wholesomeMemes = document.getElementById('wholesomememes');
const dankMemes = document.getElementById('dankmemes');
const meIrl = document.getElementById('me_irl');
const historyMemes = document.getElementById('historymemes');
const comedyHeaven = document.getElementById('comedyheaven');

wholesomeMemes.addEventListener('click', (e) => {
    if(!(e.target.classList.contains("active"))) {
        toggleNav();
        wholesomeMemes.classList.add("active");
        MemeUrl.setMemeUrl('wholesomememes');
        loadMeme();
    }
});

dankMemes.addEventListener('click', (e) => {
    if(!(e.target.classList.contains("active"))) {
        toggleNav();
        dankMemes.classList.add("active");
        MemeUrl.setMemeUrl('dankmemes');
        loadMeme();
    }
});

meIrl.addEventListener('click', (e) => {
    if(!(e.target.classList.contains("active"))) {
        toggleNav();
        meIrl.classList.add("active");
        MemeUrl.setMemeUrl('me_irl');
        loadMeme();
    }
});

historyMemes.addEventListener('click', (e) => {
    if(!(e.target.classList.contains("active"))) {
        toggleNav();
        historyMemes.classList.add("active");
        MemeUrl.setMemeUrl('HistoryMemes');
        loadMeme();
    }
});

comedyHeaven.addEventListener('click', (e) => {
    if(!(e.target.classList.contains("active"))) {
        toggleNav();
        comedyHeaven.classList.add("active");
        MemeUrl.setMemeUrl('comedyheaven');
        loadMeme();
    }
});

nextMeme.addEventListener('click', () => {
    // Fetch a new meme
    loadMeme();
});

loadMeme();