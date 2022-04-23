import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);
    const { register, handleSubmit } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/product/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setSuccessMessage("Your Product is updated successfully");
                }
            });
    };
    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                className="btn btn-danger position-absolute start-0 rounded-0 px-4 py-2 top-0"
            >
                Go Back
            </button>
            <div className="w-50 mx-auto">
                <h2 className="text-center text-primary my-2">
                    Update your product
                </h2>
                <h4 className="text-center text-success">{successMessage}</h4>
                <form
                    className="my-3 w-50 mx-auto p-3 shadow rounded"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {product && (
                        <div>
                            <h4>Previous Product: </h4>
                            <p>
                                Name: {product.name} Price: ${product.price}
                            </p>
                        </div>
                    )}
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
                        className="btn btn-primary px-4 py-2 w-50"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
