import { BrodevsCell } from "./brodevsCell/BrodevsCell";
import { BrodevsHeaderCell } from "./brodevsHeaderCell/BrodevsHeaderCell";
import { HeaderRow, Row } from "./types";

export const headers: HeaderRow = {
    cells: [
        <BrodevsHeaderCell key="header-1" onClick={() => console.log('Header 1 clicked')} isSorted={true} sortDirection='asc' >
            <h1>Header 1 </h1>
        </BrodevsHeaderCell>,
        <BrodevsHeaderCell key="header-2" onClick={() => console.log('Header 2 clicked')} isSorted={false} sortDirection='asc' >
            <h1>Header 2 </h1>
        </BrodevsHeaderCell>,
    ],
    className: "brodevs-table__header-row"
}

export const rows: Row[] = [
    {
        key: "row-1",
        cells: [
            <BrodevsCell key="row-1-cell-1" > Ir al sitio </BrodevsCell>,
            <BrodevsCell key="row-1-cell-2" > Texto </BrodevsCell>
        ],
        onClick: () => console.log('Row 1 clicked')
    },
    {
        key: "row-2",
        cells: [
            <BrodevsCell key="row-2-cell-1" > Ir al sitio </BrodevsCell>,
            <BrodevsCell key="row-2-cell-2" > Texto </BrodevsCell>
        ],
        onClick: () => console.log('Row 2 clicked')
    },
];