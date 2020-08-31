import React, { ReactNode } from 'react';
import styles from './TableRow.module.scss'

export type TableRowProps = {
  children: ReactNode
}

const TableRow = (props: TableRowProps) => {
  return (
    <tr className={styles['table__row']}>
      {props.children}
    </tr>
  )
}

export default TableRow;