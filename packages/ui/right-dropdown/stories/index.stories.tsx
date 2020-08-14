import * as React from 'react';
import {Divider} from 'antd';
import RightDropdown from '../src';

export default {
    title: 'OSUI-Right-dropdown',
};

export const Demo = () => {

    const click = (e: any) => {
        console.log(e);
    };

    return (
        <div style={{padding: 30}}>
            <Divider orientation="left">基本</Divider>
            {/* @ts-ignore */}
            <RightDropdown onClick={click}>
                <div
                    style={{
                        textAlign: 'center',
                        height: 200,
                        lineHeight: '200px',
                        background: '#f7f7f7',
                        color: '#777',
                    }}
                >
                    Right Click on here
                </div>
            </RightDropdown>
        </div>);
};
