import { Link } from "react-router";

function Notes() {
	const pages = Array.from({ length: 10 }, (_, i) => `page${i}`);

	return (
		<>
			<h1>Notes Page</h1>
			{pages.map((page, i) => (
				<div key={page}>
					<Link to={`/notes/${i}`}>{page}</Link>
					<br />
				</div>
			))}
		</>
	);
}

export default Notes;
