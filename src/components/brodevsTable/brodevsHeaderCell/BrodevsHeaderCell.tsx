import React from "react";
import "./brodevsHeaderCell.css";

interface BrodevsHeaderCellProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    isSorted?: boolean;
    sortDirection?: 'asc' | 'desc';
}

export const BrodevsHeaderCell: React.FC<BrodevsHeaderCellProps> = ({
    children,
    className,
    onClick,
    isSorted,
    sortDirection }) => {

    const clickableClass = onClick ? "brodevs-table__header-cell--clickable" : "";
    const showIcon = isSorted || onClick;

    return (
        <th className={`brodevs-table__header-cell ${clickableClass} ${className || ""}`} onClick={onClick}>
            <div className={`brodevs-table__header-cell-content`}>
                {children}
                {showIcon && (
                    <span className={`brodevs-table__sort-icon ${isSorted ? "brodevs-table__sort-icon--visible" : "brodevs-table__sort-icon--hidden"}`}>
                        {isSorted ? (sortDirection === 'asc' ? '▲' : '▼') : '▲'}
                    </span>
                )}
            </div>
        </th>
    );
};