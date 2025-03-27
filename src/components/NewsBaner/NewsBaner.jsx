import { Image } from "../Image/Image"
import style from "./style.module.css"

export const NewsBaner = ({ item }) => {
    return (
        <div className={style.baner}>
            <Image image={item?.image} />
            {/* <h3 className={style.title}>{item.title}</h3>
            <p className={style.extra}>{item.autor}</p> */}
        </div>
    )
}