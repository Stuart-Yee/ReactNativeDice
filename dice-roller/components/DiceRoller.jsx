import { useState } from "react";
import DicePool from "../utils/dice";
import { View, Button, Text, StyleSheet} from "react-native"

const DiceRoller = (props) => {

    const [dicePool, setDicePool] = useState(new DicePool(1, 6));
    const [numDice, setNumDice] = useState(1);
    const [msg, setMsg] = useState("");

    const addDieHandler = () => {
        setDicePool((prevPool) => {
            prevPool.addDie();
            setNumDice(prevPool.size)
            return prevPool;
        })

    }

    const removeDieHandler = () => {
        setDicePool((prevPool) => {
            prevPool.removeDie();
            setNumDice(prevPool.size)
            return prevPool;
        })
    }

    const rollDiceHandler = () => {
        const { results, total } = dicePool.rollDicePool();
        console.log(results.join(", "));
        console.log(total);
        const message = `You rolled the following: ${results.join(", ")} with a total of ${total}`;
        setMsg(message);
        console.log(message);
    }

    return (
        <View style={{ height: "80%", width: "90%" }}>
            <View style={styles.dice}>
                <Text>
                    Number of 6-Sided Dice: {numDice}
                </Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Add Die" onPress={addDieHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="Remove Die" onPress={removeDieHandler} /></View>
                <View style={styles.button}>
                    <Button title="Roll Dice!" onPress={rollDiceHandler} /></View>
            </View>
            <View style={styles.results}>
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dice: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    buttons: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderWidth: 1,
        borderColor: "blue",
        margin: 2
    },
    results: {
        flex: 3,
        margin: 5,
        alignItems: "center"
    }
});

export default DiceRoller;