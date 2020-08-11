interface IconProps extends React.SVGProps<SVGSVGElement> {
    scale?: number;
}

export type IconComponent = React.FC<IconProps>;
export const IconBackTop: IconComponent;
