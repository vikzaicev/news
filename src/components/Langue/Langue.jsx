import style from "./style.module.css"



export const Langue = ({ languages, selectLanguage, setSelectLanguage }) => {
    return (
        <div className={style.langue}>
            {languages.map((item) => {
                return (
                    <div className={selectLanguage == item ? style.activ : style.item} key={item} onClick={() => setSelectLanguage(item)} >{item}</div>
                )
            })}
        </div>
    )
}