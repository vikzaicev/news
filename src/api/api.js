import axios from "axios";

const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = 'h8Co-OZTrxUDO5SOAip4U10lkjk53Efyg8RoYbDwZAZ2oxeQ'
// const API_KEY = '3a960e7e599e42c6b386bccdaecc6346'
// const BASE_URL = 'https://newsapi.org/v2/everything?q=keyword&apiKey=3a960e7e599e42c6b386bccdaecc6346'

export const getNews = async (page_number = 1, page_size = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}search`,
            {
                params: {
                    apiKey: API_KEY,
                    page_number,
                    page_size
                }
            }
        )
        return response.data;
    } catch (error) {
        console.log(error);

    }
}