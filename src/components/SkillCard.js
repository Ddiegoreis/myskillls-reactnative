import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export function SkillCard({ skill }) {
	return (
		<TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}>
			<Text style={styles.skillText}>{skill}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonSkill: {
		backgroundColor: '#1f1e25',
		padding: 15,
		marginVertical: 5,
		borderRadius: 50,
		alignItems: 'center',
	},
	skillText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
