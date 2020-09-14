import React from 'react';
import Alert from '@osui/alert';

export default {
    title: 'icloud/Alert',
};

export const Demo = () => {
    return (
        <>
            {/* success */}
            <Alert
                style={{ width: 500 }}
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon
                closable
                closeText={<span onClick={e => {
                    e.stopPropagation();
                }}
                >查看详情</span>}
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"
                type="success"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="已成功！"
                description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。"
                type="success"
                showIcon
            />
            <br />
            {/* warning */}
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="warning"
                showIcon
                closable
                closeText={<span onClick={e => {
                    e.stopPropagation();
                }}
                >查看详情</span>}
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="warning"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="请注意！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="warning"
                showIcon
            />
            <br />
            {/* eroor */}
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="error"
                showIcon
                closable
                closeText={<span onClick={e => {
                    e.stopPropagation();
                }}
                >查看详情</span>}
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="error"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="请注意！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="error"
                showIcon
            />
            <br />
            {/* info */}
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="info"
                showIcon
                closable
                closeText={<span onClick={e => {
                    e.stopPropagation();
                }}
                >查看详情</span>}
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"
                type="info"
                showIcon
                closable
            />
            <br />
            <Alert
                style={{ width: 500 }}
                message="帮助信息！"
                description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员。"
                type="info"
                showIcon
            />
            <br />
        </>
    );
};
