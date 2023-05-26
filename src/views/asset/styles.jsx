import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../utils/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    symbol: {
        padding: 12,
        color: Colors.primary,
        fontSize: 20,
        fontWeight: Platform.select({ ios: '700', android: 'normal' })
    },
    name: {
        paddingHorizontal: 12,
        fontSize: 18,
        color: '#000',
    },
    price: {
        padding: 12,
        color: Colors.primary,
        fontSize: 24,
    },
})


export default styles
