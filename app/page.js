"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  // Load tasks from LocalStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setMainTask(JSON.parse(savedTasks));
    }
  }, []);

  // Update LocalStorage whenever the mainTask array changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(mainTask));
  }, [mainTask]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Please fill in both fields.");
      return;
    }

    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    const copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  
  let renderTask = (
    <h2 className="text-center text-gray-500 text-xl font-semibold mt-10">
      No Tasks Added. Start by adding one below.
    </h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => (
      <li key={index} className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg mb-4">
        <div>
          <h5 className="text-xl font-bold text-gray-700">{task.title}</h5>
          <h6 className="text-md text-gray-500">{task.desc}</h6>
        </div>
        <button 
          onClick={() => deleteHandler(index)} 
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-bold transition duration-200">
          Delete
        </button>
      </li>
    ));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center py-8">
      <h1 className="bg-black text-white p-5 text-5xl text-center w-full max-w-2xl rounded-lg shadow-lg mb-10">
        Krish's TODO List
      </h1>

      <form 
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mb-8"
      >
        <div className="mb-4">
          <input
            type="text"
            className="w-full text-xl border-gray-300 border-2 px-4 py-2 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="w-full text-xl border-gray-300 border-2 px-4 py-2 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
            placeholder="Enter Description Here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold px-4 py-2 rounded-lg transition duration-200"
        >
          Add Task
        </button>
      </form>

      <div className="w-full max-w-2xl">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
};

export default Page;
