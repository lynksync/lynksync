"use client"

import React, { useState } from 'react';

interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface TreeViewProps {
  data?: TreeNode[];
}

interface TreeItemProps {
  node: TreeNode;
  level: number;
}

const TreeItem: React.FC<TreeItemProps> = ({ node, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node?.children && node.children.length > 0;

  return (
    <div className="w-full">
      <div className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer ${level > 0 ? 'ml-4' : ''}`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        >

        {hasChildren && (
          <span className="mr-2 w-4 text-center">
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
        {!hasChildren && <span className="mr-2 w-4" />}
        <span>{node.name}</span>
      </div>
      
      {isExpanded && hasChildren && node.children && (
        <div className="ml-4">
          {node.children.map((child) => (
            <TreeItem 
              key={child.id} 
              node={child} 
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC<TreeViewProps> = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full max-w-md border rounded-lg shadow-sm p-4 text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full mt-2 max-w-md border rounded-lg shadow-sm">
      {data.map((node) => (
        <TreeItem key={node.id} node={node} level={0} />
      ))}
    </div>
  );
};

export default TreeView;