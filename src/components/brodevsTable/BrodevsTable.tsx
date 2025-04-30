import React from "react";
import { BrodevsRow } from "./brodevsRow/BrodevsRow";
import "./brodevsTable.css";
import type { HeaderRow, Row } from "./types";

interface BrodevsTableProps {
    headers: HeaderRow;
    rows: Row[];
    className?: string;
}

const BrodevsTable: React.FC<BrodevsTableProps> = ({ headers, rows, className }) => {
    return (
        <table className={`brodevs-table ${className || ""}`} role="table">
            <thead>
                <tr className="brodevs-table__header-row">
                    {headers.cells}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <BrodevsRow
                        key={row.key}
                        cells={row.cells}
                        className={row.className}
                        onClick={row.onClick}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default BrodevsTable;