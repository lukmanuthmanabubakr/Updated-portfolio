import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  const path = window.location.pathname;
  const isHome = path === "/" || path === "" || path === "/index.html";
  return isHome ? <Home /> : <NotFound />;
}

export default App;