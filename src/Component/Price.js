import React from 'react';

const Price = ({price}) => {
  const columns = []

  for(let key in price) {
    columns.push(
      <td key={key}>
        {price[key]}
        <a className="btn" role="button">Buy {key}</a>
      </td>
    )
  }

  return (
    <tr>
      <td>Price</td>
      {columns}
    </tr>
  );
}

export default Price;