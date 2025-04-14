import style from "./style.module.css"



export const Langue = ({ languages }) => {
    return (
        <div className={style.langue}>
            {languages.map((item) => {
                return (
                    <div className={style.item} key={item} >{item}</div>
                )
            })}
        </div>
    )
}