import { StyleSheet, View, Text, Pressable } from "react-native"


export default function GoalItem(props) {
    // function onpressitem() {
    //     console.log('Pressed')
    //     props.ondelete();
    // }

    return (

        <View style={styles.goalitem}>
            <Pressable
                android_ripple={{ color: '#ddddd' }}
                onPress={props.ondelete.bind(this, props.text.id)}
                style={({ pressed }) => pressed && styles.onpress}>
                <Text style={styles.goaltext}>{props.text.text}: {props.text.expense}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    goalitem: {
        margin: 4,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
    goaltext: {
        color: 'Black',
        padding: 15,
    },
    onpress: {
        margin: 4,
        borderRadius: 5,
        backgroundColor: 'white'
    }
})
