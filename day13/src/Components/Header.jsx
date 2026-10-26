import React from 'react'
import {useNavigate} from 'react-router-dom'
const Header = () => {

    return (
    <div>
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            backgroundColor: '#f0f0f0',
        }}>
            <div>My App</div>
            <div style={{display:'flex' , gap:"25px"}}></div>
            <div onClick={() =>navigate('/')}>Home</div>
            <div onClick={() =>navigate('/products')}>Products</div>
            <div onClick={() =>navigate('/about')}>About</div>
        </nav>

    </div>)
}
export default Header