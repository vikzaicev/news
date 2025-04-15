import style from "./style.module.css"



export const Langue = ({ languages, selectLangyage, setSelectLanguage }) => {
    return (
        <div className={style.langue}>
            {languages.map((item) => {
                return (
                    <div className={selectLangyage == item ? style.activ : style.item} key={item} onClick={() => setSelectLanguage(item)}>{item}</div>
                )
            })}
        </div>
    )
}