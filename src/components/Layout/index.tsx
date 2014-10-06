// node_modules
import React from "react";

// sections
import HeaderSection from "./Header";
import FooterSection from "./Footer";

// component props
interface LayoutProps {
  children?: React.ReactNode;
}

// Layout Component
const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderSection />
      {children}
      <FooterSection />
    </>
  );
};

// HOC (Higher Order Component)
const withLayout = (Component: React.FC) => (props: any) => {
  return (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  );
};

export default withLayout;
