// SSR компонент

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: { slug?: string[] };
};

export default async function NotesSlugPage({ params }: Props) {
  const slug = (await params).slug || []; // check (await params)
  let tag: string | undefined = undefined;

  // if (slug.length === 0 || slug[0] === "all") {
  //   tag = undefined;
  // } else {
  //   tag = slug[0]; // тут мы сетаем выбор пользователя если это не all
  // }

  if (slug.length > 0 && slug[0] !== "all") {
    tag = slug[0]; //сетаем что-то из опции
  }

  try {
    const data = await fetchNotes({ tag: tag });

    return <NotesClient initialData={data} tag={tag} />;
  } catch (error) {
    console.log("Error fetching notes:", error);
  }
}
