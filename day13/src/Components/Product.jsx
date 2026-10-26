import React from 'react'

const Product = ({ products }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            padding: '20px'
        }}>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h2>${product.price.toFixed(2)}</h2>
                    <h3>{product.brand}</h3>
                </div>
            ))}
        </div>
    )
}

export default Product