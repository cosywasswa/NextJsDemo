import Link from "next/link"
import Image from "next/image"
import conferenceImage from '../../images/media-image-1.jpg'
import styles from '././../home/home.module.css'


const page = () => {
    return (
        <main>
           
            <div className={styles.bgWrap}>
                <Image
                src={conferenceImage}
                alt="conference pic"
                placeholder="blur"
                quality={100}
                sizes={'100vw'}
                fill
                style={{
                    objectFit: 'cover'
                }}
                 />
            </div>
            <h1 className={styles.bgHeader}>Welcome to the conference page</h1>
               <h2 className={styles.bgText}>
                <Link href='/conference/speakers' className={styles.bgLinks}>View Speakers</Link>
                </h2>
                <h2 className={styles.bgText}>
                <Link href='/conference/speakers' className={styles.bgLinks}>View Sessions</Link>
               </h2>
           
        </main>
    )
}

export default page