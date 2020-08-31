import React from 'react';
import { v4 as uuid } from 'uuid';

import Shimmer from '../../Shimmer/Shimmer';
import Table from '../../Table/Table/Table';
import TableCell from '../../Table/TableCell/TableCell';

const LeagueTableShimmer = () => {
  return (
    <Table
      headerData={[...Array(1)].map(_ => '')} 
      bodyData={[...Array(10)].map(_ => [...Array(1)])}
      renderHeaderCells={_ => {
        return (
          <TableCell key={uuid()} width="100%">
            <Shimmer 
            width="100%"
            height="20px"/>
          </TableCell>
        )
      }}
      renderRowCells={_ => {
        return (
          <TableCell key={uuid()} width="100%">
            <Shimmer 
            width="100%"
            height="20px"/>
          </TableCell>
        )
      }}
      />
  )
}

export default LeagueTableShimmer;