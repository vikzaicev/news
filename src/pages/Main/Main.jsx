import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect } from "react"
import { getNews } from "../../api/api"

export const Main = () => {

    useEffect(() => {
        const fethNews = async () => {

            try {
                const news = await getNews()
                console.log(news);


            } catch (error) {
                console.log(error);

            }
        }
        fethNews()
    }, [])
    return (
        <main className={style.main}><NewsBaner /></main>
    )
}