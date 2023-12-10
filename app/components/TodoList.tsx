import React from "react";
import { ITask } from "../interface";
import TodoTask from "./TodoTask";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      <h3 className='text-center'>Todo List</h3>
      <ul className='list-group my-5'>
        {tasks.map((task: ITask) => (
          <TodoTask key={task.id} task={task} />
        ))}
        <div className='row mt-4 flex'></div>
      </ul>
    </>
  );
};

export default TodoList;
