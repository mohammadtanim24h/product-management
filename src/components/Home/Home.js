import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1 className="display-4 text-success my-3">HomePage</h1>
            <Link to="/addproducts">
                <button className="btn btn-success">Add Products</button>
            </Link>
            <Link to="/manage">
                <button className="btn btn-danger ms-2">Manage Products</button>
            </Link>
        </div>
    );
};

export default Home;
