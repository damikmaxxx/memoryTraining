import * as React from "react"
import Svg, { Path, Defs, Pattern, Use } from "react-native-svg"

const SvgPlusSquare = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      d="M20.308 20.308H3.103a.846.846 0 0 0 0 1.692h17.769C21.47 22 22 21.47 22 20.872V3.102a.846.846 0 0 0-1.692 0v17.206ZM19.18 1.128C19.18.588 18.752 0 18.05 0H1.128C.428 0 0 .586 0 1.128v16.923c0 .7.587 1.129 1.128 1.129h16.923c.54 0 1.129-.428 1.129-1.129V1.128Zm-17.488.564h15.795v15.795H1.692V1.692Zm7.052 7.052H5.359a.846.846 0 0 0 0 1.692h3.385v3.384a.846.846 0 0 0 1.692 0v-3.384h3.384a.847.847 0 0 0 0-1.692h-3.384V5.359a.846.846 0 0 0-1.692 0v3.385Z"
      fill="url(#a)"
    />
    <Path
      d="M20.308 20.308H3.103a.846.846 0 0 0 0 1.692h17.769C21.47 22 22 21.47 22 20.872V3.102a.846.846 0 0 0-1.692 0v17.206ZM19.18 1.128C19.18.588 18.752 0 18.05 0H1.128C.428 0 0 .586 0 1.128v16.923c0 .7.587 1.129 1.128 1.129h16.923c.54 0 1.129-.428 1.129-1.129V1.128Zm-17.488.564h15.795v15.795H1.692V1.692Zm7.052 7.052H5.359a.846.846 0 0 0 0 1.692h3.385v3.384a.846.846 0 0 0 1.692 0v-3.384h3.384a.847.847 0 0 0 0-1.692h-3.384V5.359a.846.846 0 0 0-1.692 0v3.385Z"
      fill="#151F44"
    />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_49_422" transform="scale(.00063)" />
      </Pattern>
    </Defs>
  </Svg>
)

export default SvgPlusSquare
