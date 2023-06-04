import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth/useAuth";
import { FaWallet, FaUsers, FaCarSide } from "react-icons/fa";
import { TbChefHat } from "react-icons/tb";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  Tooltip,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const AdminHome = () => {
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin-stats", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return res.json();
    },
  });
  const { data: statistic } = useQuery({
    queryKey: ["statistic"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/order-state", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      return res.json();
    },
  });
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="p-4">
      <h3 className="font-cinzel text-2xl font-bold">
        Hi, {user?.displayName}
      </h3>
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="w-[293px] bg-gradient-to-r to-teal-200 from-teal-500 p-5 flex gap-4 items-center text-white font-inter rounded-md">
          <FaWallet className="w-12 h-12" />
          <span>
            <span className="block text-[40px] font-extrabold">
              {data?.revenue}
            </span>
            <span className="text-2xl">Revenue</span>
          </span>
        </div>
        <div className="w-[293px] bg-gradient-to-r to-rose-400 from-red-500 p-5 flex gap-4 items-center text-white font-inter rounded-md">
          <FaUsers className="w-12 h-12" />
          <span>
            <span className="block text-[40px] font-extrabold">
              {data?.customers}
            </span>
            <span className="text-2xl">Customer</span>
          </span>
        </div>
        <div className="w-[293px] bg-gradient-to-r to-cyan-500 from-blue-500 p-5 flex gap-4 items-center text-white font-inter rounded-md">
          <TbChefHat className="w-12 h-12" />
          <span>
            <span className="block text-[40px] font-extrabold">
              {data?.products}
            </span>
            <span className="text-2xl">Products</span>
          </span>
        </div>
        <div className="w-[293px] bg-gradient-to-r from-red-500 to-orange-500 p-5 flex gap-4 items-center text-white font-inter rounded-md">
          <FaCarSide className="w-12 h-12" />
          <span>
            <span className="block text-[40px] font-extrabold">
              {data?.products}
            </span>
            <span className="text-2xl">Orders</span>
          </span>
        </div>
      </div>
      {/* charts */}
      <div className="flex justify-center mt-10">
        <BarChart
          width={500}
          height={300}
          data={statistic}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="revenue"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {statistic?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        <PieChart width={400} height={400}>
          <Pie
            data={statistic}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="ordered"
          >
            {statistic?.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default AdminHome;
