import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function CreateTask({ params }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { tasks, createTask } = useTasks();

  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description);
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      const taskFound = tasks.find((task) => task.id === params.id);

      if (taskFound)
        setTask({
          title: taskFound.title,
          description: taskFound.description,
        });
    }
  }, [ params.id, tasks]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Write a title"
        onChange={handleChange}
        value={task.title}
      />
      <textarea
        name="description"
        placeholder="Write a description"
        onChange={handleChange}
        value={task.description}
      />
      <button type="submit">Create</button>
    </form>
  );
}