import styles from '../../conference.module.css'

async function getSpeakerInfo(slug){
    const response = await fetch(
      'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    )
    let speakersList = await response.json()
    speakersList = speakersList.speakers
    return getSpeakerDetails(speakersList, atob(slug))
}

function getSpeakerDetails(speakers, speakerId){
    const speaker = speakers.find(({id}) => id === speakerId);
    if(speaker === undefined){
        throw new Error(`speaker with id ${speakerId} not found`)
    }
    return speaker;
}

const page = async({params: {slug}}) => {
    const speakerInfo = await getSpeakerInfo(slug);
    const {name, bio, sessions} = speakerInfo
  return (
    <div className={styles.infoContainer}>
        <h3 className={styles.titleText}>{name}</h3>
        <h5 className={styles.descText}>About: {bio}</h5>
{
    sessions &&
    sessions.map((session) => (
       <div key={session.id}>
<h5 className={styles.descText}>{session.name}</h5>
       </div> 
    ))
}


    </div>
  )
}

export default page