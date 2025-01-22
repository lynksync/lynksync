import type { Metadata } from "next";

interface Params {
    params:{
        bookmarkId: string;
    }
    }

export const generateMetadata =  ({params}:Params): Metadata => {
  return {
    title: `Edit Bookmark ${params.bookmarkId}`
  }
};

export default function Page() {
  return <div>Bookmark Edited</div>;
}