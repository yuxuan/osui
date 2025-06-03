/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react';
import message from '@osui/message';
import Button from '@osui/button';
import {IconUploadOutlined} from '@osui/icons';
import Progress from '@osui/progress';
import Gap from '@osui/gap';
import Modal from '@osui/modal';
import Markdown from '@osui/markdown';
import BrandProvider from '@osui/brand-provider';
import {PlusOutlined, InboxOutlined} from '@ant-design/icons';
import Upload from '../src';

export default {
    title: '数据录入/Upload 上传',
};

export const Demo = () => {
    const [cssVar, setCssVar] = useState(false);
    const theme = {
        cssVar: cssVar && {
            prefix: 'tna',
            key: 'tluafed',
        },
    };
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
        <BrandProvider theme={theme}>
            <Upload {...props}>
                <Button icon={<IconUploadOutlined />}>Click to Upload</Button>
            </Upload>
            <div>
                <button
                    onClick={() => setCssVar(v => !v)}
                >
                    切换{cssVar ? '不' : ''}使用cssVar
                </button>
            </div>
        </BrandProvider>
    );
};

export const Demo2 = () => {
    const [loading, setLoading] = React.useState(false);
    const [imageUrl, setImageUrl] = React.useState('');
    const [percent, setPercent] = React.useState(0);

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    function handleChange(info) {
        if (info.file.status === 'uploading') {
            setLoading(true);
            setPercent(Number.parseFloat(Number.parseFloat(info.file.percent).toFixed(2)));
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setLoading(false);
                setImageUrl(imageUrl);
            });
        }

        // 为了demo，失败的时候也展示图片
        if (info.file.status === 'error') {
            getBase64(info.file.originFileObj, imageUrl => {
                setLoading(false);
                setImageUrl(imageUrl);
            });
        }
    }

    const LoadingProgress = () => {
        return (
            <>
                <div>文件上传中</div>
                <Gap factor={2} base={4} orientation="vertical" />
                <Progress percent={percent} showInfo={false} />
            </>
        );
    };

    const uploadButton = (
        <div>
            {
                loading
                    ? <LoadingProgress />
                    : (
                        <>
                            <PlusOutlined />
                            <Gap orientation="vertical" factor={2} base={4} />
                            <div>上传图片</div>
                        </>
                    )
            }

        </div>
    );

    return (
        <BrandProvider>
            <h2>单图片上传</h2>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://run.mocky.io/v3/66aa95b6-393c-46c3-bb75-2bcab55b3cf9"
                beforeUpload={beforeUpload}
                onChange={handleChange}
                openFileDialogOnClick
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}} /> : uploadButton}
            </Upload>
        </BrandProvider>
    );
};


export const Demo3 = () => {

    const fileListData = [
        {
            uid: '-1',
            name: 'image.png',
            status: 'done' as const,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done' as const,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done' as const,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-4',
            name: 'image.png',
            status: 'done' as const,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-xxx',
            percent: 50,
            name: 'image.png',
            status: 'uploading' as const,
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-5',
            name: 'image.png',
            status: 'error' as const,
        },
    ];

    interface Preview {
        previewImage: string;
        previewVisible: boolean;
        previewTitle: string;
    }

    const [preview, setPreview] = React.useState<Preview|null>(null);
    const [fileList, setFileList] = React.useState(fileListData);
    // const ref = React.useRef();
    function getBase64(file): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string));
            reader.onerror = error => reject(error);
        });
    }

    const handleChange = React.useCallback(
        async info => {
            setFileList(info.fileList);
        },
        []
    );

    const handlePreview = React.useCallback(
        async file => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj);
            }

            setPreview({
                previewImage: file.url || file.preview,
                previewVisible: true,
                previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
            });
        },
        []
    );

    const handleCancel = React.useCallback(
        () => {
            setPreview(preview => ({...preview, previewVisible: false}));
        },
        []
    );


    const uploadButton = (
        <div>
            <PlusOutlined />
            <Gap orientation="vertical" factor={2} base={4} />
            <div>Upload</div>
        </div>
    );

    return (
        <BrandProvider>
            <BrandProvider brand="icloud">
                <h2>多图上传</h2>
                <Upload
                    name="avatar"
                    onChange={handleChange}
                    listType="picture-card"
                    className="avatar-uploader"
                    action="http://localhost:8090/upload"
                    onPreview={handlePreview}
                    fileList={fileList}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {
                    preview && (
                        <Modal
                            visible={preview.previewVisible}
                            title={preview.previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img alt="example" style={{width: '100%'}} src={preview.previewImage} />
                        </Modal>

                    )
                }
            </BrandProvider>
        </BrandProvider>
    );
};

export const Demo4 = () => {
    const {Dragger} = Upload;

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <BrandProvider>
            <Dragger {...props} dashedBorder>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击上传，或拖拽上传</p>
            </Dragger>
        </BrandProvider>
    );
};

export const Api = () => {
    const content = `
| 参数 | 说明 | 类型 | 默认值
| --- | --- | --- | --- |
| dashedBorder | upload是否使用虚线的边框 | boolean | undefined |
`;
    return (
        <>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://ant.design/components/upload-cn/"
            >
                Antd Upload API
            </a>
            <p></p>
            <p></p>
            <h2>新增参数</h2>
            <Markdown content={content} />
        </>
    );
};
