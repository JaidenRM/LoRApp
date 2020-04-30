import React, { useState } from 'react'
import {
    Pagination, PaginationItem, PaginationLink
    , Table
} from 'reactstrap'

const PaginatedTable = props => {

    return (
        <div>
            <TableComp colNames={["col1", "col2"]} 
                rows={[["a1", "a2"], ["b1", "b2"], ["c1", "c2"]
                    , ["d1", "d2"], ["e1", "e2"], ["f1", "f2"]]} />
            <PaginationComp totalRows={20} visibleRows={5}/>
        </div>
    )
}

const TableComp = props => {

    return (
        <Table>
            <thead>
                <tr>
                    {props.colNames.map(cn => <th>{cn}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.rows.map(row => {
                    return(
                        <tr>
                            {Object.keys(row).map(rKey => <td>{row[rKey]}</td>)}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

const PaginationComp = props => {
    const [currPage, setCurrPage] = useState(1);
    console.log(currPage);

    let pages = Math.ceil(props.totalRows / props.visibleRows)

    return (
        <Pagination aria-label="PaginatedTable pagination bar">
            <PaginationItem>
                <PaginationLink first/>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink previous />
            </PaginationItem>
            {
                CreateRange(Math.max(1, currPage - 2), Math.min(currPage + 2, pages))
                    .map(ind => {
                        return (
                            <PaginationItem>
                                <PaginationLink>
                                    {ind}
                                </PaginationLink>
                            </PaginationItem>
                        )
                })
            }
            <PaginationItem>
                <PaginationLink next />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink last />
            </PaginationItem>
        </Pagination>
    )
}

function CreateRange(start, end) {
    return [...Array(end - start).keys()].map(i => i + start);
}

export default PaginatedTable;