
'use client';

import { useState } from "react";

export default function SecuritySlider({ 
    onToggle,
    params,
}: { 
    onToggle: (isActive: boolean) => void ,
    params: string,
}) {
    
    const [active, setActive] = useState(false);

    const animateToggle = () => {
        setActive(!active);
        onToggle(!active);
    };

    return (
        <div className="container grid grid-cols-1 justify-items-center mt-5">
            <div id="slider" 
            className="p-1 items-center w-72 h-10 rounded text-black hover:bg-slate-50 border 
            hover:border-black hover:text-black font-light grid justify-items-stretch"
            >
                <div className="absolute "
                onClick={animateToggle}
                >
                    {active ? (
                        <div id="slider-button" 
                        className="w-8 h-8 rounded bg-emerald-700 cursor-pointer duration-1000 p-1"
                        style={{ transform: active ? "translateX(246px)" : "translateX(0)" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                        </div>
                    ):(
                        <div id="slider-button" 
                        className="w-8 h-8 rounded bg-neutral-400 cursor-pointer duration-1000 p-1"
                        style={{ transform: active ? "translateX(246px)" : "translateX(0)" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        </div>
                    )}
                </div>
                
                <div className="relative text-center m-auto">
                    {params === 'fr' ? (
                        <p>Cliquez Sur Le Cadenas</p> 
                    ):(
                        <p>Click On The Padlock</p>
                    )}
                </div>
            </div>
        </div>
    )
}
