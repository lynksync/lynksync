import type { Metadata } from "next";

interface Params {
    params: {
        categoryId: string;
    }
}

export const generateMetadata = ({ params }: Params): Metadata => {
    return {
        title: `Edit category ${params.categoryId}`
    };
};

export default function Page({ params }: Params) {
    return <div>Edit Category {params.categoryId}</div>;
}