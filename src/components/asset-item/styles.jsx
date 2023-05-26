import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../utils/constant";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // minHeight: 120,
        borderBottomWidth: 1,
        borderColor: '#d2d2d2',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#fff'
    },
    col: {
        flexDirection: 'column',
        paddingLeft: 10
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    symbol: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: Platform.select({ ios: '700', android: 'normal' })
    },
    name: {
        fontSize: 18,
        color: '#000',
    },
    price: {
        color: Colors.primary,
        fontSize: 20,
    },
    imageContainer: {
        elevation: 999,
        zIndex: 999
    },
    image: {
        height: 24,
        width: 24
    }
})


export default styles
