import loadImage from "blueimp-load-image";
import fetchNewMeme from "./fetch_meme";
import Meme from "./models/Meme";

export default async function loadMeme () {

    const meme = new Meme(await fetchNewMeme());

    //load image
    const data = await loadImage(meme.image_url);
    const scaledImg = loadImage.scale(data.image, {maxWidth:600, maxHeight:400});

    const imageElement = document.getElementById('meme-img');
    imageElement.textContent = "";
    imageElement.appendChild(scaledImg);

    //load texts
    const memeTitle = document.getElementById('meme-title');
    memeTitle.textContent = meme.title;

    const memeAuthor = document.getElementById('meme-author');
    memeAuthor.textContent = meme.author;
}