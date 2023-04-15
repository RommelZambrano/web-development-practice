import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from " ";
import { toast } from "react-hot-toast";

export default function CreateTask({ params }) {
  const { tasks, createTask, updateTask } = useTasks();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Task updated successfully")
    } else {
      createTask(data.title, data.description);
      toast.success("Task created successfully");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);

      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Write a title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <textarea
        placeholder="Write a description"
        {...register("description", { required: true })}
      />
      {errors.description && <span>This field is required</span>}
      <button type="submit">{params.id ? "Update Task" : "Create Task"}</button>
    </form>
  );
}
