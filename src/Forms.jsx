import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("These are the information from the form", formData);
    alert(
      `Hi ${formData.username}! your information has successfully submitted!`,
    );
    setFormData({
      username: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // ---------------------------------------------------------------------
  // for validation
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   let validationErrors = {}; // একটি খালি অবজেক্ট নিলাম ভুলগুলো রাখার জন্য

  //   // নাম চেক করা
  //   if (!formData.username.trim()) {
  //     validationErrors.username = "দয়া করে আপনার নাম লিখুন!";
  //   }

  //   // ইমেল চেক করা
  //   if (!formData.email.includes("@")) {
  //     validationErrors.email = "সঠিক ইমেল ঠিকানা দিন!";
  //   }

  //   // ফোন নম্বর চেক করা
  //   if (formData.phone.length < 11) {
  //     validationErrors.phone = "ফোন নম্বর কমপক্ষে ১১ সংখ্যার হতে হবে!";
  //   }

  //   // যদি কোনো ভুল থাকে (Object-এর চাবি যদি ০-এর বেশি হয়)
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors); // এরর স্টেট আপডেট করো
  //     return; // এখানেই থেমে যাও, নিচের কাজগুলো আর হবে না
  //   }

  //   // যদি সব ঠিক থাকে তবেই নিচের কাজ হবে
  //   console.log("সফলভাবে জমা হয়েছে:", formData);
  //   alert("Success!");
  //   setErrors({}); // পুরনো এরর মুছে ফেলুন
  //   setFormData({ username: "", email: "", phone: "", message: "" }); // ফর্ম খালি করুন

  // ভেলিডেশন কিভাবে কাজ করেঃ
  //   ১. Object.keys(validationErrors) কী করে?
  // সহজ কথায়, এটি একটি অবজেক্টের সব চাবিগুলোকে (Keys) গুনে বের করে একটা লিস্ট বা অ্যারে বানায়।

  // ধরুন, ইউজার নাম দেয়নি আর ভুল ইমেল দিয়েছে। তখন আপনার validationErrors অবজেক্টটা দেখতে হবে এমন:
  // { username: "...", email: "..." }

  // এখানে কয়টা ভুল আছে? ২টা।
  // Object.keys(validationErrors) করবে কী, এদের একটা লিস্ট বানাবে: ["username", "email"]

  // ২. .length > 0 কেন?
  // এখন ওই লিস্টে কয়টা জিনিস আছে তা আমরা .length দিয়ে গুনি।

  // যদি ১টা বা তার বেশি ভুল থাকে (> 0), তার মানে ফর্মটা ত্রুটিযুক্ত।

  // যদি কোনো ভুল না থাকে, তবে দৈর্ঘ্য হবে 0।

  // ৩. setErrors(validationErrors)
  // যখনই আমরা দেখলাম ভুল আছে, তখন আমরা আমাদের errors স্টেটটাকে আপডেট করে দিচ্ছি। এতে কী হয়? সাথে সাথে রিয়েক্ট আপনার ইনপুট বক্সের নিচে সেই লাল রঙের এরর মেসেজগুলো ঝুলিয়ে দেয় যাতে ইউজার বুঝতে পারে সে কী ভুল করেছে।

  // ৪. return;—সবচেয়ে গুরুত্বপূর্ণ অংশ!
  // এই return লাইনটা হলো আপনার ফর্মের 'ব্রেক'।

  // স্বাভাবিকভাবে কোড ওপর থেকে নিচে চলে। যদি আপনি return না লিখতেন, তবে ভুল থাকা সত্ত্বেও কোড নিচের দিকে চলে যেত এবং alert("Success!") দেখিয়ে দিত।
  // আমরা return লিখে রিয়েক্টকে বলছি— "থামো! আগে ভুল ঠিক হোক, তারপর নিচের দিকে যাবে। এখনই এই ফাংশন থেকে বের হয়ে যাও।"

  // };

  // ---------------------------------------------------------------------

  return (
    <div>
      <p>Forms with multiple inputs using single state declaration.</p>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <label htmlFor="">Email: </label>
        <input
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChanges}
        />
        <br />
        <br />
        <label htmlFor="">Phone: </label>
        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChanges}
        />
        <br />
        <br />
        <label htmlFor="">Message: </label>
        <br />
        <textarea
          name="message"
          id=""
          placeholder="Type your Message here..."
          value={formData.message}
          onChange={handleChanges}
        ></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
