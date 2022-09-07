import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Carro from "./components/Carro/Carro";

function App() {
  return (
    <div className="app">
        <Navbar />
        <Carro />
        <Products />
    </div>
  )
}

export default App;