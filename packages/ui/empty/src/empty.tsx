/* eslint-disable max-len */
import React from 'react';

const Empty = (props: React.SVGAttributes<SVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="osui-empty-img"
            width={100}
            height={100}
            {...props}
        >
            <defs>
                <linearGradient
                    x1="16.498%"
                    y1="38.528%"
                    x2="56.262%"
                    y2="63.185%"
                    id="a"
                >
                    <stop stopColor="#DCE0EF" offset="0%" />
                    <stop stopColor="#DCDFEA" offset="100%" />
                </linearGradient>
                <linearGradient
                    x1="28.893%"
                    y1="55.707%"
                    x2="93.898%"
                    y2="48.876%"
                    id="c"
                >
                    <stop stopColor="#F1F3FA" offset="0%" />
                    <stop stopColor="#E8EAF0" offset="100%" />
                </linearGradient>
                <linearGradient
                    x1="21.925%"
                    y1="36.776%"
                    x2="113.366%"
                    y2="55.835%"
                    id="d"
                >
                    <stop stopColor="#FFF" stopOpacity={0.4} offset="0%" />
                    <stop stopColor="#FFF" stopOpacity={0} offset="100%" />
                </linearGradient>
                <ellipse id="b" cx={44.4} cy={22.8} rx={44.4} ry={22.8} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h100v100H0z" />
                <g transform="translate(5.6 35.6)">
                    <ellipse
                        fill="url(#a)"
                        fillRule="nonzero"
                        cx={44.4}
                        cy={25.2}
                        rx={44.4}
                        ry={22.8}
                    />
                    <use fill="url(#c)" fillRule="nonzero" xlinkHref="#b" />
                    <ellipse
                        stroke="url(#d)"
                        strokeWidth={0.5}
                        cx={43.8}
                        cy={21.6}
                        rx={21}
                        ry={10.8}
                    />
                </g>
                <path
                    d="M69.343 42.018c6.904 3.985 10.08 11.235 10.057 19.162-.011 3.963-1.42 6.745-3.683 8.05-2.275 1.284-5.406 1.082-8.853-.9L34.857 50.868C27.953 46.882 22.377 37.22 22.4 29.294c.023-7.927 5.643-11.113 12.547-7.127.89.506 1.746 1.103 2.579 1.79.766-8.096 7.05-11.136 14.675-6.745 7.614 4.392 13.865 14.672 14.574 23.623.823.27 1.69.676 2.568 1.183Z"
                    fill="#E0E3EF"
                    fillRule="nonzero"
                />
                <path
                    d="M42.92 29.682a.81.81 0 0 1 1.263-.671l4.86 3.274a.81.81 0 0 1 .357.672v8.163l-1.129-.715 1.129.761v7.123a.81.81 0 0 1-1.243.684l-4.86-3.076a.81.81 0 0 1-.377-.684v-15.53Z"
                    fill="#FFF"
                />
                <path
                    d="m53.903 44.13 4.86 3.275a.81.81 0 0 1 .357.672v6.692a.81.81 0 0 1-1.243.684l-4.86-3.076a.81.81 0 0 1-.377-.684v-6.89a.81.81 0 0 1 1.263-.672Z"
                    fill="#F7F8FB"
                />
            </g>
        </svg>
    );
};

export default Empty;
