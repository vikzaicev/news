import style from "./style.module.css"
import { solution } from "../../helpers/Codewars"
export const Skeleton = ({ count = 1, type = 'baner' }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={style.list}>
                    {[...Array(count)].map((_, index) => (


                        <li key={index} className={type === 'baner' ? style.baner : style.item}></li>
                    ))}
                </ul>
            ) : <li className={type === 'item' ? style.item : style.baner}></li>

            }
        </>
    )
}