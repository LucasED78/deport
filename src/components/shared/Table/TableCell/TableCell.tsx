import React, { ReactNode } from 'react';
import styles from './TableCell.module.scss';
import '../../../../utils/array'

export type TableCellProps = {
  children: ReactNode,
  width: number | string,
  modifier?: 'league__cell'
}

const TableCell = (props: TableCellProps) => {
  return (
    <th className={[styles['table__cell'], styles[props.modifier ?? '']].classify()}>
      { props.children }
    </th>
  )
}

export default TableCell;