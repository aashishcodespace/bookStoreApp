import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className="flex item-center justify-center mt-[220px]">
        <div className="border-[2px] shadow-md p-5 rounded-md">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
              </Link>
              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input type="text" placeholder="Enter your fullname" className="w-80 px-3 py-1 border-[2px] rounded-md" {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input type="email" placeholder="Enter your email" className="w-80 px-3 py-1 border-[2px] rounded-md" {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input type="text" placeholder="Type your message" className="w-80 h-40 px-4 py-2 border-[2px] rounded-md" {...register("message", { required: true })} />
                <br />
                {errors.message && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
