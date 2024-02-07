import { NavBar } from "./components/NavBar";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-600 font-sans">
      <NavBar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
