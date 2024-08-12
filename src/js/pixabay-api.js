const API_KEY = "45394246-b0bcbecb9a855c02e72fa5a2f";
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}