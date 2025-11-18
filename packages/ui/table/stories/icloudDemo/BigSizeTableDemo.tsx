import Space from '@osui/space';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import Typography from '@osui/typography';
import {OutlinedFolder, OutlinedCopy} from 'acud-icon';
import Table from '../../src';

const LeftBox = styled.div`
    display: flex;
    align-items: center;
    .left-box-icon {
        width: 32px;
        height: 32px;
        border-radius: var(--radius-s);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
        color: #fff;
        font-size: 20px;
    }
    .left-box-content {
        margin-left: 12px;
        .title {
            font-size: var(--font-size-xs);
            color: var(--text-color-primary);
        }
        .desc {
            font-size: var(--font-size-2xs);
            color: var(--text-color-tertiary);
        }
    }
`;

const TimeIcon = styled.span`
    display: inline-block;
    width: 16px;
    line-height: 16px;
    background: var(--component-color-grayB2);
    color: var(--text-color-tertiary);
    font-size: var(--font-size-3xs);
    margin-right: 8px;
    text-align: center;
`;

const columns = [
    {
        title: '文本类型左侧',
        dataIndex: 'name',
        key: 'name',
        width: 260,
        render: () => (
            <LeftBox>
                <div className="left-box-icon">
                    <OutlinedFolder />
                </div>
                <div className="left-box-content">
                    <div className="title">
                        trace_logs
                    </div>
                    <div className="desc">
                        /volumes/imtes/volumes/ms
                    </div>
                </div>
            </LeftBox>
        ),
    },
    {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
        render: () => (
            <Typography.Text
                className={css`
                    display: flex;
                    align-items: center;
                    button {
                        line-height: 0 !important;
                        opacity: 0;
                        font-size: 16px;
                        
                    };
                    &:hover button {
                        opacity: 1;
                    }
                `}
                copyable={{icon: <OutlinedCopy />}}
            >
                这是一个可以复制的文案
            </Typography.Text>
        ),
    },
    {
        title: '项目名称',
        dataIndex: 'desc',
        key: 'desc',
        width: 130,
        render: () => (
            <>
                <div>
                    <span style={{color: '#FAAF19', marginRight: 8}}>RPM</span>
                    900
                </div>
                <div>
                    <span style={{color: '#C2732F', marginRight: 8}}>TPM</span>
                    300000
                </div>
            </>
        ),
    },
    {
        title: '起止时间',
        dataIndex: 'desc',
        key: 'desc',
        width: 210,
        render: () => (
            <>
                <div>
                    <TimeIcon>起</TimeIcon>
                    2022-03-20 12:09:12
                </div>
                <div>
                    <TimeIcon>止</TimeIcon>
                    2024-04-20 12:09:12
                </div>
            </>
        ),
    },
    {
        title: '项目名称',
        key: 'action',
        render: () => (
            <Space size="small" align="center">
                <a>操作</a>
                <a>操作</a>
                <a>操作</a>
            </Space>
        ),
    },
];

const data = Array.from({length: 46}).map((_, i) => ({
    key: i,
    name: '这里一段关于项目的描述',
    desc: 'ID 名称点击图标可复制',
}));

const BigSizeTableDemo = () => {
    return (
        <Table
            columns={columns}
            dataSource={data}
        />
    );
};

export default BigSizeTableDemo;

