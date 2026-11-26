import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pencil, Trash2, Check, X } from "lucide-react";

const TodoListCard = ({ todo, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  console.log(todo);

  const startEditing = () => {
    setValue("taskName", todo.name);
    setIsEditing(true);
  };

  const onEdit = (elem) => {
    editTask(todo.id, elem.taskName);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    reset();
  };

  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
      {isEditing ? (
        <form className="flex flex-1 flex-col">
          <input
            {...register("taskName", {
              required: "Task name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Black spaces is not allowed ",
              },
            })}
            type="text"
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.taskName && (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.taskName.message}
            </p>
          )}
        </form>
      ) : (
        <p className="flex-1 text-sm font-medium text-gray-800">{todo.name}</p>
      )}

      <div className="flex items-center gap-1">
        {isEditing ? (
          <>
            <button
              onClick={handleSubmit(onEdit)}
              type="button"
              aria-label="Save task"
              className="rounded-lg p-2 text-green-600 transition hover:bg-green-50"
            >
              <Check className="h-4 w-4" />
            </button>
            <button
              onClick={cancelEdit}
              type="button"
              aria-label="Cancel editing"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            // onSubmit={handleSubmit(startEditing)}
            onClick={startEditing}
            type="button"
            aria-label="Edit task"
            className="rounded-lg p-2 text-gray-400 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Pencil className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={() => deleteTask(todo.id)}
          type="button"
          aria-label="Delete task"
          className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TodoListCard;
