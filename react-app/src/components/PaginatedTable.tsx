import React, { useState, FunctionComponent } from 'react'
import {
    Pagination, PaginationItem, PaginationLink
    , Table
} from 'reactstrap'

interface PT {
    colNames: string[];
    tableData: string[][];
    visibleRows: number;
}

interface PC {
    totalRows: number;
    visibleRows: number;
    currPage: number;
    handleClick(num: number): void;
}

interface TC {
    colNames: string[];
    rows: string[][];
    currPage: number;
    visibleRows: number;
}

const PaginatedTable: FunctionComponent<PT> = props => {
    const [currPage, setCurrPage] = useState(1);

    const HandlePageClick = num => setCurrPage(num);
    let totRows = Object.keys(props.tableData).length;
    
    return (
        <div>
            <TableComp 
                colNames={props.colNames} 
                rows={props.tableData}
                visibleRows={props.visibleRows}
                currPage={currPage} />
            <PaginationComp 
                totalRows={totRows} 
                visibleRows={props.visibleRows}
                currPage={currPage}
                handleClick={HandlePageClick}/>
        </div>
    )
}

const TableComp: FunctionComponent<TC> = props => {

    return (
        <Table>
            <thead>
                <tr>
                    {props.colNames.map(cn => <th>{cn}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, ind) => {
                    if(props.currPage == ind + 1)
                        return(
                            <tr>
                                {row.map(val => <td>{val}</td>)}
                            </tr>
                        )
                })}
            </tbody>
        </Table>
    )
}

const PaginationComp: FunctionComponent<PC> = props => {

    let pages = Math.ceil(props.totalRows / props.visibleRows)
    const HandleClick = (e, i) => {
        e.preventDefault();
        props.handleClick(i);
    }
    console.log(pages);

    return (
        <Pagination aria-label="PaginatedTable pagination bar">
            <PaginationItem>
                <PaginationLink first onClick={e => HandleClick(e, 1)}/>
            </PaginationItem>
            <PaginationItem disabled={props.currPage == 1 ? true : false}>
                <PaginationLink previous onClick={e => HandleClick(e, props.currPage - 1)} />
            </PaginationItem>
            {
                CreateRange(Math.max(1, props.currPage - 2), Math.min(props.currPage + 2, pages))
                    .map(ind => {
                        return (
                            <PaginationItem active={props.currPage == ind ? true : false}>
                                <PaginationLink
                                    onClick={e => HandleClick(e, ind)} >
                                        {ind}
                                </PaginationLink>
                            </PaginationItem>
                        )
                })
            }
            <PaginationItem disabled={props.currPage == pages ? true : false}>
                <PaginationLink next onClick={e => HandleClick(e, props.currPage + 1)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last onClick={e => HandleClick(e, pages)}/>
            </PaginationItem>
        </Pagination>
    )
}

function CreateRange(start, end) {
    return [...Array(end - start + 1).keys()].map(i => i + start);
}

PaginatedTable.defaultProps = {
    colNames: ["col1", "col2"],
    tableData: [["a1", "a2"], ["b1", "b2"], ["c1", "c2"]
    , ["d1", "d2"], ["e1", "e2"], ["f1", "f2"]],
    visibleRows: 2
}

export default PaginatedTable;