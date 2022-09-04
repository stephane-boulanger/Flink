import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import "./sidebar.css";

const Sidebar = ({ categoriesData }) => {
  console.log(categoriesData);
  return (
    <aside className="sidebar">
      <div className="side-delivery">
        <div className="address-btn">
          <div className="time-delivery">12 mins</div>
          <div className="address-delivery">Ajouter adresse</div>
        </div>
      </div>
      <div className="sidebar-menu">
        <div className="section-sidebar">
          <p className="side-bar-heading">NAVIGATION</p>
          <div className="menu-items">
            <p>
              <HomeOutlined /> Accueil
            </p>
          </div>
        </div>
        <div className="section-sidebar">
          <p className="side-bar-heading">CATEGORIES</p>
          <div className="menu-items">
            {categoriesData.map((item) => {
              return (
                <p>
                  <HomeOutlined /> {item.name}
                </p>
              );
            })}
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
