import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect, useState } from "react"
import { getLangue, getNews, getCategories } from "../../api/api"
import { NewsList } from "../../components/NewsList/NewsList"
import { Pagination } from "../../components/Pagination/Pagination"
import { Langue } from "../../components/Langue/Langue"
import { Categori } from "../../components/Categori/Categori"
import { Search } from "../../components/Search/Search"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constans/constants"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { useFilters } from "../../helpers/hooks/useFilters"
//import { useFetch } from "../../helpers/hooks/useFetch"

export const Main = () => {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    // const [selectCategory, setSelectCategory] = useState('All')
    // const [selectLangyage, setSelectLanguage] = useState('en')
    const [isLoading, setISLoading] = useState(true)
    const [languages, setLanguages] = useState([])
    // const [currentPage, setCurrentPage] = useState(1)
    //const [keywords, setKeyword] = useState('')

    // const [filters, setFilters] = useState({
    //     page_number: 1,
    //     page_size: PAGE_SIZE,
    //     category: null,
    //     language: null,
    //     keywords: '',
    // })

    // const changeFilters = (key, value) => {
    //     setFilters((prev) => {
    //         return { ...prev, [key]: value }
    //     })
    // }

    const { filters, changeFilters } = useFilters(
        {
            page_number: 1,
            page_size: PAGE_SIZE,
            category: null,
            language: null,
            keywords: '',
        }
    )
    const debouncedKeyword = useDebounce(filters.keywords, 1500)

    // const { data, error, } = useFetch(getNews,
    //     {
    //         page_number: currentPage,
    //         page_size: PAGE_SIZE,
    //         category: selectCategory === 'All' ? null : selectCategory,
    //         language: selectLangyage === 'en' ? null : selectLangyage,
    //         keywords: debouncedKeyword
    //     }
    // )

    // const { data: dataCategories } = useFetch(getCategories)

    const fethNews = async () => {
        try {
            setISLoading(true)
            const response = await getNews({
                // page_number: currentPage,
                // page_size: PAGE_SIZE,
                // category: selectCategory === 'All' ? null : selectCategory,
                // language: selectLangyage === 'en' ? null : selectLangyage,
                ...filters,
                keywords: debouncedKeyword
            })
            setNews(response.news)
            setISLoading(false)
            // console.log(response.news);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fethNews(filters.page_number)
    }, [filters.page_number, filters.category, filters.language, debouncedKeyword])

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
            setLanguages(response.languages)
            // console.log(response.languages);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fethLaguages()
    }, [])

    const handNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            //setCurrentPage(filters.page_number + 1)
            changeFilters("page_number", filters.page_number + 1)
        }
    }

    const handPrevPage = () => {
        if (filters.page_number > 1) {
            //setCurrentPage(filters.page_number - 1)
            changeFilters("page_number", filters.page_number - 1)
        }
    }

    const handPageClick = (pageNumber) => {
        //setCurrentPage(pageNumber)
        changeFilters("page_number", pageNumber)
    }

    return (
        <main className={style.main}>
            <Langue
                languages={languages}
                selectLangyage={filters.language}
                setSelectLanguage={(language) => changeFilters("language", language)} />
            {categories ? <Categori
                categories={categories}
                selectCategory={filters.category}
                setSelectCategory={(category) => changeFilters("category", category)} /> : null}
            <Search keywords={filters.keywords} setKeyword={(keywords) => changeFilters("keywords", keywords)} />
            {news.length > 0 && !isLoading ? <NewsBaner item={news[0]} /> : <Skeleton count={1} type={'baner'} />}
            <Pagination
                handNextPage={handNextPage}
                handPrevPage={handPrevPage}
                handPageClick={handPageClick}
                currentPage={filters.page_number}
                totalPage={TOTAL_PAGES} />
            {!isLoading ? <NewsList news={news} /> : <Skeleton count={10} type='item' />}
            <Pagination
                handNextPage={handNextPage}
                handPrevPage={handPrevPage}
                handPageClick={handPageClick}
                currentPage={filters.page_number}
                totalPage={TOTAL_PAGES} />
        </main>
    )
}