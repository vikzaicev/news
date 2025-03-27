
import style from "./style.module.css"

export const Image = ({ image }) => {
    return (
        <div className={style.wrapper}>
            {image ? <img src={image} alt="bews" className={style.image} /> : null}
        </div>
    )
}