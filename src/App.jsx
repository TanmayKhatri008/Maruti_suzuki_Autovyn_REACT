import { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SkillSense from "./components/SkillSense";
import users from "./components/userData";
import View from "./components/view";
import Sidebar from "./components/SideBar";
import Operator_information from "./components/Operator_information";

import "./App.css";

function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [showActive, setShowActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ for live search

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
        <div className="main-panel">
          <Sidebar
            onSelectOperator={setSelectedOperator}
            selectedOperator={selectedOperator}
            showActive={showActive}
            searchTerm={searchTerm} // ✅ pass for filtering
          />
          <Operator_information user={selectedOperator} />
          
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
