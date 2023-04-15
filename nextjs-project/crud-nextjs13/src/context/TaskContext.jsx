"use client";
import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const TaskContext = createContext();
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used within a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuidv4() }]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
