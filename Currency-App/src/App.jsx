import "./App.css";
import Currency from "./components/Currency";
import dotenv from 'dotenv';
dotenv.config();

function App() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Currency />
    </div>
  );
}

export default App;