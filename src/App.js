import { useState } from "react";
import TodoList from "./components/TodoList";
import TabForm from "./components/TabForm";
import ImageCarousel from "./components/ImageCarousel";
import OtpRetrieval from "./components/OtpRetrieval";
import CountDownTimer from "./components/CountDownTimer";
import Faq from "./components/Faq";
import ToastContainer from "./components/ToastContainer";
import DropDown from "./components/DropDown";
import SearchLive from "./components/SearchLive";
import NavBar from "./components/NavBar";
import FileExplorer from "./components/FileExplorer";
import fileData from "./assets/fileData.json";
const App = () => {
  const [data, setData] = useState(fileData);
  const name = prompt("enter folder name");
  const addNodeToList = (parentId) => {
    const updateTree = (list) => {
      return data.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: "123", name: name, isFolder: true, children: [] },
            ],
          };
        }
      });
    };
  };
  const deleteNode = (parentId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== parentId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };
  return (
    <div className="App">
      {/* <TodoList /> */}
      {/* <TabForm /> */}
      {/* <ImageCarousel /> */}
      {/* <OtpRetrieval otpLength={6} /> */}
      {/* <CountDownTimer /> */}
      {/* <Faq /> */}
      {/* <ToastContainer /> */}
      {/* <DropDown /> */}
      {/* <SearchLive /> */}
      {/* <NavBar /> */}

      <FileExplorer
        data={data}
        addNodeToList={addNodeToList}
        deleteNode={deleteNode}
      />
    </div>
  );
};

export default App;
