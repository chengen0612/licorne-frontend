import React from 'react'

function CostList(props) {
  const { topNote, middleNote, baseNote } = props

  const total = +topNote.price + +middleNote.price + +baseNote.price

  // add comma to price
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <table className="cust-res__cost-list">
        <thead>
          <tr>
            <th></th>
            <th>材料</th>
            <th>&nbsp;&nbsp;&nbsp; 單價</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>前調</td>
            <td>{topNote.title}</td>
            <td className="cust-res__price">
              NT$ {numberWithCommas(topNote.price)}
            </td>
          </tr>
          <tr>
            <td>中調</td>
            <td>{middleNote.title}</td>
            <td className="cust-res__price">
              NT$ {numberWithCommas(middleNote.price)}
            </td>
          </tr>
          <tr>
            <td>後調</td>
            <td>{baseNote.title}</td>
            <td className="cust-res__price">
              NT$ {numberWithCommas(baseNote.price)}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td className="cust-res__price">NT$ {numberWithCommas(total)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default CostList
