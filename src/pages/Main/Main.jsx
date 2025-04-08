import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect, useState } from "react"
import { getNews } from "../../api/api"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"


export const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setISLoading] = useState(true)
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