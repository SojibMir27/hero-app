import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ ratings }) => {
  const formattedRatings = ratings
    .map((r) => ({
      name: r.name,
      count: parseFloat(r.count.replace("M", "")),
    }))
    .sort((a, b) => b.name.localeCompare(a.name));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        layout="vertical"
        data={formattedRatings}
        margin={{ top: 20, right: 30, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="count" fill="#ff8811" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
