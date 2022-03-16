import React, { useState } from 'react'

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity,
} from 'react-native'

export function Home() {
	const [newSkill, setNewSkill] = useState('')
	const [mySkills, setMySkills] = useState([])

	function handleAddNewSkill() {
		setMySkills((oldState) => [...oldState, newSkill])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome!</Text>

			<TextInput
				style={styles.input}
				placeholder='New skill'
				placeholderTextColor='#555'
				onChangeText={setNewSkill}
			/>

			<TouchableOpacity
				style={styles.button}
				activeOpacity={0.7}
				onPress={handleAddNewSkill}>
				<Text style={styles.buttonText}>Add Skill</Text>
			</TouchableOpacity>

			<Text style={styles.skillTitle}>My Skills</Text>

			{mySkills.map((skill) => (
				<TouchableOpacity style={styles.buttonSkill} key={skill}>
					<Text style={styles.skillText}>{skill}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingVertical: 70,
		paddingHorizontal: 30,
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
	},
	input: {
		backgroundColor: '#1f1e25',
		color: '#fff',
		fontSize: 18,
		padding: Platform.OS === 'ios' ? 15 : 10,
		marginTop: 30,
		borderRadius: 7,
	},
	button: {
		backgroundColor: '#a370f7',
		padding: 15,
		borderRadius: 7,
		alignItems: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold',
	},
	skillTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	buttonSkill: {
		backgroundColor: '#1f1e25',
		padding: 15,
		margin: 5,
		borderRadius: 50,
		alignItems: 'center',
	},
	skillText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
