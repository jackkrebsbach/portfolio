import type { NextPage } from "next";
import { useState } from "react";
import { Input } from "../components/contact/Input/Input";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendingMail, setSendingMail] = useState(false);

  const sendMail = async (params: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw { ...data, status: res.status };
      }
      return data;
    } catch (error) {
      throw error;
    }
  };

  const sendContactMail = async (e: any) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email");
      return;
    }
    try {
      setSendingMail(true);
      const res = (await sendMail({
        email,
        name,
        company,
        message,
      })) as { success: boolean };
      setSendingMail(false);
      if (res.success) {
        alert("Message sent!");
      } else if (!res.success) {
        alert("Unable to send message.");
      }
    } catch (error) {
      setSendingMail(false);
      alert("Unable to send message.");
    }
  };

  return (
    <form
      onSubmit={sendContactMail}
      className="w-full flex flex-col content-center items-center sm:px-5 md:max-w-4xl px-3"
    >
      <h2 className="text-4xl font-bold self-start"> Send me a Message!</h2>
      <div className="flex flex-col sm:flex-row w-full">
        <Input name="Name" value={name} setValue={setName} />
        <Input name="Company" value={company} setValue={setCompany} />
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <Input name="Email" value={email} setValue={setEmail} />
      </div>
      <div className="flex flex-col sm:flex-row w-full">
        <Input
          textarea={true}
          name="Message"
          value={message}
          setValue={setMessage}
        />
      </div>
      <button
        disabled={sendingMail}
        type="submit"
        className="bg-cyan-400 text-black font-bold w-60 py-4 rounded-lg mb-8 self-start my-5"
      >
        {sendingMail ? "sending.." : "SEND MESSAGE"}
      </button>
    </form>
  );
};

export default Contact;
