import style from "./stylesCard.module.css";
import { useRouter } from "next/navigation";
import { useTasks } from "@/context/TaskContext";
import { toast } from "react-hot-toast";


export default function TaskCard({ task }) {
  const router = useRouter();
  const { deleteTask } = useTasks();

  const handleDelete = (e) => {
    e.stopPropagation();
    const confirm = window.confirm("are you sure") 
    if (confirm) {
      
      deleteTask(task.id)
      toast.success("Task deleted successfully")};
  };

  return (
    <div className={style.div} onClick={() => router.push(`/edit/${task.id}`)}>
      <h3>{task.title}</h3>
      <button onClick={handleDelete}>Delete</button>
      <p>{task.description}</p>
    </div>
  );
}
