import React, { useState } from "react";

import { useFormspark } from "@formspark/use-formspark";

const FORMSPARK_FORM_ID = "v69Swj83";

export const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [submitted, setSubmitted] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    await submit({ email, message });
  };

  return (
    <div className="py-8 px-4 lg:py-16 md:p-16  mx-auto max-w-screen-md border rounded-3xl bg-white">
      {submitted ? (
        <span className="text-heliotrope-400 py-5">Thank you!</span>
      ) : (
        <form className="space-y-12" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@playard.id"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pesan
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500"
              placeholder="Tinggalkan pesan.."
            />
          </div>
          <button
            type="submit"
            disabled={submitting || !message || !email}
            className="py-1 px-5 text-sm font-medium text-center text-white rounded-3xl bg-[#9378FF] sm:w-fit hover:bg-[#7f68d9] focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Kirim
          </button>
        </form>
      )}
    </div>
  );
};
