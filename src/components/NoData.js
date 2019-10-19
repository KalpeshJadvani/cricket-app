import React from 'react';
function NoData(props) {
  return (
    <div
      className="box"
      style={{
        height: '320px',
        display: 'table'
      }}
    >
      <h1
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          width: 'fit-content',
          textAlign: 'center'
        }}
      >
        {props.msg}
      </h1>
    </div>
  );
}

export default NoData;
