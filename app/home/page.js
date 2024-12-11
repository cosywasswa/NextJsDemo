import Link from "next/link"
import Image from "next/image"
import home_image from '../../images/home-image-1.jpg'
import style from './home.module.css'

const page = () => {
    return (
        <main>
            <div className={style.bgWrap}>
<Image src={home_image}
alt="Our story image"
placeholder="blur"
quality={100}
sizes={'100vw'}
fill
style={{
    objectFit: 'cover'
}}
/>
            </div>
                <h1 className={style.bgHeader}>Humble begginings a story of life</h1>
            <p className={style.bgText}>How we became the farmers of the future, tilling the technology of
                tomorrow today.</p> {" "}
        </main>
    )
}

export default page