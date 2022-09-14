import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Carro from "./components/Carro/Carro";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <div className="app">
        <Navbar />
        <Carro />
        <Carrito />
        <Products />
    </div>
  )
}

export default App;