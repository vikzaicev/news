import { Image } from "../Image/Image"
import { NewsBaner } from "../NewsBaner/NewsBaner"
import style from "./style.module.css"

export const BannerList = ({ banners }) => {

    return (
        <ul className={style.banners}>
            {banners?.map((banner) => {
                return (
                    <NewsBaner key={banner.id} item={banner} />
                )
            })}
        </ul>
    )
}

