import { lordicons } from "./lordicons.ts";

interface LordIconProps extends React.HTMLAttributes<HTMLElement> {
    name: keyof typeof lordicons;
    className?: string;
    trigger?: string;
}

export const LordIcon: React.FC<LordIconProps> = ({ name, className = '', trigger = "loop-on-hover", ...props }) => {
    const IconSVG = lordicons[name];

    if (!IconSVG) {
        console.error(`LordIcon '${name}' not found`);
        return null;
    }

    return (
        <lord-icon
            {...props}
            src={IconSVG}
            class={className + ' current-color'}
            trigger={trigger}
        />
    )

}
