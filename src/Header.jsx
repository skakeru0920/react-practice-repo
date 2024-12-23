import { Link } from "react-router";

function Header() {
	return (
		<nav style={navStyle}>
			<Link to="/" style={linkStyle}>
				Home
			</Link>
			<Link to="/notes" style={linkStyle}>
				Notes
			</Link>
			<Link to="/dashboard" style={linkStyle}>
				Dashboard
			</Link>
		</nav>
	);
}

const navStyle = {
	display: "flex",
	justifyContent: "space-evenly",
	alignItems: "center",
	backgroundColor: "#f4f4f4",
	padding: "10px 0",
};

const linkStyle = {
	padding: "10px 20px",
	borderRadius: "5px",
	backgroundColor: "#007BFF",
	color: "#fff",
};
export default Header;
