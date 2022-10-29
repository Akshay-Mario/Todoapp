import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, Text, View, Image, Pressable } from "react-native"


export default function GoalsInput(props) {

    const [expense, setexpense] = useState();
    const [goals, setGoals] = useState('');

    function addgoalsubfunct() {
        if (expense != [] || goals != []) {
            props.onAddGoal(goals, expense);
        }

        setGoals('');
        setexpense();
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputcontainer}>
            <Image style={styles.image} source={require('../assets/images/creditcard.png')} />
                <View style={styles.inputcontainer2}>
                    <TextInput style={styles.textinput} value={goals} onChangeText={setGoals} placeholder='Expense Description' />
                    <TextInput keyboardType='number-pad' value={expense} keyboardAppearance={('default', 'dark', 'dark')} onChangeText={setexpense} placeholder='EnterAmount' style={styles.textinput2} />
                </View>
                <View style={styles.buttoncontainer}>
                    <View style={styles.buttonstyle}>
                        <Pressable style={styles.button} onPress={addgoalsubfunct}>
                            <Text style={styles.text}>Add Item</Text>
                        </Pressable>
                    </View>
                    <View style={styles.buttonstyle}>
                        <Pressable style={styles.button} onPress={props.setvalue}>
                            <Text style={styles.text}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>

    )

}


const styles = StyleSheet.create({
    textinput: {
        // borderWidth: 1,
        // borderColor: '#36C99A',
        width: '100%',
        // borderRadius: 5,
        padding: 7,
        marginRight: 5,
        color: 'black',
        backgroundColor: '#f7f7f7',
        padding: 10,
        borderRadius: 5
    },
    textinput2: {
        // borderWidth: 1,
        // borderColor: '#36C99A',
        width: '100%',
        // borderRadius: 5,
        padding: 7,
        marginRight: 5,
        color: 'black',
        backgroundColor: '#f7f7f7',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    inputcontainer2: {
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        // borderBottomWidth: 1,
        // borderBottomColor: '#ffc114',
    },
    inputcontainer: {
        flex: 1,
        flexDirection: 'column', //default value is column so it's fine to remove this
        //justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
        // borderBottomWidth: 1,
        // borderBottomColor: '#ffc114',
    },
    modalstyle: {
        backgroundColor: 'red'
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttonstyle: {
        width: '40%',
        marginHorizontal: 8
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'black',
        borderRadius: 10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    image: {
        height: 100,
        width: 100,
        margin: 20
    }
})