import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use } from "react-native-svg"

const SvgFolder = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    {...props.style}
    viewBox="0 0 33 28"
  >
    <G opacity={0.75}>
      <Path
      fill={props.color}
      stroke={props.color}
        d="M0 3.469A3.469 3.469 0 0 1 3.469 0H9.86c2.215 0 4.07 1.295 5.344 2.738.948 1.073 2.092 1.887 3.295 1.887h10.406a3.469 3.469 0 0 1 3.469 3.469V24.28a3.469 3.469 0 0 1-3.469 3.469H3.47A3.469 3.469 0 0 1 0 24.281V3.47Zm3.469-1.156a1.156 1.156 0 0 0-1.156 1.156V9.25h27.75V8.094a1.156 1.156 0 0 0-1.157-1.156H18.5c-2.23 0-3.954-1.455-5.027-2.67-1.046-1.183-2.327-1.955-3.613-1.955H3.47Zm26.593 9.25H2.313V24.28a1.156 1.156 0 0 0 1.157 1.157h25.437a1.156 1.156 0 0 0 1.157-1.157V11.563Z"

      />
      <Path
      fill={props.color}
      stroke={props.color}
        d="M0 3.469A3.469 3.469 0 0 1 3.469 0H9.86c2.215 0 4.07 1.295 5.344 2.738.948 1.073 2.092 1.887 3.295 1.887h10.406a3.469 3.469 0 0 1 3.469 3.469V24.28a3.469 3.469 0 0 1-3.469 3.469H3.47A3.469 3.469 0 0 1 0 24.281V3.47Zm3.469-1.156a1.156 1.156 0 0 0-1.156 1.156V9.25h27.75V8.094a1.156 1.156 0 0 0-1.157-1.156H18.5c-2.23 0-3.954-1.455-5.027-2.67-1.046-1.183-2.327-1.955-3.613-1.955H3.47Zm26.593 9.25H2.313V24.28a1.156 1.156 0 0 0 1.157 1.157h25.437a1.156 1.156 0 0 0 1.157-1.157V11.563Z"
      />
    </G>
    <Defs>
      <Pattern
      {...props.style}
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_40_152"
          transform="matrix(.00063 0 0 .00073 0 -.083)"
        />
      </Pattern>
    </Defs>
  </Svg>
)

export default SvgFolder
