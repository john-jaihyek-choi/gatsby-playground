import { ReactNode } from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};
export default Layouts;
