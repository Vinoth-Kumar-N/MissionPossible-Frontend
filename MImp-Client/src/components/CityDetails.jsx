import React from 'react'
const CityDetails = () => {
    return (
        <>
            <div className="flex h-full w-full justify-center">
                <div className="h-[600px] w-[90%] mt-8 flex bg-slate-500 rounded-lg">
                    <div className="w-1/3 flex justify-center items-center">
                        <img src="" alt="City Image" className='h-[500px] w-[350px] bg-slate-300 rounded-xl' />
                    </div>
                    <div className="w-2/3 flex justify-center items-center">
                        <div className="w-[80%] h-[80%] bg-slate-300 rounded-xl flex justify-center flex-col items-center gap-3">
                            <div className="w-[80%] h-[20%] bg-slate-50 rounded-md">Name</div>
                            <div className="h-[40%] w-[80%] bg-slate-50 rounded-md">Description</div>
                            <div className="h-[20%] w-[80%] bg-slate-50 rounded-md">Therila</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityDetails
