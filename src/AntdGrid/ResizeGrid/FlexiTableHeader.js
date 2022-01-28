import React from 'react';
import { Resizable } from 'react-resizable';
import PropTypes from 'prop-types';
import './FlexiTableHeader.scss';
import { useEffect } from 'react';

/* eslint-disable jsx-a11y/control-has-associated-label */
const ResizableTitle = (props) => {
  const { minWidth, maxWidth, onResize, isFixed, ...restProps } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return isFixed ? (
    <th
      {...restProps}
      // style={{
      //   minWidth: minWidth,
      //   maxWidth: maxWidth
      // }}
    />
  ) : (
    <Resizable
      width={maxWidth}
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
          minWidth: minWidth,
          maxWidth: maxWidth,
        }}
      />
    </Resizable>
  );
};
ResizableTitle.propTypes = {
  onResize: PropTypes.func,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  isFixed: PropTypes.bool,
};

ResizableTitle.defaultProps = {
  minWidth: 20,
  maxWidth: 20,
  onResize: () => {},
  isFixed: false,
};

export default ResizableTitle;
