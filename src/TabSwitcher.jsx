import React, { useState } from "react";
import "./TabSwitcher.css";

// Sample tab data
const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {
  // TODO: Set up state to track the active tab

    const [activeTab, setActiveTab] = useState("home");

    const currentTab = tabs.find((tab) => tab.id === activeTab);
  const handleClick = (tab) => {
    setActiveTab(tab.id)
 }

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>
      <div className="tab-buttons">
        {tabs.map((tab, id) => {
          return <button
                    key={id}
                    className={`button${activeTab === tab.id ? " active" : ""}`}
                    onClick={() => handleClick(tab)}
                    data-testid={`tab-button-${tab.id}`}>
                    {tab.label}
                 </button>
        })}
      </div>
      <div className="tab-content" data-testid="tab-content">
        {currentTab.content}
      </div>
    </div>
  );
}
