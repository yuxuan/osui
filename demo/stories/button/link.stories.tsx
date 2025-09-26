import React from 'react';
import BrandProvider from '@osui/brand-provider';
import Divider from '@osui/divider';
import Flex from '@osui/flex';
import {OutlinedLink} from 'acud-icon';
import './index.less';

export default {
    title: '通用/[new0]链接 Link',
};

const ExportIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" version="1.1"><title>传出 2</title><g id="传出" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M7.625,1.5 L2.1875,1.5 C1.80780406,1.5 1.5,1.80633132 1.5,2.18421053 L1.5,13.8157895 C1.5,14.1936789 1.80780406,14.5 2.1875,14.5 L13.8125,14.5 C14.1922062,14.5 14.5,14.1936789 14.5,13.8157895 L14.5,8.25657895" id="1-L" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="butt" strokeLinejoin="round" /><polyline id="2-L" stroke="currentColor" strokeWidth="1" points="10.5 1.5 14.5 1.5 14.5 5.5" fill="none" strokeLinecap="butt" strokeLinejoin="round" /><line x1="8.5" y1="7.5" x2="14.5" y2="1.5" id="3-L" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="butt" strokeLinejoin="round" /></g></svg>
    );
};
export const Demo = () => {
    return (
        <BrandProvider brand="icloud">
            <Divider>普通</Divider>
            <p>Primary 主要</p>
            <Flex gap="small">
                <a href="https://baidu.com"> 跳转链接 </a>
                <a href="https://baidu.com" disabled>跳转链接</a>
            </Flex>
            <br />
            <Flex gap="small">
                <a href="https://baidu.com" style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>跳转链接</a>
                <a href="https://baidu.com" disabled style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>跳转链接</a>
            </Flex>
            <p />
            <p>Normal 主要</p>
            <Flex gap="small">
                <a href="https://baidu.com" className="normal-link">跳转链接</a>
                <a href="https://baidu.com" disabled className="normal-link">跳转链接</a>
            </Flex>
            <br />
            <Flex gap="small">
                <a href="https://baidu.com" className="normal-link" style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>跳转链接</a>
                <a href="https://baidu.com" className="normal-link" disabled style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>跳转链接</a>
            </Flex>
            <p />
            <Divider>带Icon</Divider>
            <p>Primary 主要</p>
            <Flex gap="small">
                <a href="https://baidu.com"><Flex gap={4} align="center"><OutlinedLink />跳转链接</Flex></a>
                <a href="https://baidu.com" disabled><Flex gap={4} align="center"><OutlinedLink />跳转链接</Flex></a>
            </Flex>
            <p />
            <Flex gap="small">
                <a href="https://baidu.com"><Flex gap={4} align="center">跳转链接<ExportIcon /></Flex></a>
                <a href="https://baidu.com" disabled><Flex gap={4} align="center">跳转链接<ExportIcon /></Flex></a>
            </Flex>
        </BrandProvider>
    );
};
