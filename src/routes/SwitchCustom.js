import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// components
import Entrance from '../pages/Custom/Entrance'
import Introduction from '../pages/Custom/Introduction'
import Customization from '../pages/Custom/Customization'

function SwitchCustom(props) {
  const path = props.location.pathname
  const [display, setDisplay] = useState(<></>)

  useEffect(() => {
    const params = path.split('/').pop()
    let result = <></>

    switch (params) {
      case 'entrance':
        result = <Entrance />
        break
      case 'introduction':
        result = <Introduction />
        break
      case 'process':
        result = <Customization />
        break
      // case 'result':
      //   result = <></>
      //   break
      default:
        break
    }

    setDisplay(result)
  }, [path])

  return <>{display}</>
}

export default withRouter(SwitchCustom)
