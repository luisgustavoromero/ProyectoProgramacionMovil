import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

type Props ={
    title: string,
    onPress: ()=>void
    variant?: 'boton1' | 'boton2' | 'boton3'
}
export default function CustomButtom({title, onPress, variant = 'boton1'}: Props){
    const styles =getStyles(variant)
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}
const getStyles = (variant: 'boton1' | 'boton2' | 'boton3') =>
    StyleSheet.create({
        button:{
            borderColor: "black",
            borderRadius: 10,
            padding: 12,
            width: '88%',
            alignItems:'center',
            marginBottom: 10,
            backgroundColor: variant === 'boton1'?'#debb89':
                                variant === 'boton2' ? '#fefcf4': '#111417'
        },
        buttonTitle: {
            fontSize: 16,
            color: variant === 'boton1'? "black":
                        variant === 'boton2'? '#111417': '#debb89',
                        fontWeight: 'bold',
        }
    })