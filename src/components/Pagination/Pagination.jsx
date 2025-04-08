import style from "./style.module.css"


export const Pagination = ({ totalPage, handNextPage, handPrevPage, handPageClick, currentPage }) => {
    return (
        <div className={style.pagination}>
            <button className={style.arrow} onClick={handPrevPage} disabled={currentPage <= 1} >{'<'}</button>
            <div className={style.list}>
                {[...Array(totalPage)].map((_, index) => {
                    return (
                        <button onClick={() => handPageClick(index + 1)} className={style.pagenumber} key={index} disabled={index + 1 == currentPage}>{index + 1}</button>
                    )
                })}
            </div>
            <button className={style.arrow} onClick={handNextPage} disabled={currentPage >= totalPage}> {'>'}</button >
        </div >
    )
}