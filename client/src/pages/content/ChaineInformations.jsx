/* eslint-disable react/no-unescaped-entities */
import ReactFlow, { Background, MarkerType,Controls } from "reactflow";
import Navigation from "../../components/Navigation";

import CustomNode from "../../components/CustomNode";
import CustomFunctionNode from "../../components/CustomFunctionNode";
import chaineInformationsData from "../../data/cahier de charge/chaineInformationsData";
import chaineEnergieData from "../../data/cahier de charge/chaineEnergieData";
import chaineFonctionMalaxageData from "../../data/cahier de charge/chaineFonctionMalaxageData";
import chaineFonctionChauffageData from "../../data/cahier de charge/chaineFonctionChauffageData";
import chaineFonctionProtectionData from "../../data/cahier de charge/chaineFonctionProtectionData";
import chaineFonctionAlimentaionData from "../../data/cahier de charge/chaineFonctionAlimentaionData";

import "reactflow/dist/style.css";
import "../../assets/styles/chaineInformations.css";

const nodeTypes = {
  customNode: CustomNode,
  customFunctionNode: CustomFunctionNode,
};

const markerType = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
};

const coloredMarkerType = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
  color: "red",
};

const initialInfoEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  { id: "e2-3", source: "2", target: "3", markerEnd: markerType },
  { id: "e3-4", source: "3", target: "4", markerEnd: markerType },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
];

const initialEnergieEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  { id: "e2-3", source: "2", target: "3", markerEnd: markerType, label: "(1)" },
  { id: "e3-4", source: "3", target: "4", markerEnd: markerType, label: "(2)" },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    markerEnd: markerType,
    type: "smoothstep",
    label: "(3)",
  },
  { id: "e5-6", source: "5", target: "6", markerEnd: markerType, label: "(4)" },
];

const initialFonctionsEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  { id: "e2-3", source: "2", target: "3", markerEnd: markerType },
  { id: "e3-4", source: "3", target: "4", markerEnd: markerType },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  {
    id: "e4-8",
    source: "4",
    target: "8",
    label: "ORDRE",
    markerEnd: markerType,
    style: {
      stroke: "green",
    },
    type: "smoothstep",
  },
  {
    id: "e6-7",
    source: "6",
    target: "7",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  { id: "e7-8", source: "7", target: "8", markerEnd: markerType },
  { id: "e8-9", source: "8", target: "9", markerEnd: markerType },
  { id: "e9-10", source: "9", target: "10", markerEnd: markerType },
  {
    id: "e10-11",
    source: "10",
    target: "11",
    targetHandle: "b",
    markerEnd: markerType,
  },
  {
    id: "e12-11",
    source: "12",
    target: "11",
    sourceHandle: "d",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
  {
    id: "e11-13",
    source: "11",
    target: "13",
    sourceHandle: "d",
    markerEnd: coloredMarkerType,
    style: {
      stroke: "red",
    },
  },
];



export default function ChaineInformations() {
  return (
    <>
      <div className="chaine-container">
        <h3>Chaine d’information:</h3>
        <ReactFlow
          nodes={chaineInformationsData}
          edges={initialInfoEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <h3>Chaine d’énergie:</h3>
        <ReactFlow
          nodes={chaineEnergieData}
          edges={initialEnergieEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <h3>Chaine de fonction:</h3>
        <h4>1) Malaxage:</h4>
        <ReactFlow
          nodes={chaineFonctionMalaxageData}
          edges={initialFonctionsEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <h4>2) Chauffage:</h4>
        <ReactFlow
          nodes={chaineFonctionChauffageData}
          edges={initialFonctionsEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <h4>3) Protection système:</h4>
        <ReactFlow
          nodes={chaineFonctionProtectionData}
          edges={initialFonctionsEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <div className="chaine-container">
        <h4>4) Alimentation partie opérative:</h4>
        <ReactFlow
          nodes={chaineFonctionAlimentaionData}
          edges={initialFonctionsEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls/>
        </ReactFlow>
      </div>
      <ul>
        <li>(1) Fourniture et gestion du courant</li>
        <li>(2) Adaptation et conversion de l'énergie</li>
        <li>(3) Transfert de puissance mécanique</li>
        <li>(4) Application de l'énergie mécanique</li>
      </ul>
      <h3 style={{ marginBlock: 20 }}>Relation entre les 2 chaines:</h3>
      <p style={{marginBottom: 20}}>
        La chaîne d'information débute avec l'acquisition d'une consigne ou d'un
        signal (via des capteurs), qui est ensuite traité pour générer un{" "}
        <b>ordre </b>
        précis. Cet ordre est communiqué à la chaîne d'énergie, où il est
        converti en commande d'exécution. La chaîne d'énergie, alimentée par une
        source d'énergie, <u>distribue</u> cette énergie aux composants
        nécessaires, la
        <u> convertit</u> en énergie mécanique et thermique et la{" "}
        <u>transmet</u> pour réaliser l'action finale. Ainsi, la chaîne
        d'information supervise la décision, tandis que la chaîne d'énergie
        réalise l'exécution physique de l'ordre.
      </p>
      <Navigation
        links={{
          previous: {
            path: "/dashboard/cahier/fast",
            title: "Diagramme FAST",
          },
          next: {
            path: "/dashboard/cahier/sadt",
            title: "Analyse SADT",
          },
        }}
      />
    </>
  );
}
