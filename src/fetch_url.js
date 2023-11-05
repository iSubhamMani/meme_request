export const MemeUrl = (() => {
    const default_url = 'https://meme-api.com/gimme/wholesomememes';
    let fetch_url = default_url;

    const getMemeUrl = () => {
        return fetch_url;
    }

    const setMemeUrl = (sub_channel) => {
        fetch_url = `https://meme-api.com/gimme/${sub_channel}`;
    }

    return {
        getMemeUrl,
        setMemeUrl
    }

})();