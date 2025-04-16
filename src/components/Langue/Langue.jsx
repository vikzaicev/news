import style from "./style.module.css"

export const Langue = ({ languages, selectLangyage, setSelectLanguage }) => {

    let data = []
    for (let key in languages) {
        data.push(key)
    }
    const leng = (i) => {
        for (let key in languages) {
            if (key == i) {
                setSelectLanguage(languages[key])
            }
        }
    }
    console.log(selectLangyage);

    return (
        <div className={style.langue}>
            {data.map((item) => {
                return (
                    <div className={
                        selectLangyage == item ? style.activ : style.item
                    }
                        key={item}
                        onClick={() => leng(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}