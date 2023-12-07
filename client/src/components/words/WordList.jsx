import React, { useEffect } from 'react';

function WordList({ words, getWords }) {
	useEffect(() => {
		getWords();
	}, []);

	const list = words.map((word) => (
		<div key={word.word_id}>
			<li key={word.word_id}>
				{word.word} - {word.part_of_speech_1} - {word.definition_1}
			</li>
			<hr />
		</div>
	));

	return <div>{list.reverse()}</div>;
}

export default WordList;
