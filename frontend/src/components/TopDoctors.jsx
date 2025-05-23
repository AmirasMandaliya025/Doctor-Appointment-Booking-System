import React from 'react'
import { doctors } from '../assets/assets'

const TopDoctors = () => {
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 class="text-3xl font-medium">Top Doctors to Book</h1>
            <p class="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors.</p>
            <div>
                {doctors.slice(0, 10).map((item, index) => (
                    <div>
                        <img src={item.image} alt="" />
                        <div>
                            <div>
                                <p></p><p>Available</p>
                            </div>
                            <p>{item.name}</p>
                            <p>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button>More</button>
        </div>
    )
}

export default TopDoctors