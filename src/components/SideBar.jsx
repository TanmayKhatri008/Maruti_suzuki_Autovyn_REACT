import users from "./userData";
import "./Sidebar.css";

function Sidebar({ onSelectOperator, selectedOperator, showActive, searchTerm }) {
  const filteredUsers = users
    .filter((user) => user.active === showActive)
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="sidebar">
      {filteredUsers.length === 0 ? (
        <p style={{ padding: "10px", color: "#666" }}>No users found.</p>
      ) : (
        filteredUsers.map((user) => {
          const isSelected = selectedOperator?.id === user.id;

          // Show border color only after click (i.e., if selected)
          const borderColor = isSelected
            ? parseInt(user.dayLeft) > 30
              ? "green"
              : "red"
            : "transparent";

          return (
            <div
              key={user.id}
              className={`user-card ${isSelected ? "selected" : ""}`}
              onClick={() => onSelectOperator(user)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="user-icon"
                style={{ borderColor }}
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
