import type { FC } from 'react';
import Image from "next/image";
import { Button } from 'antd';
import Navbar from '@/components/navbar/navbar';
import Search_Seciton from '@/components/search/search';
import Filter_blog from '@/components/filter_blogs/filter_blog';

interface pageProps { }

const Home: FC = () => {
    return (
        <div>
            <Navbar />
            <Search_Seciton />
            <Filter_blog />
        </div>
    );
}
export default Home;