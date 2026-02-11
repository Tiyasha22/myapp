import { useState } from "react";

const FileExplorer = ({ data, addNodeToList, deleteNode }) => {
  const [isOpen, setIsOpen] = useState({});

  return (
    <div>
      <div className="file-container">
        {data.map((node) => (
          <div key={node.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setIsOpen((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
                style={{ padding: "2px" }}
              >
                {isOpen?.[node.name] ? "📂" : "📁"}
              </span>
            )}
            <span>{node.name}</span>
            {node.isFolder && (
              <span
                style={{ paddingLeft: "20px" }}
                onClick={() => addNodeToList(node.id)}
              >
                🗂️
              </span>
            )}
            <span>✏️</span>
            <span onClick={() => deleteNode(node.id)}>🗑️</span>

            {isOpen?.[node.name] && node?.children && (
              <FileExplorer
                data={node.children}
                addNodeToList={addNodeToList}
                deleteNode={deleteNode}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
