export default class Meme {
    constructor (response){
        this.title = response.title;
        this.image_url = response.url;
        this.author = response.author
    }
}