
'use client';

import { useState } from 'react';
import SecuritySlider from "@/app/[lang]/components/EnableSlider";

export default function Form ({ params }: { params: {page: any, currentLang: string} }) {
    
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [submitted, setSubmit] = useState(false);
    const [isSliderActive, setIsSliderActive] = useState(false);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true); 
        
        if (name !== '' && email !== '' && text !== '' && isSliderActive === true) {

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  text,
                  isSliderActive,
                }),
            });

            const result = await response.json();
            if (result.message == 'Success') {
                setName('');
                setEmail('');
                setText('');
                setIsSliderActive(false);
                setIsLoading(false);
                setSubmit(true);
            }
        }
    }

    return(
        <main className='grid grid-cols-1 '>
            <form onSubmit={handleSubmit} className='rounded shadow-md p-6'>
                
                <div className='grid grid-cols-1 md:grid-cols-2 w-full md:gap-4'>
                    <input 
                    required
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder={params.page.contactName} 
                    className='input w-full  max-h-10 bg-slate-50 
                        rounded-none border-b-slate-300 border-t-0 border-r-0 border-l-0 
                        focus:outline-none text-slate-500 font-light mb-4 placeholder:font-extralight p-4' 
                    />
                    <input 
                    required 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={params.page.contactEmail} 
                    className='input w-full  max-h-10 bg-slate-50 
                        rounded-none border-b-slate-300 border-t-0 border-r-0 border-l-0 
                        focus:outline-none text-slate-500 font-light mb-4 placeholder:font-extralight p-4' 
                    />
                </div>

                <div>
                    <textarea 
                    required 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder={params.page.contactMessage}
                    maxLength={500}
                    className='textarea textarea-bordered w-full h-52 md:h-36 bg-slate-50 
                        rounded-none border-b-slate-300 border-t-0 border-r-0 border-l-0 
                        focus:outline-none text-slate-500 font-light placeholder:font-extralight p-4' 
                    />
                    <label className="label">
                        <span className="label-text-alt"/>
                        <span className="label-text-alt text-slate-500 font-light">{text.length}/500</span>
                    </label>
                </div>


                <div className='text-center'>

                    <SecuritySlider onToggle={(isActive) => setIsSliderActive(isActive)} params={ params.currentLang } />
                    
                    {submitted ? (
                        <p>{params.page.contactEmailSent}</p>
                    ) : (
                        <div className="form-control grid grid-cols-1 justify-items-center mt-5">
                            {isLoading ? (
                                <span className="loading loading-spinner loading-xs text-black"/>
                            ) : (
                                <button
                                type="submit"
                                disabled={!isSliderActive}
                                className="btn bg-black rounded-none text-slate-100 hover:bg-slate-50 
                                border hover:border-black hover:text-black font-light btn-sm ">
                                {params.page.contactButton}
                                </button>
                            )}
                        </div>
                    )}
                </div>

            </form>
        </main>
    )
}
