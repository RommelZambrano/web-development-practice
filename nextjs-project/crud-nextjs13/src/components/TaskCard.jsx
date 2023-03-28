import style from "./stylesCard.module.css";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";

export default function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.stopPropagation();
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirm) deleteTask(task.id);
  };

  return (
    <div className={style.div} onClick={() => router.push(`/edit/${task.id}`)}>
      <h3>{task.title}</h3>
      <button onClick={handleDelete}>Delete</button>
      <p>{task.description}</p>
    </div>
  );
}
