"use client";
import { useState } from "react";
import { ITask } from "./interface";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo List App</h1>
        <div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </main>
  );
}
