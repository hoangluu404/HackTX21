import React from 'react';

export default function Image(props) {
	return (
		<>
			<img
				type="submit"
				src={props.src}
				className="group relative w-5/6 flex place-self-center py-2 mx-8"
			>
				{props.name}
			</img>
		</>
	);
}
