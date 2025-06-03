import React, {useState} from 'react';
import Button from '@osui/button';
import Divider from '@osui/divider';
import Gap from '@osui/gap';
import Affix from '@osui/affix';
import BrandProvider from '@osui/brand-provider';

export default {
    title: '其它/Affix 固钉',
    component: Affix,
};

export const Demo = () => {
    const containerStyle = {height: 1200};
    const Demo: React.FC = () => {
        const [top, setTop] = useState(10);
        const [bottom, setBottom] = useState(10);

        return (
            <div style={containerStyle}>
                <p>将页面元素钉在可视范围</p>
                <h3>一、何时使用</h3>
                <p>
                    当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现
                    页面可视范围过小时，慎用此功能以免遮挡页面内容
                </p>
                <Divider>展示</Divider>
                <p>往下滚动查看固钉效果</p>
                <Affix offsetTop={top}>
                    <div style={{display: 'flex'}}>
                        <Button type="primary" onClick={() => setTop(top + 10)}>
                            顶部固钉
                        </Button>
                        <Gap orientation="horizontal" factor={2} />
                        <Button onClick={() => setTop(top + 10)}>
                            顶部固钉
                        </Button>
                        <Gap orientation="horizontal" factor={2} />
                        <Button disabled onClick={() => setTop(top + 10)}>
                            顶部固钉
                        </Button>
                    </div>
                </Affix>
                <div style={{height: 1200}} />
                <Affix offsetBottom={bottom}>
                    <div style={{display: 'flex'}}>
                        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
                            底部固钉
                        </Button>
                        <Gap orientation="horizontal" factor={2} />
                        <Button onClick={() => setBottom(bottom + 10)}>
                            底部固钉
                        </Button>
                        <Gap orientation="horizontal" factor={2} />
                        <Button disabled onClick={() => setBottom(bottom + 10)}>
                            底部固钉
                        </Button>
                    </div>
                </Affix>
            </div>
        );
    };

    return (
        <BrandProvider>
            <Demo />
        </BrandProvider>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/affix-cn/">Antd Affix API</a>
        </>
    );
};
