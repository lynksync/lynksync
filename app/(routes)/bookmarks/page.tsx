import type { Metadata } from "next";
import TreeView from "../../_components/TreeView";
export const metadata: Metadata = {
  title: "All Bookmarks"
};

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

const sampleData: TreeNode[] = [
  {
    id: '1',
    name: '📁 Project Files',
    children: [
      {
        id: '2',
        name: '📁 Professional',
        children: [
          { id: '3', name: '📄 index.tsx' },
          { id: '4', name: '📄 styles.css' },
        ]
      },
      {
        id: '5',
        name: '📁 Education',
        children: [
          { id: '6', name: '📄 Header.tsx' },
          { id: '7', name: '📄 Footer.tsx' },
          { id: '8', name: '📄 Sidebar.tsx' }
        ]
      },
      {
        id: '9',
        name: '📁 Interests',
        children: [
          { id: '10', name: '🖼️ logo.png' },
          { id: '11', name: '🖼️ banner.jpg' }
        ]
      },
      {
        id: '13',
        name: '📁 News and Current Events',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
      {
        id: '14',
        name: '📁 Health & Wellness',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
      {
        id: '15',
        name: '📁 Technology',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
      {
        id: '16',
        name: '📁 Finance',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
      {
        id: '17',
        name: '📁 Entertainment',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
      {
        id: '18',
        name: '📁 Miscellaneous',
        children: [
          { id: '13', name: '📄 README.md' },
          { id: '14', name: '📄 API.md' }
        ]
      },
    ]
  }
];

export default function BookmarksPage() {
    return (
        <div className="container">
        <h1 className="mt-2 text-xl">Bookmarks</h1>
        <TreeView data={sampleData}/>
        </div>
    );
}