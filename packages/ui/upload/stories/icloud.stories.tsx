/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import message from '@osui/message';
import Button from '@osui/button';
import { IconUploadOutlined } from '@osui/icons';
import Upload from '../src';

export default {
    title: '数据录入/Upload 上传',
    component: Upload,
};

export const Demo = () => {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Upload {...props}>
            <Button icon={<IconUploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/upload-cn/">Antd Upload API</a>
        </>
    );
};

