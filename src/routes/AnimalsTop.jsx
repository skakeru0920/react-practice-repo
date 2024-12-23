import { Link } from "react-router";
function AnimalsTop() {
	return (
		<>
			<h1>animals default</h1>
			<Link to="/animals/cat">cat</Link>
			<p></p>
			<Link to="/animals/dog">dog</Link>
		</>
	);
}

export default AnimalsTop;
