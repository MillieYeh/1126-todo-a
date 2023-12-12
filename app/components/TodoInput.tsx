import React, { useState } from "react";
import { ITask } from "../interface";

interface TodoInputProps {
  onAddTask: (taskName: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmission}>
      <div>
        <input
          className='border border-gray-400 mr-2 px-4 py-2 flex-grow'
          type='text'
          placeholder=''
          value={input}
          onChange={handleInputChange}
        />
        <button className='btn' type='submit'>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
