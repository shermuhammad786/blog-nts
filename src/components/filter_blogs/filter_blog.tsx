import type { FC } from 'react';
import Filtration from './filtration/filtration';
import Blogs from './blogs/blogs';
import { Flex } from 'antd';

interface filter_blogProps { }

const Filter_blog: FC<filter_blogProps> = ({ }) => {
    return (
        <div style={{ width:"100%",display:"flex",justifyContent:"center" }}>
            <div style={{ display: "flex", maxWidth: "1348px", width: "100%" }}>
                <div style={{flex:'1',width:"100%"}}>
                    <Filtration />
                </div>
                <div style={{ flex: "3", width: "100%" }}>
                    <Blogs />
                </div>
            </div>
        </div>
    );
}
export default Filter_blog;