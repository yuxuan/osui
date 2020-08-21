import React from 'react';
import OSUIButton from '../src';
// eslint-disable-next-line @reskript/import-order
import {SearchOutlined, HomeOutlined} from '@ant-design/icons';

export default {
    title: 'OSUI-Button',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <div>
                <OSUIButton type="default" style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
                <OSUIButton type="default" disabled style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
                <OSUIButton type="default" loading style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
            </div>
            <div>
                <OSUIButton type="strong" style={{'margin': '0 20px 20px 0'}}>加强样式</OSUIButton>
                <OSUIButton type="strong" disabled style={{'margin': '0 20px 20px 0'}}>加强样式</OSUIButton>
                <OSUIButton type="strong" loading style={{'margin': '0 20px 20px 0'}}>加强样式</OSUIButton>
            </div>
            <div>
                <OSUIButton type="primary" style={{'margin': '0 20px 20px 0'}}>重要样式</OSUIButton>
                <OSUIButton type="primary" disabled style={{'margin': '0 20px 20px 0'}}>重要样式</OSUIButton>
                <OSUIButton type="primary" loading style={{'margin': '0 20px 20px 0'}}>重要样式</OSUIButton>
            </div>
            <div>
                <OSUIButton type="link" style={{'margin': '0 20px 20px 0'}}>文字按钮</OSUIButton>
                <OSUIButton type="link" disabled style={{'margin': '0 20px 20px 0'}}>文字按钮</OSUIButton>
            </div>
            <div>
                <OSUIButton type="icon" icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="icon" disabled icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="icon" loading icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OSUIButton type="only-icon" icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="only-icon" disabled icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="only-icon" loading icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OSUIButton type="image-text" icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
                <OSUIButton type="image-text" disabled icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
                <OSUIButton type="image-text" loading icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
            </div>
        </div>);
};
