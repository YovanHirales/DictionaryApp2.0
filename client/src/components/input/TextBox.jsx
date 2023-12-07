import { useState } from 'react';
import React from 'react';
import WordList from '../words/WordList';

function TextBox() {
	const [newItem, setItem] = useState('');
	const [words, setWords] = useState([]);

	const getWords = async () => {
		try {
			const response = await fetch('http://localhost:5001/words');
			const parseRes = await response.json();

			setWords(() => parseRes.reverse());
		} catch (error) {
			console.error(error.message);
		}
	};

	const addItem = async (e) => {
		try {
			e.preventDefault();

			const body = { words: newItem };
			await fetch('http://localhost:5001/words', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			setItem('');
			getWords();
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<form onSubmit={newItem ? addItem : (e) => e.preventDefault()}>
			<input
				type='text'
				value={newItem}
				placeholder='Add new Item...'
				onChange={(e) => setItem(e.target.value)}
			/>
			<button type='submit'>Submit</button>
			<hr />
			<WordList words={words} getWords={getWords} />
		</form>
	);
}

export default TextBox;
