/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import Button from '@osui/button';
import Gap from '@osui/gap';
import BrandProvider from '@osui/brand-provider';
import Tooltip from '../src';

export default {
    title: '反馈/Tooltip 文字提示',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };

    const text = <span>prompt text</span>;

    const buttonWidth = 70;

    return (
        <BrandProvider brand="icloud" theme={theme}>
            <div className="demo">
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
                <div style={{marginLeft: buttonWidth, whiteSpace: 'nowrap', display: 'flex'}}>
                    <Tooltip placement="topLeft" title={text} open>
                        <Button>TL</Button>
                    </Tooltip>
                    <Gap orientation="horizontal" factor={2} />
                    <Tooltip placement="top" title={text}>
                        <Button>Top</Button>
                    </Tooltip>
                    <Gap orientation="horizontal" factor={2} />
                    <Tooltip placement="topRight" title={text}>
                        <Button>TR</Button>
                    </Tooltip>
                </div>
                <div style={{width: buttonWidth, float: 'left'}}>
                    <Tooltip placement="leftTop" title={text}>
                        <Button>LT</Button>
                    </Tooltip>
                    <Gap orientation="vertical" factor={2} />
                    <Tooltip placement="left" title={text}>
                        <Button>Left</Button>
                    </Tooltip>
                    <Gap orientation="vertical" factor={2} />
                    <Tooltip placement="leftBottom" title={text}>
                        <Button>LB</Button>
                    </Tooltip>
                </div>
                <div style={{width: buttonWidth, marginLeft: buttonWidth * 4 + 24}}>
                    <Tooltip placement="rightTop" title={text}>
                        <Button>RT</Button>
                    </Tooltip>
                    <Gap orientation="vertical" factor={2} />
                    <Tooltip placement="right" title={text}>
                        <Button>Right</Button>
                    </Tooltip>
                    <Gap orientation="vertical" factor={2} />
                    <Tooltip placement="rightBottom" title={text}>
                        <Button>RB</Button>
                    </Tooltip>
                </div>
                <div style={{marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap', display: 'flex'}}>
                    <Tooltip placement="bottomLeft" title={text}>
                        <Button>BL</Button>
                    </Tooltip>
                    <Gap orientation="horizontal" factor={2} />
                    <Tooltip placement="bottom" title={text}>
                        <Button>Bottom</Button>
                    </Tooltip>
                    <Gap orientation="horizontal" factor={2} />
                    <Tooltip placement="bottomRight" title={text}>
                        <Button>BR</Button>
                    </Tooltip>
                </div>
            </div>
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/tooltip-cn/">Antd Tooltip API</a>
        </>
    );
};

