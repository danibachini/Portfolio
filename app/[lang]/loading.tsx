
export default function Loading() {
  
    return (
      <>
        <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto mt-4 md:pt-12">
            <div className="animate-pulse flex space-x-4">
  
                <div className="flex-1 space-y-6 py-1">
    
                    <div className="grid grid-cols-5 gap-4">
                        <div className="h-3 bg-slate-700 rounded col-start-2 col-span-3 md:col-start-3 md:col-span-1"></div>
                    </div>
        
                    <div className="animate-pulse rounded bg-slate-700 h-44 md:h-96 w-full mt-4"></div>

                </div>
            </div>
        </div>
      </>
    )
}