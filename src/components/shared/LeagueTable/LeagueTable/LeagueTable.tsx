import React from 'react';
import { v4 as uuid } from 'uuid';

import { League } from '../../../../stores/league/types';
import Table from '../../Table/Table/Table';
import Card from '../../Card/Card';
import TableCell from '../../Table/TableCell/TableCell';
import LeagueMapper from '../../../../mapper/LeagueMapper/LeagueMapper';
import LeagueTableShimmer from '../LeagueTableShimmer/LeagueTableShimmer';

export type LeagueTableProps = {
  league?: League,
  loading: boolean
}

const LeagueTable = ({ league, loading }: { league?: League, loading: boolean }) => {
  const leagueTable = league?.table;
  
  return (
    <>
      {league && leagueTable && 
        <Card width="100%">
          <Table
            headerData={[league.name as string, 'PL', 'GP', 'W', 'D', 'L', 'GS', 'SC']}
            bodyData={[...Array(leagueTable.length)].map((_, index) => LeagueMapper.toTable(leagueTable[index]))}
            renderHeaderCells={(data, index) => {
              return <TableCell
                key={uuid()}
                width={index === 0 ? '30%' : '7%'}
                modifier="league__cell">
                { data }
              </TableCell>
            }}
            renderRowCells={(data, index, position) => {
              return <TableCell
                key={uuid()}
                width={index === 0 ? '30%' : '7%'}>
                { index === 0 ? `${position} ${data}` : data }
            </TableCell>
          }}/>
        </Card>}

        { loading && <LeagueTableShimmer /> }
    </>
  )
}

export default LeagueTable