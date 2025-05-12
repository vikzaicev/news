
import { BannerList } from "../BannerList/BannerList"
import style from "./style.module.css"

export const LatestNews = ({ banners, isLoading }) => {

    return (
        <section className={style.section}>
            {!isLoading ? <BannerList banners={banners} isLoading={isLoading} /> : null}
        </section>
    )
}