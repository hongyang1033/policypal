import React from 'react';

const Row = ({column, row}) => {

  return row.map((item, index) => {
    const values = []

    for(let key in column) {
      if(typeof(item[key]) === 'boolean') {
        values.push(<td data={column[key]} key={column[key]}>
          {item[key] ? 'YES' : 'NO'}
      </td>)
      } else {
        values.push (
          <td data={column[key]} key={column[key]}>
            {item[key] === undefined ? 'N/A' : item[key]}
          </td>
        )
      }
    }

    return <tr key={index}>{values}</tr>
  })

}

export default Row;