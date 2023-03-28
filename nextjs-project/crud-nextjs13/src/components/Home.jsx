import TaskCard from "./TaskCard";
import { useTasks } from "@/context/TaskContext";
export default function Home() {
  const { tasks } = useTasks();

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
