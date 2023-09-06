import Link from "next/link"

export default function Navbar() {
    return (
        <div className="md:block hidden my-10">
            <div className="md:flex justify-center ">
                <div className="flex-1 md:max-w-xl">
                    <ul className="h-screen md:h-auto items-center justify-around text-sm md:flex">
                        <li className="hover:underline">
                            <Link href="/">PROJECTS</Link> 
                        </li>
                        <li className="hover:underline">
                            <Link href="/">SKILLS</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">DANIELLE</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">HISTORY</Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}