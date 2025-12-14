/* eslint-disable react/prop-types */
import "../assets/styles/customNode.css";
import { Handle, Position } from "reactflow";

export default function CustomFuntionNode({ data }) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="c"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: 20 }}
        id="a"
      />
      <div className="node-container">
        <div className={data.text ? "node-title" : "node-title-only"}>
          {data.title}
        </div>
        {data.text && (
          <ul className="node-text">
            {data.text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: 20 }}
        id="b"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
      />
    </>
  );
}
