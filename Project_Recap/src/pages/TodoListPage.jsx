import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, ShieldExclamationPoint } from "lucide-react";
import TodoListCard from "../components/TodoListCard";
import { nanoid } from "nanoid/non-secure";

const TodoListPage = () => {
  const [todoListTasks, setTodoListTasks] = useState(
    JSON.parse(localStorage.getItem("todoListTasks")) || [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  localStorage.setItem("todoListTasks", JSON.stringify(todoListTasks));

  const addTask = (elem) => {
    if (!elem) {
      return;
    }

    setTodoListTasks(() => [
      ...todoListTasks,
      { id: nanoid(), name: elem.taskName },
    ]);

    reset();
  };
  const deleteTask = (elem) =>
    setTodoListTasks((currentValue) =>
      currentValue.filter((val) => elem.id !== currentValue.id),
    );

  const editTask = (taskID, taskName) => {
    setTodoListTasks((currentValue) =>
      currentValue.map((val) =>
        val.id === taskID ? { ...val, name: taskName } : val,
      ),
    );
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Todos</h1>
        <p className="text-sm text-gray-500">Manage your daily tasks</p>
      </div>

      {/* Add Todo */}
      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={handleSubmit(addTask)}
        >
          <div className="flex-1">
            <input
              {...register("taskName", {
                required: "Task name is required",
                pattern: {
                  value: /^\S.*$/,
                  message: "Black spaces is not allowed ",
                },
              })}
              type="text"
              placeholder="Enter task name..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.taskName && (
              <p className=" flex mt-1.5 text-xs font-medium text-red-600">
                <ShieldExclamationPoint size={17} />
                {errors.taskName.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            Add Task
          </button>
        </form>
      </div>

      {/* Todo List */}
      <div className="space-y-3">
        {todoListTasks.map((todo) => (
          <TodoListCard
            key={todo.id}
            todo={todo}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
