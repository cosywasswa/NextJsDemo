import React from "react"
import Link from "next/link"

const page = () => {
  return (
      <main>
        <div>
            <ul className=" links pl-5 justify-center">
                <li>
            <Link href='/home'>Home</Link>
                  </li>
              </ul>

        </div>
          <div className="head flex justify-center">
              <h1 className=" flex text-center">Demo for next js site</h1>
          </div>
      </main>
  )
}

export default page