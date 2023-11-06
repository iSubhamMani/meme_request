import loadImage from "blueimp-load-image";
import fetchNewMeme from "./fetch_meme";
import Meme from "./models/Meme";

export default async function loadMeme () {
    const loadAnim = document.getElementById('lds-ellipsis');
    const imageElement = document.getElementById('meme-img');

    imageElement.textContent = "";
    loadAnim.style.display = 'inline-block';

    const meme = new Meme(await fetchNewMeme());
    
    if(meme) {
        loadAnim.style.display = 'none';
    }

    //load image
    const data = await loadImage(meme.image_url);
    const scaledImg = loadImage.scale(data.image, {maxWidth:400, maxHeight:400});

    imageElement.textContent = "";
    imageElement.appendChild(scaledImg);

    //load texts
    const memeTitle = document.getElementById('meme-title');
    memeTitle.textContent = meme.title;

    const memeAuthor = document.getElementById('meme-author');
    memeAuthor.textContent = meme.author;
}