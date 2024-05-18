import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import CustomerDelete from "./components/CustomerDelete";
import CustomerUpdate from "./components/CustomerUpdate";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductDelete from "./components/ProductDelete";
import ProductUpdate from "./components/ProductUpdate";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/customer/add" element={<CustomerAdd />} />
                    <Route path="/customer/delete" element={<CustomerDelete />} />
                    <Route path="/customer/update" element={<CustomerUpdate />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/add" element={<ProductAdd />} />
                    <Route path="/product/delete" element={<ProductDelete />} />
                    <Route path="/product/update" element={<ProductUpdate />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
