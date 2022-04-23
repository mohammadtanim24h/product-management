import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <button
                onClick={() => navigate("/")}
                className="btn btn-danger position-absolute start-0 rounded-0 px-4 py-2 top-0"
            >
                Go Back
            </button>
            <h2 className="text-success text-center display-5 fw-normal mt-3">
                Manage Your Products
            </h2>
            <div className="products-container mt-3">
                {products.map((product) => (
                    <div className="shadow p-2 m-3 rounded w-50 mx-auto" key={product._id}>
                        <h4>{product.name}</h4>
                        <p>Price: ${product.price} X {product.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProducts;
