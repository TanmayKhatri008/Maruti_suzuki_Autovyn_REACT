import { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SkillSense from "./components/SkillSense";
import users from "./components/userData";
import View from "./components/View";
import Sidebar from "./components/SideBar";
import Operator_information from "./components/Operator_information";

import "./App.css";

function OperatorPanel({
  users,
  showActive,
  setShowActive,
  searchTerm,
  setSearchTerm,
  selectedOperator,
  setSelectedOperator
}) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const user = users.find(u => u.id === id);
      setSelectedOperator(user || null);
    }
  }, [id, users, setSelectedOperator]);

  return (
    <div className="main-panel">
      <Sidebar
        onSelectOperator={setSelectedOperator}
        selectedOperator={selectedOperator}
        showActive={showActive}
        searchTerm={searchTerm}
      />
      <Operator_information user={selectedOperator} />
    </div>
  );
}

function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [showActive, setShowActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Body">
      <Header />
      <hr />
      <div className="others">
        <Dashboard />
        <SkillSense />
        <View
          users={users}
          showActive={showActive}
          setShowActive={setShowActive}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Routes>
          <Route
            path="/"
            element={
              <OperatorPanel
                users={users}
                showActive={showActive}
                setShowActive={setShowActive}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedOperator={selectedOperator}
                setSelectedOperator={setSelectedOperator}
              />
            }
          />
          <Route
            path="/operator/:id"
            element={
              <OperatorPanel
                users={users}
                showActive={showActive}
                setShowActive={setShowActive}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedOperator={selectedOperator}
                setSelectedOperator={setSelectedOperator}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
