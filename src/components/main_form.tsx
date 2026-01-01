"use client";
import { useState } from "react";
import AnimatedContent from "./animated-content";

export default function MainForm() {
  const [formData, setFormData] = useState({
    businessname: "",
    fullname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error/loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Combine full name from first and last name
    const fullNameCombined = formData.fullname + " " + formData.lastname;

    try {
      const res = await fetch("https://merchantservices.online/sendmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          businessname: formData.businessname,
          fullname: fullNameCombined,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      const text = await res.text();

      if (text.trim() === "success") {
        setStatus("success");
        setFormData({
          businessname: "",
          fullname: "",
          lastname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else if (text.trim() === "invalid_email") {
        setStatus("invalid_email");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
  };

  return (
    <AnimatedContent distance={30} delay={0.1} className="relative w-full sm:w-auto">
      <form
        onSubmit={handleSubmit}
        className="mb-10 lg:mb-0 px-4 sm:px-6 py-8 flex flex-col gap-3 w-full md:max-w-lg rounded-2xl bg-white border-2 border-orange-400"
      >
        <h1 className="text-center font-bold text-2xl text-gray-800">Get Started Today!</h1>

        <input
          required
          type="text"
          name="businessname"
          placeholder="Business Name"
          value={formData.businessname}
          onChange={handleChange}
          className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />

        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <input
            required
            type="text"
            name="fullname"
            placeholder="First Name"
            value={formData.fullname}
            onChange={handleChange}
            className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          />
          <input
            required
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            className="flex-1 border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          />
        </div>

        <input
          required
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />
        <textarea
          name="message"
          rows={3}
          placeholder="What are you looking for?"
          value={formData.message}
          onChange={handleChange}
          className="border border-orange-300 p-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 border rounded-2xl bg-linear-to-tl from-orange-600 to-orange-500 text-white text-center hover:from-orange-700 hover:to-orange-600 cursor-pointer"
        >
          {status === "loading" ? "Sending..." : "Start Processing Today"}
        </button>

        {status === "success" && <p className="text-green-600 mt-2">Form submitted successfully!</p>}
        {status === "error" && <p className="text-red-600 mt-2">Something went wrong. Try again.</p>}
        {status === "invalid_email" && <p className="text-red-600 mt-2">Invalid email address.</p>}
      </form>
    </AnimatedContent>
  );
}
