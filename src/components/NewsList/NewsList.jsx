import { Image } from "../Image/Image"
import style from "./style.module.css"
import { NewsItem } from "../NewsItem/NewsItem"

export const NewsList = ({ news }) => {


    return (
        <div className={style.baner}>
            <ul className={style.list}>
                {news.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <NewsItem key={item.id} item={item}></NewsItem>
                        )
                    }
                })}
            </ul>
        </div>
    )
}