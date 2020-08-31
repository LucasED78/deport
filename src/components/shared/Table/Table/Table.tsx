import React, { ReactNode } from 'react';

import styles from './Table.module.scss';
import LeagueTableRow from '../TableRow/TableRow';

export type TableProps = {
  headerData: string[]
  bodyData: string[][],
  renderHeaderCells: ((data: string, index: number) => ReactNode),
  renderRowCells: ((data: string, index: number, position: number) => ReactNode)
}

const Table = (props: TableProps) => {
  const { renderHeaderCells, renderRowCells, headerData, bodyData } = props;

  const renderCells = (cells: string[], position: number) => {
    return cells.map((data, index) => {
      return renderRowCells(data, index, position)
    })
  }

  return (
    <table className={styles.league__table}>
      <thead>
        <LeagueTableRow>
          {headerData.map((data, index) => renderHeaderCells(data, index))}
        </LeagueTableRow>
      </thead>

      <tbody>
        {bodyData.map((body, position) => {
          return (
            <LeagueTableRow>
              {renderCells(body, position + 1)}
            </LeagueTableRow>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;