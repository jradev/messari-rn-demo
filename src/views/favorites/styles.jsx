import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    emptyContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    empty: {
        fontSize: 24,
        color: Colors.black,
        alignSelf: 'center',
        marginTop: 32
    }
})


export default styles
