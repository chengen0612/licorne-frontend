import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
})

//--------
const AirbnbSlider = withStyles({
  root: {
    color: '#223843',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
  valueLabel: {
    left: -3, //改變標籤位置
  },
})(Slider)
//--------

// const marks = [
//   {
//     value: 0,
//     label: 1000,
//   },
//   {
//     value: 100,
//     label: 5000,
//   },
// ]

function valuetext(value) {
  return `${40 * value + 1000}`
}

// function valueLabelFormat(value) {
//   return marks.find((mark) => mark.value === value).label
// }

export default function RangeSlider(props) {
  const { value, setValue, handleChange } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom></Typography>
      <AirbnbSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
      />
    </div>
  )
}
