export default async function fetchNewMeme () {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes", {
            mode: "cors"
        })
        const fresponse = await response.json();
        return fresponse;
    }
    catch {

    }
}