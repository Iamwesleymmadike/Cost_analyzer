import React from "react";

const DataTable = () => {
  const data = [
    { warehouse: "AUDIENCE_SERVICE_WH", usage: "807.44 GB", cost: "$1,614.88" },
    { warehouse: "AUDIENCE_SERVICE_WH", usage: "807.44 GB", cost: "$1,614.88" },
  ];


  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>Warehouse</th>
            <th>Usage</th>
            <th>Cost</th>
            <th>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.53834 1.10996C7.70914 0.699317 8.29086 0.699318 8.46166 1.10996L10.2632 5.4415C10.3353 5.61462 10.4981 5.7329 10.685 5.74789L15.3612 6.12278C15.8045 6.15832 15.9843 6.71158 15.6465 7.00091L12.0837 10.0528C11.9413 10.1748 11.8791 10.3662 11.9226 10.5486L13.0111 15.1118C13.1143 15.5444 12.6437 15.8864 12.2642 15.6545L8.26063 13.2092C8.10062 13.1115 7.89938 13.1115 7.73937 13.2092L3.73584 15.6545C3.35629 15.8864 2.88567 15.5444 2.98886 15.1118L4.07736 10.5486C4.12086 10.3662 4.05868 10.1748 3.91628 10.0528L0.353469 7.00091C0.0157003 6.71158 0.195464 6.15832 0.638791 6.12278L5.31505 5.74789C5.50194 5.7329 5.66475 5.61462 5.73675 5.4415L7.53834 1.10996Z"
                  fill="#A0A0A0"
                />
              </svg>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.starred ? "starred" : ""}>
              <td>{row.warehouse}</td>
              <td>{row.usage}</td>
              <td>{row.cost}</td>
              <td>{row.bookMark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
