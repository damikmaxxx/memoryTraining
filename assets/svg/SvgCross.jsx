import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgCross = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    {...props.style}
  >
    <Path
      d="M19 14.427 14.423 19l-4.914-4.927L4.577 19 0 14.427 4.932 9.5 0 4.608 4.595 0l4.914 4.91L14.405 0 19 4.608 14.068 9.5 19 14.427Z"
      fill="#F1F1F1"
    />
  </Svg>
)

export default SvgCross
