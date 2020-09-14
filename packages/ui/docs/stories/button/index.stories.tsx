import React from 'react';
import {IconSearch, IconHome} from '@osui/icons';
import OSUIButton from '@osui/button';

export default {
    title: 'Button',
};

export const Demo = () => {
    return (
        <>
            <div>
                <OSUIButton type="default" style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
                <OSUIButton type="default" disabled style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
                <OSUIButton type="default" loading style={{'margin': '0 20px 20px 0'}}>普通样式</OSUIButton>
            </div>
            <div>
                <OSUIButton type="strong" icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>加强样式</OSUIButton>
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
                <OSUIButton type="icon" icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="icon" disabled icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="icon" loading icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OSUIButton type="only-icon" icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="only-icon" disabled icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <OSUIButton type="only-icon" loading icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <OSUIButton type="default" icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
                <OSUIButton type="default" disabled icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
                <OSUIButton type="default" loading icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </OSUIButton>
            </div>
        </>
    );
};
