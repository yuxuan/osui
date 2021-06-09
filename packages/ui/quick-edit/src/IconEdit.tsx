/* eslint-disable max-len */
import * as React from 'react';

function SvgComponent(props: any) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            {...props}
        >
            <path d="M349.5 675.5l122.2-26.9 337.2-330.4-104.1-103.9-328.4 339zm540-482l-58-58c-13.4-13.2-34.8-13.2-47.9 0l-60.7 60.7 106 106 60.7-60.5c13.1-13.6 13.1-35-.1-48.2z" />
            <path d="M789.4 840.4H184.5V235.6h329.9v-55H129.5v714.8h714.9V510.5h-55z" />
        </svg>
    );
}

export default SvgComponent;
