import React from 'react';
import { Resizable } from 'react-resizable';
import PropTypes from 'prop-types';
import './FlexiTableHeader.scss';
import { useEffect } from 'react';

/* eslint-disable jsx-a11y/control-has-associated-label */
const ResizableTitle = (props) => {
  const { onResize, width, isFixed, ...restProps } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return isFixed ? (
    <th {...restProps} />
  ) : (
    <Resizable
      width={width}
      height={0}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th
        {...restProps}
        style={{
          minWidth: width,
          maxWidth: '700px',
        }}
      />
    </Resizable>
  );
};
ResizableTitle.propTypes = {
  onResize: PropTypes.func,
  width: PropTypes.number,
  isFixed: PropTypes.bool,
};

ResizableTitle.defaultProps = {
  width: 20,
  onResize: () => {},
  isFixed: false,
};

export default ResizableTitle;
