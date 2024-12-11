import styles from '../conference.module.css'

async function fetchSpeakers() {
    const response = await fetch(
        "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
        { next: { revalidate: 15 } }
    );
    const data = await response.json()
    return data
}
export default async function page(){
    const data = await fetchSpeakers();
    return (
        <main className={styles.parentContainer}>
            <div>
                Last Rendered: {new Date().toLocaleTimeString()}
            </div>
            <div>
                <h1 className={styles.tittleText}>welcome to speakers</h1>
            </div>
            <section>
            {data && data.speakers.map((speaker) =>( 
                    <div key={speaker.id} className={styles.infoContainer}> 
                        <h3 className={styles.titleText}>{speaker.name}</h3>
                        <h5 className={styles.descText}>{speaker.bio}</h5>
                    </div>
                )
                

                )}
            </section>
            
        </main>
    )
}
