import { lordicons } from "./lordicons.ts";

export const LordIcon = ({ name, className = '', trigger = "loop-on-hover", ...props }) => {
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
    );
};
