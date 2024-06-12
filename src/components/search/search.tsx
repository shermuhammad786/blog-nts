'use client'
import type { FC } from 'react';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Search_Seciton: FC = () => {
    return (
        <div className='w-screen flex justify-center mt-10'>
            <div className='w-full' style={{ maxWidth: "1348px" }}>
                <div className='mb-4'>
                    <h1 className='text-3xl'>Search</h1>
                </div>
                <div className='mb-6'>
                    <Space direction="vertical" className='w-full'>
                        <Input.Search
                            className='outline outline-offset-2 outline-2 rounded-xl'
                            placeholder="input search text"
                            allowClear
                            size='large'
                            onSearch={onSearch}
                            style={{ width: "100%" }}
                        />
                    </Space>
                </div>
                <p>Viewing 12 of 1311 results</p>
            </div>
        </div>
    );
}
export default Search_Seciton;

