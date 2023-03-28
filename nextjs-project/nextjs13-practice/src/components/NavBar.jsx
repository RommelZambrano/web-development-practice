import Link from "next/link";
import styles from "./Nabvar.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Post",
    route: "/post",
  },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
