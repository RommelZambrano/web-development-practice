import { TaskProvider } from "@/context/TaskContext";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/Toaster";

export const metadata = {
  title: "Task Manager App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <NavBar />
          {children}
          <Toaster />
        </TaskProvider>
      </body>
    </html>
  );
}
