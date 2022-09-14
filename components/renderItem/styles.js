import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    itemContainer: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#e4f0d0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    item: {
        fontSize: 18,
        color: '#738290',
        fontWeight: 'bold',
    },
    delete: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#738290'
    },
});