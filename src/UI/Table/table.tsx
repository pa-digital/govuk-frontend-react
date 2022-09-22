import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TableCellDataProps {
  value: string;
  dataType?: 'numeric';
}

export interface TableRowDataProps {
  cells: TableCellDataProps[];
}
export interface TableProps {
  caption?: string;
  columnHeaders: TableCellDataProps[];
  rows: TableRowDataProps[];
}

export function Table({ caption, columnHeaders, rows }: TableProps) {
  return (
    <>
      {columnHeaders.length > 0 && (
        <table className="govuk-table">
          {caption && (
            <caption className="govuk-table__caption govuk-table__caption--m">
              {caption}
            </caption>
          )}
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              {columnHeaders.map((header) => {
                const headerAttr = {
                  className: 'govuk-table__header',
                };
                if (header.dataType) {
                  headerAttr.className += ` govuk-table__header--${header.dataType}`;
                }
                return (
                  <th scope="col" {...headerAttr} key={uuidv4()}>
                    {header.value}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {rows.map((row) => {
              return (
                <tr className="govuk-table__row" key={uuidv4()}>
                  {row.cells.map((cell, index) => {
                    if (index === 0) {
                      return (
                        <th
                          scope="row"
                          className="govuk-table__header"
                          key={uuidv4()}
                        >
                          {cell.value}
                        </th>
                      );
                    }
                    const cellAttr = {
                      className: 'govuk-table__cell',
                    };
                    if (cell.dataType) {
                      cellAttr.className += ` govuk-table__cell--${cell.dataType}`;
                    }
                    return (
                      <td {...cellAttr} key={uuidv4()}>
                        {cell.value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
