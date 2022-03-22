import React from 'react'
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	TouchableOpacityProps,
} from 'react-native'

interface ISkillCardProps extends TouchableOpacityProps {
	skill: string
}

export function SkillCard({ skill, ...rest }: ISkillCardProps) {
	return (
		<TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...rest}>
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
