import React from "react";
import "./Dashboard.css";
import Card from "./Card";
const Dashboard = () => {
  const data = [
    { number: "John Doe", name: "1234" },
    { number: "Jane Doe", name: "5678" },
    { number: "Alice Smith", name: "9012" },
    { number: "Bob Johnson", name: "3456" },
    { number: "Emily Brown", name: "7890" },
    { number: "Michael Wilson", name: "2345" },
    { number: "Sarah Davis", name: "6789" },
    { number: "David Martinez", name: "0123" },
  ];
  return (
    <>
      <div className="app m-8">
        <div className="row">
          {data.slice(0, 4).map((item, index) => (
            <Card key={index} name={item.number} rollNumber={item.name} />
          ))}
        </div>
        <div className="row">
          {data.slice(4, 8).map((item, index) => (
            <Card
              key={index + 4}
              name={item.number}
              rollNumber={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
