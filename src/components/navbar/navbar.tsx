import type { FC } from 'react';
import Image from "next/image";
import { Button } from 'antd';


const Navbar: FC = () => {
    return (
        <div className='flex justify-center w-screen'>
            <div className='flex justify-center w-screen' style={{ maxWidth: "1548px" }}>
                <header className='w-screen' style={{ width: "100%", maxWidth: "1548px" }}>

                    <nav className='flex justify-end gap-16 items-center px-16 p-4' style={{ background: "#1B1834", color: "#999EC2" }}>
                        <ul className='flex justify-center items-center gap-4'>
                            <li className='cursor-pointer'>Pluralsight</li>
                            <li className='cursor-pointer'>Skills</li>
                            <li className='cursor-pointer'>A Cloud Guru</li>
                            <li className='cursor-pointer'>Flow</li>
                            <li className='cursor-pointer'>Blog</li>
                        </ul>
                        <div className='flex justify-center items-center gap-2'>
                            <Image src="/assets/default.png" width={50} height={80} className='rounded-full' alt='' />
                            <h1>username</h1>
                        </div>
                    </nav>

                    <nav className='flex justify-between items-center px-16 p-6' style={{ background: "#242145", }}>
                        <ul className='flex justify-center items-center gap-4' style={{ color: "#A5AACF" }}>
                            <Image src="/assets/blogLogo.png" alt='logo' width={200} height={200} />
                            <li className='cursor-pointer'>Explore</li>
                            <li className='cursor-pointer'>Software dev</li>
                            <li className='cursor-pointer'>Cloud</li>
                            <li className='cursor-pointer'>IT Ops</li>
                            <li className='cursor-pointer'>Data</li>
                            <li className='cursor-pointer'>Security</li>
                            <li className='cursor-pointer'>Leadership</li>
                        </ul>
                        <div className='flex justify-center items-center gap-4'>
                            <Button shape="round" className='border-0 bg-sky-500' size={"large"}>
                                Contact sale
                            </Button>
                            <Button className='border-0' style={{ background: "#E7005E" }} shape="round" size={"large"}>
                                View plan
                            </Button>
                        </div>
                    </nav>

                    <div className='h-72 flex justify-center items-center' style={{
                        backgroundColor: "rgb(34,195,161)",
                        background: "linear-gradient(0deg, rgba(34,195,161,0.6) 0%, rgba(40,41,208,0.7248949579831933) 51%, rgba(45,98,253,0.6) 100%)",
                    }}>
                        <div className=''>
                            <h1 className='text-white font-black text-6xl'>Blogs</h1>
                        </div>
                    </div>

                </header>
            </div>
        </div>
    );
}
export default Navbar;