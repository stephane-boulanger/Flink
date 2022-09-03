import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="side-delivery">
        <div className="address-btn">
          <div className="time-delivery">12 mins</div>
          <div className="address-delivery">Ajouter adresse</div>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="navigation">
          <p>Navigation</p>
          <div>
            <p>
              <HomeOutlined /> Accueil
            </p>
          </div>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div>
            <p>
              <HomeOutlined /> Spirits
            </p>
          </div>
        </div>
        <div className="sidebar-faq">
          <p>
            <HomeOutlined /> FAQ
          </p>
          <p>
            <HomeOutlined />
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
