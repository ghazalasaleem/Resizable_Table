import React from 'react';
import { Table } from 'antd';
import { useState } from 'react';
import { columnsData, data } from '../../config/GridConfig';
import ResizableTitle from './FlexiTableHeader';
import './ResizableGrid.scss';

const ResizableGrid = () => {
  const [columns, setColumns] = useState(columnsData);
  const [isAutoFit, setIsAutoFit] = useState(false);

  const checkAutoFit = (colData) => {
    let flag = false;
    colData.forEach((element) => {
      if (!element.ellipsis) {
        flag = true;
      }
    });
    setIsAutoFit(flag);
  };

  const handleClick = (key) => {
    const cols = [...columns];
    let autoFitFlag;
    cols.map((col) => {
      if (col.key === key) {
        autoFitFlag = !col.isFixed;
        col.ellipsis = !autoFitFlag;
        col.isFixed = autoFitFlag;
        // if (autoFitFlag) {
        //   col.prevWidth = col.width
        //   col.width = 700;
        // } else {
        //   col.width = col.prevWidth;
        //   col.prevWidth = 700;
        // }
      }
      return col;
    });
    setColumns(cols);
    checkAutoFit([...cols]);
  };

  const handleResize =
    (index) =>
    (e, { size }) => {
      setColumns((prevState) => {
        const nextColumns = [...prevState];
        nextColumns[index] = {
          ...nextColumns[index],
          width: size.width,
          isResized: true,
        };
        return nextColumns;
      });
    };
  const calcWidth = (val) => {
    let width = 100;
    if (typeof val === 'number') {
      width = val;
    } else if (typeof val === 'string' && val.indexOf('%') > -1) {
      const widthPercent = parseInt(val.replace('%', ''));
      width = (window.innerWidth * widthPercent) / 100;
    }
    return width;
  };
  const tableCols = columns.map((col, index) => ({
    ...col,
    width: col.width,
    ellipsis: !col.isFixed,
    onHeaderCell: (column) => ({
      width: calcWidth(column.width),
      onResize: handleResize(index),
      isFixed: column.isFixed,
    }),
    render: (label) => (
      <span onClick={() => handleClick(col.key)}>{label}</span>
    ),
  }));

  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  return (
    <div className={isAutoFit ? 'resizeGrid autofit' : 'resizeGrid'}>
      <Table
        dataSource={data}
        columns={tableCols}
        pagination={false}
        components={components}
        bordered
      />
      {/* <button onClick={handleClick}>Click to change column width </button> */}
    </div>
  );
};

export default ResizableGrid;
