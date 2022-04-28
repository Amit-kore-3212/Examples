import React from "react";
import { AdminIcon } from "../Icons/Admin";
import { HambergerIcon } from "../Icons/HambergerIcon";
import { Logo } from "../Icons/Logo";
import { NotificationIcon } from "../Icons/NotificationIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { SettingsIcon } from "../Icons/SettingsIcon";

export const AppHeader = () => {
  return (
    <div className="AppHeaderContainer">
      <div style={{ display: "flex", paddingLeft: "30px" }}>
        <div>
          <HambergerIcon />
        </div>
        <div style={{ paddingLeft: "10px" }}>
          <Logo />
        </div>
      </div>
      <div>
        <div>
          <h3>My studion builder</h3>
        </div>
      </div>
      <div style={{ display: "flex", marginRight: "30px" }}>
        <div className="padding">
          <SearchIcon />
        </div>
        <div className="padding">
          <NotificationIcon />
        </div>
        <div className="padding">
          <AdminIcon />
        </div>
        <div className="padding">
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};
