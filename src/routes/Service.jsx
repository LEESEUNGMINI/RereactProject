import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Service() {
  // 이메일과 메시지 상태를 관리하는 state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  // 이메일 변경 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //   이름 변경 핸들러
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 메시지 변경 핸들러
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // 이메일 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 이메일을 보내는 로직을 추가할 수 있습니다.
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Name:", name);
    // 폼 제출 후 입력값 초기화
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] h-full mx-auto my-16 p-8 border rounded-lg bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">고객문의</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-800 mb-1">
              Name:
            </label>
            <input
              type="name"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-800 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-800 mb-1">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              rows={4}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
