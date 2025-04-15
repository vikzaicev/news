import style from "./style.module.css"


export const Search = ({ keywords, setKeyword }) => {
    return (
        <div className={style.search}>
            <input className={style.input} placeholder="спорт" value={keywords} onChange={(e) => setKeyword(e.target.value)} />
        </div>
    )
}