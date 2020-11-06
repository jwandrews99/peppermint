import React from "react";
import { Grid, Row, Col } from "rsuite";
import { Table } from 'rsuite';

const OpenTicket = () => {

    const { Column, HeaderCell, Cell, Pagination } = Table;

    return (
        <div>
            <h3 style={{ textAlign:"center"}}>Open Tickets - (4)</h3>
            <Table height={400}>
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Time</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Company</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Priority</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Issue</HeaderCell>
                    <Cell dataKey="id" />
                </Column>
            </Table>
        </div>
  
  );
};

const UnissuedTicket = () => {

    const { Column, HeaderCell, Cell, Pagination } = Table;

    return (
        <div>
            <h3 style={{ textAlign:"center"}}>Unissued Tickets - (3)</h3>
            <Table height={400}>
                <Column width={70} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Time</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={70} align="center" fixed>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Company</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Priority</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={100} align="center" fixed>
                    <HeaderCell>Issue</HeaderCell>
                    <Cell dataKey="id" />
                </Column>
            </Table>
        </div>
    );
  };

const Ticket = () => {
  return (
    <div>
      <Grid fluid>
        <Col xs={12}>
            <OpenTicket />
        </Col>
        <Col xs={12}>
            <UnissuedTicket />
        </Col>
      </Grid>
    </div>
  );
};

export default Ticket;
