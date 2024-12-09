import style from './conference.css'
import {Raleway} from 'next/font/google'

const raleway = Raleway({
    subsets: ['latin'],
    weights: [400]
})
export default function ConferenceLayout({children}){
    return(
        <main>
        <header style={style.header} className={raleway.className} >
            <h1>GLOBALMANTICS TAKING THE TECH TO THE GLOBE</h1>
        </header>
        <section>{children}</section>
        </main>
    )
}