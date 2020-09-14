import React from 'react';
import {IconSearch, IconHome} from '@osui/icons';
import Button from '@osui/button';

export default {
    title: 'Button',
};

export const Demo = () => {
    return (
        <>
            <div>
                <Button type="default" style={{'margin': '0 20px 20px 0'}}>普通样式</Button>
                <Button type="default" disabled style={{'margin': '0 20px 20px 0'}}>普通样式</Button>
                <Button type="default" loading style={{'margin': '0 20px 20px 0'}}>普通样式</Button>
            </div>
            <div>
                <Button type="strong" icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>加强样式</Button>
                <Button type="strong" disabled style={{'margin': '0 20px 20px 0'}}>加强样式</Button>
                <Button type="strong" loading style={{'margin': '0 20px 20px 0'}}>加强样式</Button>
            </div>
            <div>
                <Button type="primary" style={{'margin': '0 20px 20px 0'}}>重要样式</Button>
                <Button type="primary" disabled style={{'margin': '0 20px 20px 0'}}>重要样式</Button>
                <Button type="primary" loading style={{'margin': '0 20px 20px 0'}}>重要样式</Button>
            </div>
            <div>
                <Button type="link" style={{'margin': '0 20px 20px 0'}}>文字按钮</Button>
                <Button type="link" disabled style={{'margin': '0 20px 20px 0'}}>文字按钮</Button>
            </div>
            <div>
                <Button type="icon" icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <Button type="icon" disabled icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <Button type="icon" loading icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <Button type="only-icon" icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <Button type="only-icon" disabled icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
                <Button type="only-icon" loading icon={<IconSearch />} style={{'margin': '0 20px 20px 0'}} />
            </div>
            <div>
                <Button type="default" icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </Button>
                <Button type="default" disabled icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </Button>
                <Button type="default" loading icon={<IconHome />} style={{'margin': '0 20px 20px 0'}}>
                    图文按钮
                </Button>
            </div>
        </>
    );
};
