/* eslint-disable react/prop-types */
import "../assets/styles/customNode.css";
import { Handle, Position } from "reactflow";

export default function CustomDoubleTopHandlesNode({ data }) {
  return (
    <>
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: 20 }}
        id="c"
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{ left: 40 }}
        id="a"
      />
      <Handle
        type="target"
        position={Position.Top}
        style={{ left:100 }}
        id="b"
      />
      <div className="node-container">
        <div
          className={data.text ? "node-title" : "node-title-only"}
        >
          {data.title}
        </div>
        {data.text && (
          <ul className="node-text">
            {data.text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
           <span id="sadt-number">{data.number}</span>
          </ul>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Left}
        style={{ top: 20 }}
        id="c"
      />
    </>
  );
}
