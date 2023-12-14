import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { useTodo } from "../context/useTodo";
import { toast } from "react-hot-toast";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Input } from "./Input";

const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const { deleteTodo, editTodo } = useTodo();
  const [editingTodoText, setEditingTodoText] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

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
      {editingTodoId === todo.id ? (
        <motion.div layout className='flex gap-2'>
          <Input
            ref={editInputRef}
            type='text'
            value={editingTodoText}
            onChange={(e) => setEditingTodoText(e.target.value)}
          />
        </motion.div>
      ) : (
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
          <div className='flex justify-between gap-5 text-blue-800'>
            <button
              onClick={() => handleEdit(todo.id, todo.text)}
              className='flex items-center gap-1 '
            >
              <FaRegEdit />
              Edit
            </button>
            <button
              className='flex items-center gap-1 text-red-500'
              onClick={() => handleDelete(todo.id)}
            >
              <RiDeleteBin7Line />
              Delete
            </button>
          </div>
        </div>
      )}
    </motion.li>
  );
};

export default TodoItem;
