import React, { useState, useEffect } from 'react'

import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	FlatList,
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface ISkillData {
	id: string
	name: string
}

export function Home() {
	const [newSkill, setNewSkill] = useState('')
	const [greeting, setGreeting] = useState('')
	const [mySkills, setMySkills] = useState<ISkillData[]>([])

	function handleAddNewSkill() {
		const data = {
			id: String(new Date().getTime()),
			name: newSkill,
		}

		setMySkills((oldState) => [...oldState, data])
	}

	function handleRemoveSkill(skillId: string) {
		setMySkills((oldState) => oldState.filter((skill) => skill.id !== skillId))
	}

	useEffect(() => {
		const currentHour = new Date().getHours()

		if (currentHour < 12) setGreeting('Good morning')
		else if (currentHour >= 12 && currentHour < 18)
			setGreeting('Good afternoon')
		else setGreeting('Good night')
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome!</Text>

			<Text style={styles.greetins}>{greeting}</Text>

			<TextInput
				style={styles.input}
				placeholder='New skill'
				placeholderTextColor='#555'
				onChangeText={setNewSkill}
			/>

			<Button onPress={handleAddNewSkill} title='Add Skill' />

			<Text style={styles.skillTitle}>My Skills</Text>

			<FlatList
				data={mySkills}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<SkillCard
						skill={item.name}
						onPress={() => handleRemoveSkill(item.id)}
					/>
				)}
			/>
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
	skillTitle: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		marginVertical: 20,
	},
	greetins: {
		color: '#fff',
	},
})
