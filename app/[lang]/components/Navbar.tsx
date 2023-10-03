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
                                <Link href="/" className={currentRoute === '/en' || currentRoute === '/fr'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>PROJECTS</Link> 
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/skills" className={currentRoute === '/en/skills' || currentRoute === '/fr/skills'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>SKILLS</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/me" className={currentRoute === '/en/me' || currentRoute === '/fr/me'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>DANIELLE</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/history" className={currentRoute === '/en/history' || currentRoute === '/fr/history'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}>HISTORY</Link>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                                <Link href="/contact" className={currentRoute === '/en/contact' || currentRoute === '/fr/contact'
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