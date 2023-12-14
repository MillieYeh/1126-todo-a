import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { useTodo } from "../context/useTodo";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";

const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const { deleteTodo } = useTodo();

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success("Todo deleted successfully!");
  };
  return (
    <motion.li
      layout
      className={cn(
        "p-5 rounded-xl bg-neutral-50",
        todo.status === "completed" && "bg-neutral-50 text-zinc-500"
      )}
    >
      <div className='flex flex-col gap-5'>
        <motion.span
          layout
          style={{
            textDecoration:
              todo.status === "completed" ? "line-through" : "none",
          }}
        >
          {todo.text}
        </motion.span>
        <div className='flex justify-between gap-5 text-white'>
          <button
            className='flex items-center gap-1 text-red-500'
            onClick={() => handleDelete(todo.id)}
          >
            <RiDeleteBin7Line />
            Delete
          </button>
        </div>
      </div>
    </motion.li>
  );
};

export default TodoItem;
