import Avatar from "@/components/Common/Avatar";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="container pt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Welcome</h1>
        <Avatar src={"/user.jpg"} alt={""} />
      </div>
    </div>
  );
};

export default Header;
