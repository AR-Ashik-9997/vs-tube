import React from "react";
import { child } from "../../types";
import Header from "../Header/Header";

const Layout = ({ children }: child) => {
  return (
    <>
      <Header />
      <section>
        <div className="drawer drawer-mobile">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">{children}</div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-50 lg:w-48 md:w-48 bg-base-100 text-base-content">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
