import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgClock = (props) =>
(
  <Svg
    width={24}
    height={24}
    
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 36 36"
    {...props}
    {...props.style}
    fill={props.color}
    stroke={props.color}
  >
    <G opacity={0.75} filter="url(#a)">
      <Path
        d="M18 32a16 16 0 1 1 0-32 16 16 0 0 1 0 32Zm0-29.538a13.538 13.538 0 1 0 0 27.076 13.538 13.538 0 0 0 0-27.076Z"
        fill={props.color}
      />
      <Path
        d="M18 32a16 16 0 1 1 0-32 16 16 0 0 1 0 32Zm0-29.538a13.538 13.538 0 1 0 0 27.076 13.538 13.538 0 0 0 0-27.076Z"
        fill={props.color}
      />
      <Path
        d="M24.77 24a1.23 1.23 0 0 1-.875-.357l-6.769-6.77A1.23 1.23 0 0 1 16.77 16V6.154a1.23 1.23 0 0 1 2.462 0v9.341l6.412 6.4A1.231 1.231 0 0 1 24.77 24Z"
        fill={props.color}
      />
      <Path
        d="M24.77 24a1.23 1.23 0 0 1-.875-.357l-6.769-6.77A1.23 1.23 0 0 1 16.77 16V6.154a1.23 1.23 0 0 1 2.462 0v9.341l6.412 6.4A1.231 1.231 0 0 1 24.77 24Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_28_468" transform="scale(.00063)" />
      </Pattern>
      <Pattern
        id="c"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_28_468"
          transform="matrix(.0013 0 0 .00063 -.533 0)"
        />
      </Pattern>
    </Defs>
  </Svg>
)

export default SvgClock
