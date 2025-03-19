import { brodevsIcons } from "./brodevsIcons.tsx";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

export const BrodevsIcon = ({ name, ...props }: IconProps) => {
    const IconSVG = brodevsIcons[name];

    if (!IconSVG) {
        console.error(`Icon '${name}' not found`);
        return null;
    }

    return (
        <IconSVG {...props} />
    );
};

