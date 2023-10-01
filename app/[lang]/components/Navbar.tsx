'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';
import Toggle from "./Toggle";

export default function Navbar() {
    const currentRoute = usePathname();
    
    return (
        <>
            {/* Toggle button for mobile */}
            <div className="md:hidden">
                <Toggle/>
            </div>

            <div className="md:block hidden mt-28 mb-14">
                <div className="md:flex justify-center ">
                    <div className="flex-1 md:max-w-xl">
                        <ul className="h-screen md:h-auto items-center justify-around text-sm md:flex">
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/" className={currentRoute === '/'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>PROJECTS</Link> 
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/skills" className={currentRoute === '/skills'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>SKILLS</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/me" className={currentRoute === '/me'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>DANIELLE</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/history" className={currentRoute === '/history'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>HISTORY</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/contact" className={currentRoute === '/contact'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}