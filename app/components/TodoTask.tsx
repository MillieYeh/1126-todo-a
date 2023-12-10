import React from "react";
import { ITask } from "../interface";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <li className='list-group-item d-flex justify-content-between my-2'>
      <h6>
        <div>{task.taskName}</div>
      </h6>
      <div className='flex gap-1'>
        <span>
          <FaRegSquare />
        </span>
        <span className='mx-2'>
          <FiEdit2 />
        </span>
        <span className='mx-2'>
          <FiTrash />
        </span>
      </div>
    </li>
  );
};

export default TodoTask;
