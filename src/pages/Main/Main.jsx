import style from "./style.module.css"
import { NewsBaner } from "../../components/NewsBaner/NewsBaner"
import { useEffect, useState } from "react"
import { getNews } from "../../api/api"

const DATA = [
    { id: '4fd50364-a9c4-4c49-a920-6cd59a6416c2', title: "GrabCab gets licence to run street-hail service, becoming Singapore's 6th taxi operator", description: "SINGAPORE: GrabCab will be Singapore's sixth taxi …to progressively expand its fleet to meet the min", url: 'https://www.channelnewsasia.com/singapore/grabcab-licence-taxi-operator-6th-lta-street-hail-5038846', author: 'CNA', },


    { id: '8353139e-969b-44b9-b1a8-6534a788e7de', title: 'Dogwifhat Abandons Las Vegas Sphere Plans, Team to Refund Nearly $700K - Decrypt', description: 'Decrypt’s Art, Fashion, and Entertainment Hub. Dis…oin on the Las Vegas Sphere, over a year after...', url: 'https://decrypt.co/312720/dogwifhat-las-vegas-sphere-solana-meme-coin-refund-700k', author: 'Decrypt', }
    ,

    { id: '59f74a8f-b5c4-4449-a6bb-b474ae57ec61', title: '2024 World Series Final Out Ball Hits Auction, Raising Money For L.A. Wildfire Relief', description: 'Play video content TMZSports.com\n\nA piece of Major… and it may be a long time before an item like...', url: 'https://www.tmz.com/2025/04/01/2024-world-series-baseball-auction/', author: 'TMZ Staff', }
    ,

    { id: '1d355faf-42c5-4849-9ae7-af09c5cd7d72', title: "DJ Whoo Kid Says Drake Letting Kendrick Beef Cook In 'Nokia' Video Is Good For Rap", description: 'Play video content TMZ.com\n\nFans suspect parts of …d loves every bit of the spectacle!!!\n\nTMZ Hip...', url: 'https://www.tmz.com/2025/04/01/dj-whoo-kid-drake-nokia-video-kendrick-lamar/', author: 'TMZ Staff', }

    ,
    { id: '9abdab2e-a7a8-4242-9498-8703ef50352f', title: 'Hollywood Besties Jennifer Garner and Judy Greer Reunite in France', description: "Hollywood actresses Jennifer Garner and Judy Greer… hard, but they're playing even harder in France!", url: 'https://www.tmz.com/2025/04/01/jennifer-garner-judy-greer-reunite-in-france/', author: 'TMZ Staff', }
    ,

    { id: 'd5262038-6985-4b30-84ae-011c0021bc8f', title: "'Love is Blind' Mark Anthony Cuevas Denies Cheating, Didn't Blindside Wife With Breakup Post", description: "Mark Cuevas is shutting down the cheating allegati… -- a declaration she's said came as news to her.", url: 'https://www.tmz.com/2025/04/01/love-is-blind-mark-…s-denies-cheating-blindside-wife-separation-post/', author: 'TMZ Staff', }
    ,

    { id: '6a5dfaf8-cdb0-4f9f-aee7-a61a57b37c5e', title: 'Lauren Boebert Confuses Oliver Stone For Roger Stone at JFK Assassination Hearing', description: "Play video content\n\nHere's an embarrassing history…t Trump's ally Roger Stone actually did!\n\nThe ...", url: 'https://www.tmz.com/2025/04/01/lauren-boebert-confuses-oliver-stone-roger-stone-jfk-assassination/', author: 'TMZ Staff', }

    ,
    { id: '671af3f6-74f2-476b-8ac7-0b91f33e7299', title: "'Malcolm in the Middle' Erik Per Sullivan Spotted for First Time in 18 Years", description: "Erik Per Sullivan used to be on TV all the time as…nd now he's finally been spotted in his new life.", url: 'https://www.tmz.com/2025/04/01/malcolm-in-the-middle-erik-per-sullivan-dewey-rare-sighting/', author: 'TMZ Staff', }

    ,
    { id: '604deb57-140e-4d37-afb5-1641ea60339c', title: 'Cory Booker Gets Standing Ovation For Breaking Record For Longest Senate Speech', description: 'Play video content C-SPAN\n\nCory Booker just made h…ng ovation.\n\nThe Senator from New Jersey has b...', url: 'https://www.tmz.com/2025/04/01/cory-booker-gets-st…ding-ovation-breaking-senate-floor-speech-record/', author: 'TMZ Staff', }
    ,
    { id: 'dcacacb4-60a4-40dd-9fa7-809cf9f99225', title: "Morgan Wallen Selling 'Get Me To God's Country' Merch After 'SNL' Exit", description: 'Morgan Wallen is looking to cash in on his viral e…Live" ... selling merch with his new catchphrase.', url: 'https://www.tmz.com/2025/04/01/morgan-wallen-selling-get-me-to-gods-country-merch-after-snl-exit/', author: 'TMZ Staff', }
    ,
    { id: 'f34b6b43-d3ec-40b8-9190-cb8ce7487c90', title: 'Body of fourth US soldier found in Lithuania – DW – 04/01/2025', description: 'US and Lithuanian officials said the body of a fou…e sank into a swampy area of the training ground.', url: 'https://www.dw.com/en/body-of-fourth-us-soldier-found-in-lithuania/a-72109879', author: 'dw', }
    ,
    { id: '3b606e2b-c07b-4a51-bb97-6983ba15e625', title: 'Netanyahu visits Hungary, defying ICC arrest warrant – DW – 04/01/2025', description: 'Israeli Prime Minister Benjamin Netanyahu is flout…onal Criminal Court has limited means to respond.', url: 'https://www.dw.com/en/netanyahu-visits-hungary-defying-icc-arrest-warrant/a-72106304', author: 'dw', }
    ,
    { id: 'ef47b9dd-6d6d-4c93-91a2-d34ddf5c8c40', title: "Ukraine updates: Russia says it can't accept US peace deal – DW – 04/02/2025", description: 'Skip next section More than $8 billion of frozen R…s held in Switzerland\n\nThe value of Russian as...', url: 'https://www.dw.com/en/ukraine-updates-russia-says-it-cant-accept-us-peace-deal/live-72102593', author: 'Elizabeth Schumacher', }
    ,
    { id: '0c8dcfc1-cdcf-4228-ad0b-3306ef6022e8', title: 'Marine Le Pen verdict leaves supporters and critics uneasy – DW – 04/01/2025', description: 'Legal experts say the sentencing of French far-rig…ury among supporters, and disquiet among critics.', url: 'https://www.dw.com/en/marine-le-pen-verdict-leaves-supporters-and-critics-uneasy/a-72109174', author: 'dw', }
    ,
    { id: 'da3a7eb1-7249-4225-8f0b-5800cdebf927', title: 'Ukraine, Russia complain to Washington about strikes on energy sites', description: 'A view of the Zaporizhzhia Nuclear Power Station, …ne of your browser extensions seems to be bloc...', url: 'https://www.france24.com/en/europe/20250402-ukraine-russia-washington-energy', author: 'FRANCE 24', }
    ,
    { id: '51d1acc1-a57e-4d31-8a3e-ae0ae573e898', title: 'Officials: 3 hurt in shooting spree that started in Las Vegas, ended in California', description: 'Police said the suspect, Antonio Chaidez, 35, alle…ng a store clerk. He then fired additional ......', url: 'https://www.8newsnow.com/news/local-news/officials…ee-that-started-in-las-vegas-ended-in-california/', author: '', }
    ,
    { id: '5b4307b1-d11d-43e4-b19f-a7dd989630c1', title: 'Myanmar rebel alliance declares unilateral ceasefire to support quake response', description: 'A major rebel alliance in Myanmar on Tuesday (Apri…h comprises of the Myanmar National Democratic...', url: 'https://www.asiaone.com/asia/myanmar-rebel-allianc…lares-unilateral-ceasefire-support-quake-response', author: '', }
    ,
    { id: 'dde8d5a4-6acf-4b7c-909d-50a3b454151a', title: 'In search of solutions for 2D synthesis', description: 'Solution-processed 2D materials could be of use in…erials remains an issue.\n\nIt is just over 20 y...', url: 'https://www.nature.com/articles/s41928-025-01372-8', author: 'nature', }
    ,
    { id: 'c19fd6bc-2dfe-4087-a4e5-bd7bc5d49926', title: 'Electrodermal activity as a proxy for sweat rate monitoring during physical and mental activities', description: 'Electrodermal activity has long been used for ment…h sweat gland density. However, electrodermal ...', url: 'https://www.nature.com/articles/s41928-025-01365-7', author: 'Kim', }
    ,
    { id: '5e9cb4f3-81b5-4411-be50-6f59bb1f34ce', title: 'Terahertz wireless interconnects for cryogenic electronics', description: 'Thank you for visiting nature.com. You are using a…e up to date browser (or turn off compatibilit...', url: 'https://www.nature.com/articles/s41928-025-01356-8', author: 'nature', }
    ,
    { id: '54bcad9b-cf8b-4eb7-96d0-33d5bd7b77a3', title: 'Publisher Correction: A high-frequency artificial …ly integrated organic electrochemical transistors', description: 'In the version of the article initially published,… nm”), and the last sentence in the second par...', url: 'https://www.nature.com/articles/s41928-025-01378-2', author: 'Wang', }
    ,
    { id: '3d99004c-e00b-4307-9cec-d35bf8c95f5c', title: '2873. Maximum Value of an Ordered Triplet I', description: '3394. Check if Grid can be Cut into Sections\n\n2115…ers\n\n3306. Count of Substrings Containing Ever...', url: 'https://dev.to/mdarifulhaque/2873-maximum-value-of-an-ordered-triplet-i-3m9i', author: 'MD ARIFUL HAQUE', }
    ,
    { id: '3ca8b51e-12e5-476c-b702-3c2d79628f7b', title: 'UN urges aid to Myanmar quake survivors before monsoons hit, death toll climbs towards 3,000', description: 'United Nations officials who surveyed earthquake d…ass 3,000.\n\nDrinking water, hygiene, food, she...', url: 'http://www.asiaone.com/asia/un-urges-aid-myanmar-q…ivors-monsoons-hit-death-toll-climbs-towards-3000', author: '', }
    ,
    { id: '770590da-9c05-4f19-a1e2-b59bf0c91133', title: 'Near Freezing Tonight, Breezy & Cool Wednesday, Wet Again Thursday', description: 'Near Freezing Tonight, Breezy & Cool Wednesday, We…More cloud cover will be around along with a c...', url: 'https://www.wgal.com/article/near-freezing-tonight-breezy-cool-wednesday-wet-again-thursday/64355802', author: 'Mike Susko', }
    ,
    { id: 'f03b8c29-b4e5-404f-b805-8c6ab9866a95', title: '2 found dead after house fire were killed in murder-suicide', description: 'Man, woman found dead after Dauphin County house f…were killed in a murder-suicide, according to ...', url: 'https://www.wgal.com/article/dauphin-county-man-woman-murder-suicide-house-fire/64356167', author: 'wgal', }
    ,
    { id: '72bec3e9-82cc-4b59-8718-1c34776d6b8b', title: "Diddy accuser claims Beyoncé, Jay-Z were witnesses at Miami 'freak-off' party: lawsuit", description: `Sean "Diddy" Combs was accused of human traffickin…t named as defendants in Joseph Manzaro's filing.`, url: 'https://www.foxnews.com/entertainment/diddy-accuse…ay-z-were-witnesses-miami-freak-off-party-lawsuit', author: 'Fox News', }
    ,
    { id: '497bd3c5-163c-4081-838c-b4145b824280', title: "Milwaukee polling places running out of ballots amid 'historic turnout' by voters", description: `Milwaukee is facing a ballot shortage due to "hist…eological direction of the state's Supreme Court.`, url: 'https://www.foxnews.com/politics/milwaukee-polling…-running-out-ballots-amid-historic-turnout-voters', author: 'Fox News', }
    ,
    { id: '625ed305-1e7a-416a-a244-481cdce309e8', title: 'Fort Myers pizza shop&#39;s slices named third best in Southeast U.S. at international event', description: 'AI-assisted summary Aguila competed in the best sl…da.\n\nAguila is also a competing member of the ...', url: 'https://www.news-press.com/story/life/food/2025/04…ternational-competition-in-las-vegas/82742816007/', author: '', }
    ,
    { id: '96152e70-f88c-462d-8822-e1922ae9b223', title: 'Make the Todo App Anyway', description: 'They’ll tell you not to make a todo app. “It’s been done.” “It’s boring.” “It won’t go...', url: 'https://dev.to/adnjoo/make-the-todo-app-anyway-3cjp', author: 'Andrew Njoo', }
    ,
    { id: 'ce702874-0ce1-4cfd-9099-4828ad6eb893', title: 'Dolce & Gabbana x SMEG: A taste of Italian craft, served in style', description: 'You’ll find it in the sculptures of Puglia, the di…nware known for its luminous white finish, an ...', url: 'https://cnaluxury.channelnewsasia.com/advertorial/…na-x-smeg-taste-italian-craft-served-style-257801', author: 'Brand Studio', }
    ,]
export const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fethNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
                console.log(response.news);

            } catch (error) {
                console.log(error);
            }
        }
        fethNews()
    }, [])
    return (
        <main className={style.main}>
            {news.length > 0 ? <NewsBaner item={news[0]} /> : null}

        </main>
    )
}