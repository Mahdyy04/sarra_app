/* eslint-disable react/prop-types */
import Tree from "react-d3-tree";
import { useState, useEffect, useRef } from "react";

export default function TreeChart({ treeData }) {
  const containerStyles = {
    width: "100%",
    height: "600px",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    marginBottom: "1rem",
  };

  const TextWithDynamicRect = ({ text, toggleNode, bgColor }) => {
    const textRef = useRef(null);
    const [rectWidth, setRectWidth] = useState(140); // Default width

    useEffect(() => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setRectWidth(bbox.width + 40); // Add padding
      }
    }, [text]);

    return (
      <g onClick={toggleNode}>
        {/* Dynamic Rectangle */}
        <rect
          x={-rectWidth / 2}
          y="-25"
          width={rectWidth}
          height="50"
          rx="10"
          ry="10"
          fill={bgColor}
          stroke="#333"
          strokeWidth="2"
        />
        {/* Text Inside Rectangle */}
        <text
          ref={textRef}
          x="0"
          y="0"
          textAnchor="middle"
          alignmentBaseline="central"
          style={{
            fontSize: "20px",
            fill: "#333",
            fontWeight: "100",
          }}
        >
          {text}
        </text>
      </g>
    );
  };


  const renderResponsiveNode = ({ nodeDatum, toggleNode }) => {
    const depth = nodeDatum.__rd3t?.depth ?? 0; // Default to 0 if depth is not present
    const bgColor = (() => {
      switch (depth) {
        case 0:
          return "#FFD700"; // Root node: gold
        case 1:
          return "#87CEEB"; // Level 1 nodes (branches): sky blue
        case 2:
          return "#90EE90"; // Level 2 nodes (branches): light green
        case 3:
          return "#FFB6C1"; // Level 3 nodes (leaves): light pink
        default:
          return "#D3D3D3"; // For additional depths: light gray
      }
    })();
    return (
      <TextWithDynamicRect
        text={nodeDatum.name}
        toggleNode={toggleNode}
        bgColor={bgColor}
      />
    );
  };

  return (
    <div style={containerStyles}>
      <Tree
        data={treeData}
        translate={{ x: 220, y: 300 }}
        nodeSize={{ x: 600, y: 100 }}
        renderCustomNodeElement={renderResponsiveNode}
        // initialDepth={0}
        zoom={0.7}
        // pathFunc="step"
        // separation={{ siblings: 1, nonSiblings: 1.5 }} // Adjust spacing
      />
    </div>
  );
}
