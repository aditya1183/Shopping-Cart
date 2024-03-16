
import Header from "./componenet/Header"
import Products from "./componenet/Products"
import CartProvider from "./contexts/CartProvider"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <CartProvider >
      <ToastContainer autoClose={1500} position="bottom-right" newestOnTop={true}/>
    <Header/>
     
      <Products/>
      
    </CartProvider>
  )
}

export default App
