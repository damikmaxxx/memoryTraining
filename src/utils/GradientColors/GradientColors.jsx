
import { LinearGradient } from 'expo-linear-gradient';

export const GRADIENT_PURPLE = "GRADIENT_PURPLE";
export const GRADIENT_GREY_WHITE = "GRADIENT_GREY_WHITE";
export default function GradientColors(props) {
    const { color, children,style } = props
    if(!color) throw "Choice gradient, props 'colors'";
    switch (color) {
        case GRADIENT_PURPLE:
            return (
                <LinearGradient colors={['#A268ED', '#3034A1']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={style}>
                    {children}
                </LinearGradient>
            )
        case GRADIENT_GREY_WHITE:
            return (
                <LinearGradient colors={['#F3F3F3', '#F9F9F9']} start={{ x: 0, y: 0 }}  end={{ x: 1, y: 1 }} style={style}>
                    {children}
                </LinearGradient>
            )    
    }
    return null


}
