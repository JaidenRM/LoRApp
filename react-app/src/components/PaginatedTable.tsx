import React, { useState, useEffect, FunctionComponent } from 'react'
import {
    Pagination, PaginationItem, PaginationLink
    , Table, Container, Row, Col, Input
} from 'reactstrap'

interface PT {
    tableData: string[][];
    visibleRows: number;
    visibleRowsOpts: number[];
}

interface PC {
    totalRows: number;
    visibleRows: number;
    currPage: number;
    handleClick(num: number): void;
}

interface TC {
    rows: string[][];
    currPage: number;
    visibleRows: number;
}

const PaginatedTable: FunctionComponent<PT> = props => {
    const [currPage, setCurrPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [data, setData] = useState(props.tableData);
    const [showRows, setShowRows] = useState(props.visibleRows);

    useEffect(() => {
        let rows = props.tableData;
        let tmpRows = [];

        if(filter) {
            rows.map(obj => {
                if(Object.values(obj).some(txt => String(txt).toUpperCase().includes(filter.toUpperCase())))
                    tmpRows.push(obj);
            });
            rows = tmpRows;
        }
        setData(rows);
        
    }, [filter, props.tableData]);

    const HandlePageClick = num => setCurrPage(num);
    const HandleFilter = val => setFilter(val);

    let totRows = data.length;
    
    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <Input 
                        placeholder="Filter..." 
                        type="text"
                        onChange={e => HandleFilter(e.target.value)}/>
                </Col>
                <Col xs={4}>
                    <select onChange={e => setShowRows(Number(e.target.value))} className="form-control">
                        {props.visibleRowsOpts.map(opt => <option value={opt} selected={opt == showRows}>{opt}</option>)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableComp 
                        rows={data}
                        visibleRows={showRows}
                        currPage={currPage} />
                    <PaginationComp 
                        totalRows={totRows} 
                        visibleRows={showRows}
                        currPage={currPage}
                        handleClick={HandlePageClick}/>
                </Col>
            </Row>
        </Container>
    )
}

const TableComp: FunctionComponent<TC> = props => {
    let showRows = CreateRange((props.currPage - 1) * props.visibleRows, (props.currPage * props.visibleRows) - 1)
    console.log(props.rows);
    return (
        <Table>
            <thead>
                <tr>
                    {props.rows.length > 0 ? Object.keys(props.rows[0]).map(k => <th>{k}</th>) : ""}
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row, ind) => {
                    if(showRows.includes(ind))
                        return(
                            <tr>
                                {Object.keys(row).map(k => <td>{row[k]}</td>)}
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
    tableData: [["a1", "a2"], ["b1", "b2"], ["c1", "c2"]
    , ["d1", "d2"], ["e1", "e2"], ["f1", "f2"]],
    visibleRows: 10,
    visibleRowsOpts: [5, 10, 25, 50, 100]
}

export default PaginatedTable;