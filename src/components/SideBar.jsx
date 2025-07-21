import users from "./userData";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ onSelectOperator, selectedOperator, showActive, searchTerm }) {
  const navigate = useNavigate();

  const filteredUsers = users
    .filter((user) => user.active === showActive)
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleUserClick = (user) => {
    onSelectOperator(user);
    navigate(`/operator/${user.id}`);
  };

  return (
    <div className="sidebar">
      {filteredUsers.length === 0 ? (
        <p className="no-users">No users found.</p>
      ) : (
        filteredUsers.map((user) => {
          const isSelected = selectedOperator?.id === user.id;
          const borderColorClass =
            parseInt(user.daysLeft) > 30 ? "green" : "red";

          return (
            <div
              key={user.id}
              className={`user-card ${isSelected ? "selected" : ""}`}
              onClick={() => handleUserClick(user)}
            >
              <img
                src={user.image}
                alt={user.name}
                className={`user-icon ${isSelected ? borderColorClass : ""}`}
              />
              <div className="user-text">
                <p className="user-name">{user.name}</p>
                <p className="user-id">{user.id}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Sidebar;
