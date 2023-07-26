import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"

const SvgSettings = (props) => (
  <Svg
    width={24}
    height={24}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 34 34"
    {...props}
    {...props.style}
    fill={props.color}
    stroke={props.color}
  >
    <G opacity={0.75}>
      <Path
        d="M2.418 20.665 4 21.394c.66.309.967 1.06.725 1.744L4.11 24.77c-.462 1.259-.308 2.606.461 3.687a3.963 3.963 0 0 0 3.297 1.745c.484 0 .967-.089 1.429-.265l1.626-.618c.154-.067.308-.089.484-.089.527 0 1.033.31 1.252.817l.726 1.59A3.974 3.974 0 0 0 17.033 34a3.974 3.974 0 0 0 3.648-2.362l.726-1.59a1.38 1.38 0 0 1 1.252-.817c.154 0 .33.022.484.088l1.626.64c.462.177.945.288 1.429.288 1.297 0 2.527-.685 3.296-1.767a4.05 4.05 0 0 0 .462-3.709l-.615-1.633a1.401 1.401 0 0 1 .725-1.745l1.582-.728A3.994 3.994 0 0 0 34 17c0-1.59-.901-3.003-2.352-3.665l-1.582-.729a1.402 1.402 0 0 1-.725-1.744l.615-1.633c.462-1.259.308-2.606-.462-3.687a3.964 3.964 0 0 0-3.296-1.745c-.484 0-.967.089-1.429.265l-1.626.619a1.179 1.179 0 0 1-.484.088c-.527 0-1.033-.31-1.252-.817l-.726-1.59A3.974 3.974 0 0 0 17.033 0a4.088 4.088 0 0 0-3.714 2.384l-.726 1.59a1.38 1.38 0 0 1-1.252.817c-.154 0-.33-.022-.484-.088l-1.626-.619a3.993 3.993 0 0 0-1.429-.265c-1.297 0-2.527.663-3.297 1.745-.747 1.104-.923 2.45-.461 3.687l.615 1.633a1.402 1.402 0 0 1-.725 1.745l-1.582.728A3.994 3.994 0 0 0 0 17.022c0 1.59.967 2.98 2.418 3.643Zm1.076-4.923 1.583-.729c1.912-.883 2.835-3.113 2.088-5.078L6.55 8.301c-.22-.596 0-1.037.153-1.258a1.339 1.339 0 0 1 1.627-.508l1.626.618c.462.177.923.265 1.407.265 1.56 0 2.989-.927 3.648-2.362l.725-1.59c.33-.75 1.033-.817 1.253-.817.22 0 .901.067 1.253.817l.725 1.59c.66 1.435 2.088 2.362 3.648 2.362.484 0 .945-.088 1.407-.265l1.626-.618c.616-.22 1.253 0 1.627.508.154.22.373.662.154 1.258l-.616 1.634c-.725 1.965.176 4.195 2.088 5.078l1.582.729c.748.33.814 1.037.814 1.258 0 .22-.066.905-.814 1.258l-1.582.729c-1.912.883-2.835 3.113-2.088 5.078l.616 1.634c.22.596 0 1.037-.154 1.258-.352.53-1.011.75-1.627.508l-1.626-.618a3.875 3.875 0 0 0-1.407-.265c-1.56 0-2.989.927-3.648 2.362l-.725 1.59c-.33.75-1.033.817-1.253.817-.22 0-.901-.067-1.253-.817l-.725-1.59c-.66-1.435-2.088-2.362-3.648-2.362-.484 0-.945.088-1.407.265l-1.626.618c-.616.22-1.253 0-1.627-.508-.154-.22-.373-.662-.154-1.258l.616-1.634c.725-1.965-.176-4.195-2.088-5.078l-1.583-.729c-.747-.33-.813-1.037-.813-1.258 0-.22.066-.905.813-1.258Z"
        fill={props.color}
      />
      <Path
        d="M2.418 20.665 4 21.394c.66.309.967 1.06.725 1.744L4.11 24.77c-.462 1.259-.308 2.606.461 3.687a3.963 3.963 0 0 0 3.297 1.745c.484 0 .967-.089 1.429-.265l1.626-.618c.154-.067.308-.089.484-.089.527 0 1.033.31 1.252.817l.726 1.59A3.974 3.974 0 0 0 17.033 34a3.974 3.974 0 0 0 3.648-2.362l.726-1.59a1.38 1.38 0 0 1 1.252-.817c.154 0 .33.022.484.088l1.626.64c.462.177.945.288 1.429.288 1.297 0 2.527-.685 3.296-1.767a4.05 4.05 0 0 0 .462-3.709l-.615-1.633a1.401 1.401 0 0 1 .725-1.745l1.582-.728A3.994 3.994 0 0 0 34 17c0-1.59-.901-3.003-2.352-3.665l-1.582-.729a1.402 1.402 0 0 1-.725-1.744l.615-1.633c.462-1.259.308-2.606-.462-3.687a3.964 3.964 0 0 0-3.296-1.745c-.484 0-.967.089-1.429.265l-1.626.619a1.179 1.179 0 0 1-.484.088c-.527 0-1.033-.31-1.252-.817l-.726-1.59A3.974 3.974 0 0 0 17.033 0a4.088 4.088 0 0 0-3.714 2.384l-.726 1.59a1.38 1.38 0 0 1-1.252.817c-.154 0-.33-.022-.484-.088l-1.626-.619a3.993 3.993 0 0 0-1.429-.265c-1.297 0-2.527.663-3.297 1.745-.747 1.104-.923 2.45-.461 3.687l.615 1.633a1.402 1.402 0 0 1-.725 1.745l-1.582.728A3.994 3.994 0 0 0 0 17.022c0 1.59.967 2.98 2.418 3.643Zm1.076-4.923 1.583-.729c1.912-.883 2.835-3.113 2.088-5.078L6.55 8.301c-.22-.596 0-1.037.153-1.258a1.339 1.339 0 0 1 1.627-.508l1.626.618c.462.177.923.265 1.407.265 1.56 0 2.989-.927 3.648-2.362l.725-1.59c.33-.75 1.033-.817 1.253-.817.22 0 .901.067 1.253.817l.725 1.59c.66 1.435 2.088 2.362 3.648 2.362.484 0 .945-.088 1.407-.265l1.626-.618c.616-.22 1.253 0 1.627.508.154.22.373.662.154 1.258l-.616 1.634c-.725 1.965.176 4.195 2.088 5.078l1.582.729c.748.33.814 1.037.814 1.258 0 .22-.066.905-.814 1.258l-1.582.729c-1.912.883-2.835 3.113-2.088 5.078l.616 1.634c.22.596 0 1.037-.154 1.258-.352.53-1.011.75-1.627.508l-1.626-.618a3.875 3.875 0 0 0-1.407-.265c-1.56 0-2.989.927-3.648 2.362l-.725 1.59c-.33.75-1.033.817-1.253.817-.22 0-.901-.067-1.253-.817l-.725-1.59c-.66-1.435-2.088-2.362-3.648-2.362-.484 0-.945.088-1.407.265l-1.626.618c-.616.22-1.253 0-1.627-.508-.154-.22-.373-.662-.154-1.258l.616-1.634c.725-1.965-.176-4.195-2.088-5.078l-1.583-.729c-.747-.33-.813-1.037-.813-1.258 0-.22.066-.905.813-1.258Z"
        fill={props.color}
      />
      <Path
        d="M16.967 22.74c3.143 0 5.714-2.583 5.714-5.74s-2.571-5.74-5.714-5.74c-3.143 0-5.714 2.583-5.714 5.74s2.55 5.74 5.714 5.74Zm0-8.83c1.692 0 3.077 1.39 3.077 3.09s-1.385 3.091-3.077 3.091S13.89 18.701 13.89 17c0-1.7 1.385-3.09 3.077-3.09Z"
        fill={props.color}
      />
      <Path
        d="M16.967 22.74c3.143 0 5.714-2.583 5.714-5.74s-2.571-5.74-5.714-5.74c-3.143 0-5.714 2.583-5.714 5.74s2.55 5.74 5.714 5.74Zm0-8.83c1.692 0 3.077 1.39 3.077 3.09s-1.385 3.091-3.077 3.091S13.89 18.701 13.89 17c0-1.7 1.385-3.09 3.077-3.09Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#c" transform="scale(.00063)" />
      </Pattern>
      <Pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#c" transform="matrix(.00063 0 0 .00063 -.002 0)" />
      </Pattern>
    
    </Defs>
  </Svg>
)

export default SvgSettings
