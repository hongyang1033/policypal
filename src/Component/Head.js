import React from 'react';

const Head = ({column}) => {
  const columns = []

  for(let key in column) {
    columns.push(<th key={key}>{column[key]}</th>)
  }

  return (
    <tr>{columns}</tr>
  );
}

export default Head;

