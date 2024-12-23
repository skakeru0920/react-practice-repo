import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Notes from "./routes/Notes.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./routes/NotFound.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Home />} />
			<Route path="/notes" element={<Notes />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);
