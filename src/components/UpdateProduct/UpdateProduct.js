import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
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
                        className="btn btn-primary px-4 py-2 w-50"
                        type="submit"
                        value="Add Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
