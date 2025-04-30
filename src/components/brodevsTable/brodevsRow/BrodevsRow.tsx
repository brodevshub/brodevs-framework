import React from "react";
import "./brodevsRow.css";

interface BrodevsRowProps {
    cells: React.ReactNode[];
    className?: string;
    onClick?: () => void;
}

export const BrodevsRow: React.FC<BrodevsRowProps> = ({ cells, className, onClick }) => {
    const clickableClass = onClick ? "brodevs-table__row--clickable" : "";

    return (
        <tr
            className={`brodevs-table__row ${clickableClass} ${className || ""}`}
            onClick={onClick}
        >
            {cells}
        </tr>
    );
};