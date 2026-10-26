import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Product from './Components/Product'

const App2 = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products))
    }, [])

    console.log(products);

    return (
        <div>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product products={products} />} />
                <Route path="/about" element={<About />} />
                <Route path="cart" element={<Cart />} />
            </Routes>

            <Product products={products} />

            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App2