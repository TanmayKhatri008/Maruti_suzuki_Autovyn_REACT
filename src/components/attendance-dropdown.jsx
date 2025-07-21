import "./attendance-dropdown.css";

function Attendancedropdown() {
  return (
    <div className="boxes2">
      <div className="select-box3">
        <label htmlFor="attendance-from">FROM:</label>
        <select id="attendance-from">
          <option>01/12/2023</option>
          <option>02/12/2023</option>
        </select>
      </div>
      <div className="select-box3">
        <label htmlFor="attendance-to">To:</label>
        <select id="attendance-to">
          <option>04/12/2023</option>
          <option>04/12/2024</option>
        </select>
      </div>
      <div className="select-box3">
        <label htmlFor="total-attendance">Attendance :</label>
        <select id="total-attendance">
          <option>All</option>
          <option>Yesterday</option>
        </select>
      </div>
    </div>
  );
}

export default Attendancedropdown;
