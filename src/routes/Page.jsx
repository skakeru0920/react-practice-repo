import { useParams } from "react-router";

function Page() {
	const params = useParams();
	return <h1> This is Page {params.id}</h1>;
}
export default Page;
