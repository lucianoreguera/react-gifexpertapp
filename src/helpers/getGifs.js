// encodeURI() limpia la url, espacios en blanco etc
export const getGifs = async ( category ) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UUubMjczgjVvOWs51iSQ0AwuwxKuwt2c`;
    const response = await fetch(url);
    const { data } = await response.json();

    // muto el array solo con la info que necesito
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    return gifs;
};