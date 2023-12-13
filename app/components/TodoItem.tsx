import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";

const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;
  return (
    <motion.li
      layout
      className={cn(
        "p-5 rounded-xl bg-zinc-900",
        todo.status === "completed" && "bg-opacity-50 text-zinc-500"
      )}
    >
      <motion.span
        layout
        style={{
          textDecoration: todo.status === "completed" ? "line-through" : "none",
        }}
      >
        {todo.text}
      </motion.span>
    </motion.li>
  );
};

export default TodoItem;
