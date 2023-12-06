import React from 'react';

function TextBox() {
	return (
		<form action='/search' method='post'>
			<input type='text' name='query' placeholder='Search...' />
			<button type='submit'>Submit</button>
		</form>
	);
}

export default TextBox;
