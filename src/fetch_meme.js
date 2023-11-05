import { MemeUrl } from "./fetch_url";

export default async function fetchNewMeme () {
    try {
        const response = await fetch(MemeUrl.getMemeUrl(), {
            mode: "cors"
        })
        const fresponse = await response.json();
        return fresponse;
    }
    catch {

    }
}