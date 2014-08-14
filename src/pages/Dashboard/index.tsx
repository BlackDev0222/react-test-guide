// node_modules
import React from "react";

// components
import { withLayout, DashboardComponent } from "../../components";

// Dashboard Page
const DashboardPage: React.FC = () => {
  return <DashboardComponent />;
};

export default withLayout(DashboardPage);
