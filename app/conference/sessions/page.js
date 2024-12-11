import styles from './../conference.module.css'

async function fetchSessions() {
    const response = await fetch(
        'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
        { cache: 'no-store' }
    )
    const data = response.json()
    return data
}
const page = async () => {
    const data = await fetchSessions()
    return (
        <main>
            <div>
                <h1 className={styles.titleText}>welcome to sessions</h1>
                <p className={styles.pElement}>Last rendered: {new Date().toLocaleString()}</p>

                {
                    data.sessions.map(({ id, title, description, room, day, track, speakers }) => (
                        <div key={id} className={styles.infoContainer}>
                            <h3 className={styles.titleText}>{title}</h3>
                            {
                                speakers &&
                                speakers.map((speaker) => (
                                    <h3 className={styles.titleText}>{speaker.name}</h3>
                                ))
                            }
                            <h4 className={styles.descText}>{description}</h4>
                            <h5 className={styles.infoText}>ROOM: {room}</h5>
                            <h5 className={styles.infoText}>DAY: {day}</h5>
                            <h5 className={styles.infoText}>TRACK: {track}</h5>
                        </div>
                    )

                    )
                }
            </div>
        </main>
    )
}

export default page