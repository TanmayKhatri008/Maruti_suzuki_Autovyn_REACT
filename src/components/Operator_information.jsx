import "./Operator_information.css";
import Tabs from "./Tabs";

function Operator_information({ user }) {
  if (!user) {
    return (
      <div className="OperatorOthers">
        Please select a user from the left or navigate to a user's profile.
      </div>
    );
  }

  const borderColor = parseInt(user.daysLeft) > 30 ? "green" : "red";

  return (
    <div className="OperatorOthers">
      <div className="operator-info">
        <div className="left-info">
          <div>
            <img
              src={user.image}
              alt={user.name}
              id="Profile-pic"
              style={{ border: `3px solid ${borderColor}` }}
            />
          </div>
          <div className="operator-info-details">
            <h3>{user.name}</h3>
            <p>{user.id}</p>
            <p>
              <span style={{ color: "#66696B" }}>Date of Birth:</span>{" "}
              {user.dob}
            </p>
          </div>
        </div>

        <div className="right-info">
          <p>
            <span style={{ color: "#66696B" }}>Joining Date:</span>{" "}
            {user.joining}
          </p>
          <p>
            <span style={{ color: "#66696B" }}>Relieving Date:</span>{" "}
            {user.relieving}
          </p>
          <p>
            <span style={{ color: "#FF0000" }}>Relieving in:</span>{" "}
            <span style={{ color: "green" }}>{user.daysLeft}</span>
          </p>
        </div>
      </div>

      <Tabs user={user} />
    </div>
  );
}

export default Operator_information;
