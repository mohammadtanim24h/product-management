import React from "react";
import "./AddProducts.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };
    return (
        <div className="position-relative">
            <button onClick={() => navigate("/")} className="btn btn-danger position-absolute start-0 rounded-0 px-4 py-2 top-0">
                Go Back
            </button>
            <div className="w-50 mx-auto">
                <h2 className="display-5 text-center text-success fw-normal">
                    Add Products
                </h2>
                <form
                    className="my-3 w-50 mx-auto p-3 shadow rounded"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="form-control mb-2"
                        placeholder="Name"
                        {...register("name", { required: true, maxLength: 20 })}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Price"
                        type="number"
                        {...register("price")}
                    />
                    <input
                        className="form-control mb-2"
                        placeholder="Quantity"
                        type="number"
                        {...register("quantity")}
                    />
                    <input
                        className="btn btn-success px-4 py-2 w-50"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
