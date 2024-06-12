"use client"
import type { FC } from 'react';

interface FiltrationProps { }

const Filtration: FC<FiltrationProps> = ({ }) => {
    return (
        <div className='p-4'>
            <h1 className='text-xl font-extrabold'>Filter</h1>
            <div className='flex items-center gap-4 p-4'>
                <input value={"all"} onChange={e => console.log(e.target.value)} type="checkbox" style={{ transform: "scale(2)" }} />
                <p>All</p>
            </div>
            <div className='flex items-center gap-4 p-4'>
                <input value={"public"} onChange={e => console.log(e.target.value)} type="checkbox" style={{ transform: "scale(2)" }} />
                <p>Public</p>
            </div>
            <div className='flex items-center gap-4 p-4'>
                <input value={"privite"} onChange={e => console.log(e.target.value)} type="checkbox" style={{ transform: "scale(2)" }} />
                <p>Privite</p>
            </div>
        </div>
    );
}
export default Filtration;