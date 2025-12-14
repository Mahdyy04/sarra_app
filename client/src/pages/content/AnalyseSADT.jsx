/* eslint-disable react/prop-types */
import ReactFlow, { Background, Handle, Position, MarkerType, Controls } from "reactflow";
import Navigation from "../../components/Navigation";

import CustomNode from "../../components/CustomNode";
import CustomSadtNode from "../../components/CustomSadtNode";
import CustomDoubleTopHandlesNode from "../../components/customDoubleTopHandlesNode";
import analyseSADTData from "../../data/cahier de charge/analyseSADTData";
import analyseSADT_A0_Data from "../../data/cahier de charge/analyseSADT_A0_Data";
import analyseSADT_A1_Data from "../../data/cahier de charge/analyseSADT_A1_Data";
import analyseSADT_A2_Data from "../../data/cahier de charge/analyseSADT_A2_Data";
import analyseSADT_A3_Data from "../../data/cahier de charge/analyseSADT_A3_Data";
import analyseSADT_A4_Data from "../../data/cahier de charge/analyseSADT_A4_Data";

import "reactflow/dist/style.css";
import "../../assets/styles/chaineInformations.css";
import "../../assets/styles/customNode.css";

const markerType = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
}


const initialSadtEdges = [
  {
    id: "e2-1",
    source: "2",
    target: "1",
    targetHandle: "f",
    markerEnd: markerType
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    sourceHandle: "b",
    markerEnd: markerType
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    sourceHandle: "a",
    markerEnd:markerType,
  },
  {
    id: "e1-5",
    source: "1",
    target: "5",
    sourceHandle: "c",
    markerEnd: markerType,
  },
  {
    id: "e6-1",
    source: "6",
    target: "1",
    targetHandle: "a",
    markerEnd: markerType,
  },
  {
    id: "e7-1",
    source: "7",
    target: "1",
    targetHandle: "b",
    markerEnd: markerType,
  },
  {
    id: "e8-1",
    source: "8",
    target: "1",
    targetHandle: "c",
    markerEnd: markerType,
  },
  {
    id: "e9-1",
    source: "9",
    target: "1",
    targetHandle: "d",
    markerEnd: markerType,
  },
  {
    id: "e10-1",
    source: "10",
    target: "1",
    markerEnd: markerType,
    targetHandle: "e"
  },
];

const SADT_A0_edges =[
  {
    id: "e1-2",
    source: "1",
    target: "2",
    targetHandle:"c",
    markerEnd: markerType
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle:"c",
    markerEnd: markerType,
    label:"instructions utilisateur"
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
    label:"secteur triphasé"
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    targetHandle:"c",
    markerEnd: markerType,
    label:"énergie mec. et thermique"
  },
  {
    id: "e6-2",
    source: "6",
    target: "2",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e7-3",
    source: "7",
    target: "3",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e8-2",
    source: "8",
    target: "2",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e8-3",
    source: "8",
    target: "3",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e8-4",
    source: "8",
    target: "4",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e9-5",
    source: "9",
    target: "5",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e10-5",
    source: "10",
    target: "5",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e5-11",
    source: "5",
    target: "11",
    markerEnd: markerType,
  },
  {
    id: "e5-12",
    source: "5",
    target: "12",
    markerEnd: markerType,
  },
]

const SADT_A1_edges =[
  {
    id: "e1-2",
    source: "1",
    target: "2",
    targetHandle:"c",
    markerEnd: markerType
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e5-2",
    source: "5",
    target: "2",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e6-2",
    source: "6",
    target: "2",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e6-3",
    source: "6",
    target: "3",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e6-4",
    source: "6",
    target: "4",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e8-4",
    source: "8",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e4-9",
    source: "4",
    target: "9",
    markerEnd: markerType,
  },
  {
    id: "e4-10",
    source: "4",
    target: "10",
    markerEnd: markerType,
  },
]

const SADT_A2_edges =[
  {
    id: "e1-2",
    source: "1",
    target: "2",
    targetHandle:"c",
    markerEnd: markerType
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e5-2",
    source: "5",
    target: "2",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e6-3",
    source: "6",
    target: "3",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e6-4",
    source: "6",
    target: "4",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e8-4",
    source: "8",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e4-9",
    source: "4",
    target: "9",
    markerEnd: markerType,
  },
  {
    id: "e4-10",
    source: "4",
    target: "10",
    markerEnd: markerType,
  },
]

