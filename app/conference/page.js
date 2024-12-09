import Link from "next/link"


const page = () => {
    return (
        <main>
            <Link href='/home'>Home</Link>
            <Link href='/conference/speakers'>Speakers</Link>
            <Link href='/conference/speakers'>Sessions</Link>
            <div className="head flex justify-center">
                <h1 className=" flex text-center">welcome to conference</h1>
            </div>
        </main>
    )
}

export default page