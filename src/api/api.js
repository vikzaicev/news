import axios from "axios";

const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = 'EP4USLA3EVZtYwtFdp0V8CBx1j_LlGev0Ih1c8xApAliNWuA'

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY
            }
        }
        )
        return response.data;
    } catch (error) {
        console.log(error);

    }
}