import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    names: yup.string().required("Name is Required"),
    email: yup.string().email().required("Email Address is required"),
  })
  .required();

const CreateContact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios.post("https://630a78163249910032862d51.mockapi.io/cruds", {
      name: data.names,
      email: data.email,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    toast("Contact has created...");
    reset();
    navigate("/allcontacts");
  };

  return (
    <div>
      <div className="w-10/12 mx-auto max-w-screen-lg max-h-screen">
        <h1 className="text-center text-3xl font-bold bg-orange-900 text-white py-6">
          Add Contact
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="names"
              type="text"
              placeholder="names"
              {...register("names")}
            />
            <p>{errors?.names?.message}</p>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          ></ToastContainer>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
