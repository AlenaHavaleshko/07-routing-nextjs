import Link from "next/link";
import { fetchNotes } from "@/lib/api";
import TagsMenu from "./TagsMenu";
import css from "./Header.module.css";
import { tags } from "@/types/note";

export default async function Header() {
  const { notes } = await fetchNotes({});
  console.log("notes from API:", notes);

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
