import { useState } from 'react';
import React from 'react';
import WordList from '../words/WordList';

function TextBox() {
	const [newItem, setItem] = useState('');
	const [itemList, setList] = useState([]);

	function addItem() {
		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem,
		};

		setList((oldItems) => [...itemList, item]);

		setItem('');
	}

	return (
		// <form action='/search' method='post'>
		<>
			<input
				type='text'
				value={newItem}
				placeholder='Add new Item...'
				onChange={(e) => setItem(e.target.value)}
			/>
			<button onClick={() => addItem()} type='submit'>
				Submit
			</button>

			<WordList items={itemList} />
		</>
		// </form>
	);
}

export default TextBox;
