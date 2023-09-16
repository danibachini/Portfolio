
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
                                className={pathname === '/'
                                ? 'underline underline-offset-4'
                                : 'no-underline'} 
                                href="/">PROJECTS</Link>
                            </li>

                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/skills'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/skills">SKILLS</Link>
                            </li>
                            
                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/me'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/me">DANIELLE</Link>
                            </li>

                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/history'
                                ? 'underline underline-offset-4'
                                : 'no-underline'}
                                href="/history">HISTORY</Link>
                            </li>
                            
                            <li className="m-2">
                                <Link onClick={() => setNavbar(!navbar)} 
                                className={pathname === '/contact'
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
