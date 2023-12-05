import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    setIsLoading(true);
    try {
      axios
        .post("http://localhost:5000/participants", data)
        .then((res) => console.log(res.data));
      toast.success("Registered Successfully!");
      reset();
    } catch (error) {
      setIsLoading(false);
      toast.error("Something happened!");
    }
    setIsLoading(false);
  };
  return (
    <div className="h-full w-full bg-white p-8">
      <div className="text-3xl font-bold">CodeCraze: TechFusion | CURAJ</div>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5 space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                autoComplete="off"
                {...register("firstName")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                autoComplete="off"
                {...register("lastName")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                autoComplete="off"
                {...register("email")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                autoComplete="off"
                {...register("phone")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="mb-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                autoComplete="off"
                {...register("country")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Pin code
              </label>
              <input
                type="text"
                id="zip"
                autoComplete="off"
                {...register("zip")}
                className="border border-zinc-200 p-2 rounded-md w-full focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              cols="10"
              rows="2"
              {...register("address")}
              className="w-full resize-none focus:outline-none border border-zinc-300 p-2 rounded-md"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="instName"
              className="block text-sm font-medium text-gray-700"
            >
              Institute Name
            </label>
            <input
              id="instName"
              {...register("instName")}
              className="w-full focus:outline-none border border-zinc-300 p-2 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="rNum"
              className="block text-sm font-medium text-gray-700"
            >
              Roll Number
            </label>
            <input
              id="rNum"
              {...register("rNum")}
              className="w-full focus:outline-none border border-zinc-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="yr"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Study
            </label>
            <select
              name="yr"
              id="yr"
              className="w-full p-2 border border-zinc-200 rounded-md focus:outline-none mt-1 bg-white"
              {...register("yr")}
            >
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <button
              type="submit"
              className="bg-primary p-2 rounded-md text-center text-white font-semibold cursor-pointer"
            >
              {isLoading ? (
                <ClipLoader size={20} color="white" />
              ) : (
                "Register to CodCraze"
              )}
            </button>
            <Link
              to="/all"
              className="bg-primary p-2 rounded-md text-center text-white font-semibold cursor-pointer"
            >
              View Registered Users
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
