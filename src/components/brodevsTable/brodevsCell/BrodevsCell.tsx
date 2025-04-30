import React from "react";
import "./brodevsCell.css";

interface BrodevsCellProps {
    children: React.ReactNode;
    className?: string;
}

export const BrodevsCell: React.FC<BrodevsCellProps> = ({
    children,
    className,
}) => {
    return (
        <td className={`brodevs-table__cell  ${className || ""}`} >
            <div className={`brodevs-table__cell-content`}>
                {children}
            </div>
        </td>
    );
};