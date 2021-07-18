import React from 'react'

function CostList(props) {
  const { topNote, middleNote, baseNote } = props

  const total = +topNote.price + +middleNote.price + +baseNote.price

  return (
    <>
      <table className="cost-list">
        <thead>
          <tr>
            <th className="cost-list__col"></th>
            <th className="cost-list__col">材料</th>
            <th className="cost-list__col">單價</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>前調</td>
            <td>{topNote.title}</td>
            <td>NT$ {topNote.price}</td>
          </tr>
          <tr>
            <td>中調</td>
            <td>{middleNote.title}</td>
            <td>NT$ {middleNote.price}</td>
          </tr>
          <tr>
            <td>後調</td>
            <td>{baseNote.title}</td>
            <td>NT$ {baseNote.price}</td>
          </tr>
        </tbody>
        <tfoot className="cost-list__foot">
          <tr>
            <td></td>
            <td></td>
            <td>NT$ {total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default CostList
