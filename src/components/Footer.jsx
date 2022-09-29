import React from "react";

function Footer() {
	const year = new Date().getFullYear();

	console.log(year);
	return (
		<footer>
			<p>{"copyright © " + year}</p>
		</footer>
	)
}

export default Footer
