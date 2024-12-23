import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Notes from "./routes/Notes.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";
import DashBoard from "./routes/DashBoard.jsx";
import Header from "./Header.jsx";
import AnimalsTop from "./routes/AnimalsTop.jsx";
import Cat from "./routes/Cat.jsx";
import Dog from "./routes/Dog.jsx";
import Animals from "./routes/Animals.jsx";
import Page from "./routes/Page.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route index element={<Home />} />
			<Route path="/notes" element={<Notes />} />
			<Route path="/notes/:id" element={<Page />} />
			<Route path="/dashboard" element={<DashBoard />} />
			<Route path="/*" element={<NotFound />} />
			<Route path="/animals" element={<Animals />}>
				<Route index element={<AnimalsTop />} />
				<Route path="cat" element={<Cat />} />
				<Route path="dog" element={<Dog />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
