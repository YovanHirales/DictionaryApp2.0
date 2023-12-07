import React from 'react';

function WordList(props) {
	const list = props.items.map((element) => (
		<li key={element.id}>{element.value}</li>
	));

	return <ul>{list}</ul>;
}

export default WordList;
