import Link from "next/link"
const page = () => {
    return (
        <main>
            <div>
                <ul>
                    <li>
                        <Link href='/conference'>Conference</Link>
                    </li>
                    <li>
                        <Link href='/settings'>Settings</Link>
                    </li>
                    <li>
                        <Link href='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="head flex justify-center">
                <h1 className=" flex text-center">welcome to home</h1>
            </div>
        </main>
    )
}

export default page