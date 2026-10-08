import ProductList from "./components/ProductList.tsx";
import ProductForm from "./components/ProductForm.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;
