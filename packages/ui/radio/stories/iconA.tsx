import React from 'react';
import iconAUrl from './iconA.png';

const IconAComponent = () => {
    return (
        <div
            className="icon-container"
            style={{
                width: '32px', /* 根据需要调整大小 */
                height: '32px', /* 根据需要调整大小 */
                backgroundImage: `url(${iconAUrl})`, /* 确保路径正确 */
                backgroundSize: 'cover', /* 使背景图适应容器大小 */
                backgroundPosition: 'center',
            }}
        >
            {/* 这里可以根据需要添加其他内容 */}
        </div>
    );
};

export default IconAComponent;
