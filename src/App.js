import Products from "./pages/products/Products";
import Navbar from "./components/Navbar/Navbar";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <div className="app">
        <Navbar />
       
        <Carrito />
        <Products />
    </div>
  )
}

export default App;