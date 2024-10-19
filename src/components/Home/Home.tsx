'use client'

import React from 'react'
import { Tabs, theme } from 'antd'
import type { TabsProps } from 'antd';
import Clients from './view/presentation/Clients/Clients';
import Policy from './view/presentation/Policy/Policy';
import Support from './view/presentation/Support/Support';

const items = [
    {
        key: '1',
        label: 'Clients',
        children: <Clients />,
    },
    {
        key: '2',
        label: 'Policy',
        children: <Policy />,
    },
    {
        key: '3',
        label: 'Support',
        children: <Support />,
    },
];

const Home = () => {
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <div className='my-2'>
            <Tabs type='card' defaultActiveKey='1' items={items} onChange={onChange} />
        </div>
    )
}

export default Home