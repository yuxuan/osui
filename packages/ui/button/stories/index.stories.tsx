import * as React from 'react';
import OscButton from '../src';
// eslint-disable-next-line @reskript/import-order
import { SearchOutlined, HomeOutlined } from '@ant-design/icons';

export default {
    title: 'OSUI-Button',
};

export const Demo = () => {
    return (
        <div style={{padding: 30}}>
            <div>
                <OscButton type="default" style={{'margin': '0 20px 20px 0'}}>普通样式</OscButton>
                <OscButton type="default" disabled style={{'margin': '0 20px 20px 0'}}>普通样式</OscButton>
                <OscButton type="default" loading style={{'margin': '0 20px 20px 0'}}>普通样式</OscButton>
            </div>
            <div>
                <OscButton type="strong" style={{'margin': '0 20px 20px 0'}}>加强样式</OscButton>
                <OscButton type="strong" disabled style={{'margin': '0 20px 20px 0'}}>加强样式</OscButton>
                <OscButton type="strong" loading style={{'margin': '0 20px 20px 0'}}>加强样式</OscButton>
            </div>
            <div>
                <OscButton type="primary" style={{'margin': '0 20px 20px 0'}}>重要样式</OscButton>
                <OscButton type="primary" disabled style={{'margin': '0 20px 20px 0'}}>重要样式</OscButton>
                <OscButton type="primary" loading style={{'margin': '0 20px 20px 0'}}>重要样式</OscButton>
            </div>
            <div>
                <OscButton type="link" style={{'margin': '0 20px 20px 0'}}>文字按钮</OscButton>
                <OscButton type="link" disabled style={{'margin': '0 20px 20px 0'}}>文字按钮</OscButton>
            </div>
            <div>
                <OscButton type="icon" icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OscButton type="icon" disabled icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OscButton type="icon" loading icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OscButton type="only-icon" icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OscButton type="only-icon" disabled icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
                <OscButton type="only-icon" loading icon={<SearchOutlined />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OscButton type="image-text" icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OscButton>
                <OscButton type="image-text" disabled icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OscButton>
                <OscButton type="image-text" loading icon={<HomeOutlined />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OscButton>
            </div>
        </div>);
};
