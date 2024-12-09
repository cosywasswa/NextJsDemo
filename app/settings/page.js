import Link from "next/link"

const page = () => {
    return (
        <main>
            <header>
                <Link href='/home'>Home</Link>
            </header>
            <div className="head flex justify-center">
                <h1 className=" flex text-center">welcome to settings</h1>
            </div>
        </main>
    )
}

export default page