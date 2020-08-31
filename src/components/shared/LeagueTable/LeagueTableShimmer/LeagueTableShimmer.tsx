import React from 'react';
import Shimmer from '../../Shimmer/Shimmer';
import Table from '../../Table/Table/Table';

const LeagueTableShimmer = () => {
  return (
    <Table
      headerData={[...Array(10)].map(_ => '')} 
      bodyData={[...Array(10)].map(_ => [])}
      renderHeaderCells={_ => {
        return <Shimmer 
        width="100%"
        height="20px"/>
      }}
      renderRowCells={_ => {
        return <Shimmer 
        width="100%"
        height="20px"/>
      }}
      />
  )
}

export default LeagueTableShimmer;