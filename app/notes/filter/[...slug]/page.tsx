// SSR компонент

import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function NotesSlugPage({ params }: Props) {
  const slug = (await params).slug || []; // check (await params)
  let tag: string | undefined = undefined;

  if (slug.length > 0 && slug[0] !== "all") {
    tag = slug[0]; 
  }

  try {
    const data = await fetchNotes({ tag: tag });

    return <NotesClient initialData={data} tag={tag} />;
  } catch (error) {
    console.log("Error fetching notes:", error);
  }
}
