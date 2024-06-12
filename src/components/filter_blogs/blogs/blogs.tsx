import Image from 'next/image';
import type { FC } from 'react';
import SingleBlog from './singleBlog';

interface blogsProps { }

const Blogs: FC<blogsProps> = ({ }) => {
    return (
        <div className='flex flex-wrap'>
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
        </div>
    );
}
export default Blogs;