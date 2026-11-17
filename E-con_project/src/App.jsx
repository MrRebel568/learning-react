import Navbar from "./components/Navbar";
import AppRouting from "./routers/AppRouting";

const App = () => {
  return (
    <div className="h-screen p-4 gap-10 flex flex-col">
      <Navbar />
      <AppRouting />
    </div>
  );
};

export default App;
