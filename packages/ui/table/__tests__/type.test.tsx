/* eslint-disable */
import * as React from 'react';
import Table from '../src';
import { TableColumnProps } from '../src';

const { Column, ColumnGroup } = Table;

describe('Table.typescript', () => {
  it('Column', () => {
    const table = (
      <Table>
        <Column dataIndex="test" title="test" sorter />
      </Table>
    );
    expect(table).toBeTruthy();
  });
  it('ColumnGroup', () => {
    const table = (
      <Table>
        <Column dataIndex="test" title="test" sorter />
        <ColumnGroup>
          <Column dataIndex="test" title="test" sorter />
        </ColumnGroup>
      </Table>
    );
    expect(table).toBeTruthy();
  });
  it('selections', () => {
    const table = <Table rowSelection={{ selections: [Table.SELECTION_ALL] }} />;
    expect(table).toBeTruthy();
  });
});

describe('Table.typescript types', () => {
  it('ColumnProps', () => {
    interface User {
      name: string;
    }

    const columns: TableColumnProps<User>[] = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
    ];

    expect(columns).toBeTruthy();
  });
});
