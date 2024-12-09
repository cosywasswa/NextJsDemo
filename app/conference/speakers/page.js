import Link from "next/link"
const page = () => {
    return (
        <main>
            <Link href='/conference'>Back</Link>
            <div className="head flex justify-center">
                <h1 className=" flex text-center">welcome to speakers</h1>
            </div>
        </main>
    )
}

export default page