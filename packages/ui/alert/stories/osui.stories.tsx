import React from 'react';
import Alert from '../src';

export default {
    title: 'Alert',
};

export const Demo = () => {
    return (
        <>
            {/* success */}
            <Alert
                style={{width: 600}}
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon
                actions={<a>查看详情</a>}
            />
            <br />
            <Alert
                style={{width: 600}}
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{width: 600}}
                message="已成功！"
                description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
                type="success"
                showIcon
            />
            <br />
            {/* warning */}
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="warning"
                showIcon
                actions={<a>查看详情</a>}
            />
            <br />
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="warning"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{width: 600}}
                message="请注意！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="warning"
                showIcon
            />
            <br />
            {/* error */}
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="error"
                showIcon
                actions={<a>查看详情</a>}
            />
            <br />
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="error"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{width: 600}}
                message="请注意！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="error"
                showIcon
                actions={<a>查看详情</a>}
            />
            <br />
            {/* info */}
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="info"
                showIcon
            />
            <br />
            <Alert
                style={{width: 600}}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="info"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{width: 600}}
                message="帮助信息！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="info"
                showIcon
            />
            <br />
        </>
    );
};
