import { Table } from 'antd';
import { useState } from 'react';
import { columnsData, data } from '../config/GridConfig';
import './Grid.scss'; 


function Grid() {
  const [columns, setColumns] = useState(columnsData);

  const handleClick = (args) => {
    const cols = [...columns];
      cols.map((col) => {
        if(col.key === 'desc') {
          col.ellipsis = !col.ellipsis;
        }
        return col;
      });
    setColumns(cols);
  };

  return (
    <div className="grid">
    <Table dataSource={data} columns={columns} pagination={false} bordered/>
    <button onClick={handleClick}>Click to change column width </button>
    </div>
  );
}

export default Grid;
