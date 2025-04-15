import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect, useState } from "react"

import { getLangue, getNews, getCategories } from "../../api/api"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"
import { Langue } from "../../components/Langue/Langue"
import { Categori } from "../../components/Categori/Categori"



export const Main = () => {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [selectCategory, setSelectCategory] = useState('All')
    const [selectLangyage, setSelectLanguage] = useState('en')
    const [isLoading, setISLoading] = useState(true)
    const [languages, setLanguages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const totalPage = 10
    const pageSaze = 10

    const fethNews = async () => {
        try {
            setISLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSaze,
                category: selectCategory === 'All' ? null : selectCategory,
                lang: selectLangyage === 'en' ? null : 'ru'
            })
            setNews(response.news)
            setISLoading(false)
            // console.log(response.news);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fethNews(currentPage)
    }, [currentPage, selectCategory, selectLangyage])

    const fethCategories = async () => {
        try {

            const response = await getCategories()
            setCategories(["All", ...response.categories])
            // console.log(response.categories);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fethCategories()
    }, [])

    const fethLaguages = async () => {
        try {

            const response = await getLangue()
            let data = []
            for (let key in response.languages) {
                data.push(key)
            }
            setLanguages(data)

            // console.log(data);

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
            <Langue languages={languages} selectLangyage={selectLangyage} setSelectLanguage={setSelectLanguage} />
            <Categori categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
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