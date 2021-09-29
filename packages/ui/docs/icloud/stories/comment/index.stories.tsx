/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Form from '@osui/Form';
import Avatar from '@osui/avatar';
import Input from '@osui/input';
import Button from '@osui/button';
import Space from '@osui/space';
import Rate from '@osui/rate';
import FlexCentered from '@osui/flex-centered';
import Gap from '@osui/gap';
import {useToggle} from '@huse/boolean';
import moment from 'moment';
import Comment from '@osui/comment';

export default {
    title: '数据展示/Comment 评论',
    component: Comment,
};

const MessageIcon = ({style}) => (
    // eslint-disable-next-line max-len
    <svg style={style} fill="currentColor" width="14" height="14" viewBox="0 0 1024 1024"><g data-name="图层 2"><path d="M873.29 128v608H651.47L512.31 896 373.14 736H150.47V128zm-60.23 60.24H210.71v487.48h189.87L512.3 804.14 624 675.76h189zM572.12 448v64H331.18v-64zm120-128v64H331.18v-64z" data-name="图层 1"></path></g></svg>
);


export const Demo = () => {

    const Author = ({name, department}: {name: string, department: string}) => (
        <FlexCentered>
            <span>{name}</span>
            <Gap orientation="horizontal" factor={2} base={4} />
            <span>{department}</span>
        </FlexCentered>
    );

    const CommentHeader = ({author, rate}) => (
        <FlexCentered>
            <FlexCentered>
                {author}
                <Gap.Horizontal factor={2} base={4} />
                <span>{moment('20210929').format('YYYY-MM-DD HH:mm')}</span>
            </FlexCentered>
            <Gap.FlexFit />
            <FlexCentered style={{float: 'right'}}>
                <Gap.Horizontal factor={2} base={4} />
                <Rate style={{fontSize: 12}} disabled value={rate} />
                <Gap.Horizontal factor={2} base={4} />
                <span>{rate}分</span>
                <Gap.Horizontal factor={2} base={4} />
                <div style={{width: 1, height: 12, background: 'var(--color-gray-5)'}}></div>
                <Gap.Horizontal factor={2} base={4} />
                <span>{rate >= 3 ? '满意' : '不满意'}</span>
            </FlexCentered>
        </FlexCentered>
    );
    const batman = {
        author: <CommentHeader author={<Author name="Batman" department="工程效能部" />} rate={2} />,
        avatar: (
            <Avatar
                src="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"
                alt="Batman"
            />
        ),
    };

    const batman2 = {
        author: <Author name="Batman" department="工程效能部" />,
        avatar: (
            <Avatar
                src="https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"
                alt="Batman"
            />
        ),
    };

    const superman = {
        author: <Author name="Superman" department="工程效能部" />,
        avatar: (
            <Avatar
                src="https://i.pinimg.com/originals/48/a0/57/48a0571f6020986450bd0097a4381ae5.jpg"
                alt="Superman"
            />
        ),
    };

    const superman2 = {
        author: <CommentHeader author={<Author name="Batman" department="工程效能部" />} rate={5} />,
        avatar: (
            <Avatar
                src="https://i.pinimg.com/originals/48/a0/57/48a0571f6020986450bd0097a4381ae5.jpg"
                alt="Superman"
            />
        ),
    };

    const ExampleComponent = (
        {children, author}: {children?: React.ReactNode, author: {author: React.ReactNode, avatar: React.ReactNode}}
    ) => {
        const [reply, toggle] = useToggle(false);
        const actions = [
            <Button
                onClick={toggle}
                key="reply"
                flexCenter
                icon={<MessageIcon style={{marginRight: 4}} />}
                type="text"
            >
                回复
            </Button>,
        ];
        return (
            <>
                <Comment
                    actions={actions}
                    author={author.author}
                    avatar={author.avatar}
                    content={
                        <p>
                            整洁、严谨、工整、理性化、实用的特征是瑞士平面设计的精神所在；这种一丝不苟，传达准确的风格，即所谓瑞士国际主义风格。因而很快得到世界范围内的普遍认可
                        </p>
                    }
                >
                    {
                        reply && (
                            <Form>
                                <Form.Item>
                                    <Input.TextArea style={{height: 80}} placeholder="请回复: " />
                                </Form.Item>
                                <Form.Item>
                                    <Space style={{float: 'right'}}>
                                        <Button type="text" onClick={toggle}>取消</Button>
                                        <Button type="primary">确认</Button>
                                    </Space>
                                </Form.Item>
                            </Form>
                        )
                    }
                    {children}
                </Comment>
            </>
        );
    };

    return (
        <>
            <ExampleComponent author={batman}>
                <ExampleComponent author={superman}>
                    <ExampleComponent author={batman2} />
                </ExampleComponent>
                <ExampleComponent author={superman} />
            </ExampleComponent>
            <ExampleComponent author={superman2} />
        </>
    );
};

export const Api = () => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://ant.design/components/comment-cn/">Antd Comment API</a>
        </>
    );
};

