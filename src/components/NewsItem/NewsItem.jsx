import style from "./style.module.css"

export const NewsItem = ({ item }) => {

    return (
        <div className={style.baner}>
            <div className={style.wraperr} style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className={style.info}>
                <h3 className={style.title}>{item?.title}</h3>
                <p className={style.extra}>{item?.author}</p>
            </div>
        </div >
    )
}