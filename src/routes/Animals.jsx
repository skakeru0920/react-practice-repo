import { Outlet } from "react-router";

function Animals() {
	return (
		<>
			<p>show animal use Outlet↓</p>
			<Outlet />
		</>
	);
}

export default Animals;
