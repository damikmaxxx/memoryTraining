import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgRandom = (props) => (
  <Svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-settings"
    {...props}
  >
    <Path d="m21.67 3.955-2.825-2.202L19.51 1l4.478 3.497L19.514 8l-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497L19.514 23l-.665-.753L21.733 20h-4.11c-3.896-.048-5.784-3.369-7.461-6.858C8.475 16.652 6.57 19.984 2.623 20H0v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023H0v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z" />
  </Svg>
)

export default SvgRandom
