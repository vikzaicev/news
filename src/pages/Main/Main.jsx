import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect, useState } from "react"
import { getLangue, getNews } from "../../api/api"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"
import { Langue } from "../../components/Langue/Langue"


export const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setISLoading] = useState(true)
    const [languages, setLanguages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = 10
    const pageSaze = 10

    const fethNews = async () => {
        try {
            setISLoading(true)
            const response = await getNews(currentPage, pageSaze)
            setNews(response.news)
            setISLoading(false)
            console.log(response.news);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fethNews(currentPage)
    }, [currentPage])

    const fethLaguages = async () => {
        try {

            const response = await getLangue()
            let data = []
            for (let key in response.languages) {
                data.push(key)
            }
            setLanguages(data)

            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fethLaguages()
    }, [])

    const handNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handPageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={style.main}>
            <Langue languages={languages} />
            {news.length > 0 && !isLoading ? <NewsBaner item={news[0]} /> : <Skeleton count={1} type={'baner'} />}
            <Pagination
                handNextPage={handNextPage}
                handPrevPage={handPrevPage}
                handPageClick={handPageClick}
                currentPage={currentPage}
                totalPage={totalPage} />
            {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type='item' />}
            <Pagination
                handNextPage={handNextPage}
                handPrevPage={handPrevPage}
                handPageClick={handPageClick}
                currentPage={currentPage}
                totalPage={totalPage} />
        </main>
    )
}