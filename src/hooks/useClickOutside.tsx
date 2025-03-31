import { useEffect } from "react";

export const useClickOutside = (
    elementRef: React.RefObject<HTMLElement>,
    setIsOpen: (isOpen: boolean) => void
): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [elementRef, setIsOpen]);
};
