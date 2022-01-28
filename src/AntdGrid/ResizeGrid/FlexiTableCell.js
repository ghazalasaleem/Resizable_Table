import React from 'react';
const FlexiTableCell = (props) => {
  const { minWidth, maxWidth, ...restProps } = props;
  return (
    <td
      {...restProps}
      style={{
        minWidth: minWidth,
        maxWidth: maxWidth,
      }}
    />
  );
};

export default FlexiTableCell;
