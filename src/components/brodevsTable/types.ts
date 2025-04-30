export interface HeaderRow {
    cells: React.ReactNode[];
    className?: string;
}

export interface Row {
    key: string;
    cells: React.ReactNode[];
    className?: string;
    onClick?: () => void;
}