const SADT_A3_edges =[
  {
    id: "e1-2",
    source: "1",
    target: "2",
    targetHandle:"c",
    markerEnd: markerType
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e5-2",
    source: "5",
    target: "2",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e5-4",
    source: "5",
    target: "4",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e6-4",
    source: "6",
    target: "4",
    targetHandle:"b",
    markerEnd: markerType,
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e4-8",
    source: "4",
    target: "8",
    markerEnd: markerType,
  },
  {
    id: "e4-9",
    source: "4",
    target: "9",
    markerEnd: markerType,
  },
]

const SADT_A4_edges =[
  {
    id: "e1-2",
    source: "1",
    target: "2",
    targetHandle:"c",
    markerEnd: markerType
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e5-2",
    source: "5",
    target: "2",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e5-3",
    source: "5",
    target: "3",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e6-4",
    source: "6",
    target: "4",
    targetHandle:"a",
    markerEnd: markerType,
  },
  {
    id: "e7-4",
    source: "7",
    target: "4",
    targetHandle:"c",
    markerEnd: markerType,
  },
  {
    id: "e4-8",
    source: "4",
    target: "8",
    markerEnd: markerType,
  },
  {
    id: "e4-9",
    source: "4",
    target: "9",
    markerEnd: markerType,
  },
]

const nodeTypes = {
  customSadtNode: CustomSadtNode,
  customNode: CustomNode,
  customSadtTopNode: CustomSadtTopNode,
  customSadtBottomNode: CustomSadtBottomNode,
  customDoubleTopHandlesNode: CustomDoubleTopHandlesNode
};

function CustomSadtTopNode({ data }) {
  return (
    <>
      <div className="custom-sadt-node-container">
        <div className="custom-sadt-title">{data.title}</div>
        {data.text && (
          <ul className="custom-sadt-text">
            {data.text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

function CustomSadtBottomNode({ data }) {
  return (
    <>
      <div className="node-container">
        <div className="node-title-only">{data.title}</div>
      </div>
      <Handle type="source" position={Position.Top}/>
    </>
  );
}

export default function AnalyseSADT() {
  return (
    <>
      <div className="chaine-container">
        <h3>Analyse SADT:</h3>
        <ReactFlow
          nodes={analyseSADTData}
          edges={initialSadtEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <ReactFlow
          nodes={analyseSADT_A0_Data}
          edges={SADT_A0_edges}
          nodeTypes={nodeTypes}
          fitView
          style={{border:"4px dashed black",borderRadius:10}}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/> 
          <h1 style={{position:"absolute",top:7,left:15}}>A0</h1>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <ReactFlow
          nodes={analyseSADT_A1_Data}
          edges={SADT_A1_edges}
          nodeTypes={nodeTypes}
          fitView
          style={{border:"4px dashed black",borderRadius:10}}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
          <h1 style={{position:"absolute",top:7,left:15}}>A1</h1>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <ReactFlow
          nodes={analyseSADT_A2_Data}
          edges={SADT_A2_edges}
          nodeTypes={nodeTypes}
          fitView
          style={{border:"4px dashed black",borderRadius:10}}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
          <h1 style={{position:"absolute",top:7,left:15}}>A2</h1>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <ReactFlow
          nodes={analyseSADT_A3_Data}
          edges={SADT_A3_edges}
          nodeTypes={nodeTypes}
          fitView
          style={{border:"4px dashed black",borderRadius:10}}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
          <h1 style={{position:"absolute",top:7,left:15}}>A3</h1>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <ReactFlow
          nodes={analyseSADT_A4_Data}
          edges={SADT_A4_edges}
          nodeTypes={nodeTypes}
          fitView
          style={{border:"4px dashed black",borderRadius:10}}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
          <h1 style={{position:"absolute",top:7,left:15}}>A4</h1>
        </ReactFlow>
      </div>
      <Navigation
        links={{
          previous: {
            path: "/dashboard/cahier/chaine",
            title: "Les chaines",
          },
        }}
      />
    </>
  );
}
