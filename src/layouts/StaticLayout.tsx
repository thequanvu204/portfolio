import StaticBackground from "../components/Background";
import { Outlet } from "react-router-dom";

const StaticLayout = () => {
  return (
    <>
      <StaticBackground />
      <Outlet /> {/* Render nội dung page con */}
    </>
  );
};

export default StaticLayout;
