interface IconProps extends React.SVGProps<SVGSVGElement> {
    scale?: number;
}

export type IconComponent = React.FC<IconProps>;
export const Icon{name}: IconComponent;
