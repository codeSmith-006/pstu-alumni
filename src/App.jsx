import Navbar from "./Components/Navbar/Navbar";
import "../src/index.css";
import ThemeDemo from "./Components/ThemeDemo";
function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-tr from-gray-50 via-gray-100 to-gray-50
            dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
            transition-colors duration-700"
    >
      <Navbar />
      <div className="md:mt-20">
        <ThemeDemo></ThemeDemo>
      </div>
    </div>
  );
}

export default App;
