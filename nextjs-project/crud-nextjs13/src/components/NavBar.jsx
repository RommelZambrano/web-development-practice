import Link from "next/link";

const links = [
  { route: "/", label: "Home" },
  { route: "/new", label: "Create new task" },
];
export default function NavBar() {
  return (
    <header>
      <h1>Task App</h1>
      <nav>
        <ul>
          {links.map(({ route, label }) => (
            <li key={`${route}${label}`}>
              <Link href={route}>{label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
