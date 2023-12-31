
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Toggle() {
    const pathname = usePathname();
    const [navbar, setNavbar] = useState(false);
    useEffect(()=>{
        setNavbar(false)
    },[pathname])

    return (
        <>
            <div className='flex'>
                <button className="p-2 mx-auto my-6"  onClick={() => setNavbar(!navbar)}>
                    {/* Toggle icon from heroicons.com */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </button> 
            </div>

            {navbar && 
                <div className="px-6 h-24 shadow-sm mb-6">

                     {/* Navbar links */}
                     <div>
                        <ul className="flex flex-wrap gap-4 justify-center text-sm">
                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/en'|| pathname === '/fr'
                                ? 'underline underline-offset-4'
                                : 'no-underline'} 
                                href="/">PROJECTS</Link>
                            </li>

                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/en/skills'|| pathname === '/fr/skills'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/skills">SKILLS</Link>
                            </li>
                            
                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/en/me'|| pathname === '/fr/me'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/me">DANIELLE</Link>
                            </li>

                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/en/history'|| pathname === '/fr/history'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/history">HISTORY</Link>
                            </li>
                            
                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/en/contact'|| pathname === '/fr/contact'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            }
        </>
    )
}
