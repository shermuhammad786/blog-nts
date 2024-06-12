import Image from 'next/image';
import type { FC } from 'react';



const SingleBlog: FC = ({ }) => {
    return (
        <div className='w-80 p-5'>
            <div>
                <Image src="/assets/color.jpeg" alt='' width={300} height={200} />
            </div>
            <div>
                <h1 className='font-bold text-2xl'>descriptiopn of thiis image was a wonder</h1>
                <p className='font-semibold text-xl'>by user</p>
                <p className='font-medium text-base'>date </p>
            </div>
        </div>
    );
}
export default SingleBlog;