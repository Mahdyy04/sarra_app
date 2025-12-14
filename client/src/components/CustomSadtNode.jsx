/* eslint-disable react/prop-types */
import "../assets/styles/customNode.css";
import { Handle, Position } from "reactflow";

export default function CustomSadtNode({ data }) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        style={{ left: 20 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="b"
        style={{ left: 100 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="c"
        style={{ left: 200 }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="d"
        style={{ left: 280 }}
      />
      <Handle type="target" position={Position.Left} id="f" />
      <Handle type="target" position={Position.Bottom} id="e" />
      <div className="sadt-node-container">
        {/* <div className={data.text ? "node-title" : "node-title-only"}>
          {data.title}
        </div> */}
          <ul className="sadt-node-text">
            {data.text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <span>A0</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 15 }}
      />
      <Handle type="source" position={Position.Right} id="b" />
      <Handle
        type="source"
        position={Position.Right}
        style={{ top: 75 }}
        id="c"
      />
    </>
  );
}
