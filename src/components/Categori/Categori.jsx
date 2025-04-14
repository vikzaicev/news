import style from "./style.module.css"



export const Categori = ({ categories, setSelectCategory, selectCategory }) => {
    return (
        <div className={style.categori}>
            {categories.map((item) => {
                return (
                    <div className={selectCategory == item ? style.activ : style.item} key={item} onClick={() => setSelectCategory(item)}>{item}</div>
                )
            })}
        </div>
    )
}