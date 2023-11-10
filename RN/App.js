import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {
	const [ enteredGoalText, setEnteredGoalText ] = useState('');
	const [ courseGoals, setCourseGoals ] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}

	function addGoalText() {
		setCourseGoals((currentCourseGoals) => [ ...currentCourseGoals, enteredGoalText ]);
	}

	return (
		<View style={styles.app}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} />
				<Button title="Add Goal" onPress={addGoalText} />
			</View>
			<View style={styles.goalsContainer}>{courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}</View>
		</View>
	);
}
/* flexbox in react native:

-- alignItems impact elements on the cross axis.
-- justifyContent impact elementes on the main axis.

- flexDirection: column, MAIN AXIS: top -> bottom, CROSS AXIS: left -> right.
- flexDirection: row, MAIN AXIS: left -> right, CROSS AXIS: top -> bottom.  

*/

const styles = StyleSheet.create({
	app: {
		flex: 1,
		padding: 40,
		paddingBottom: 8
	},
	inputContainer: {
		flex: 2,
		flexDirection: 'row', // MAIN AXIS: left -> right, CROSS AXIS: top -> bottom.
		alignItems: 'center', // impact elements on the cross axis.
		justifyContent: 'space-between', // impact elementes on the main axis.
		paddingBottom: 4,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		marginRight: 8,
		padding: 3,
		width: '70%'
	},

	goalsContainer: {
		flex: 8,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'start'
	}
});
