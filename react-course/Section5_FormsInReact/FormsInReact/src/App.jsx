import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Leonardo", email: "leonardo@gmail.com", bio: "Sou Administrador", role: "admin" }} />
    </div>
  );
}

export default App;
