import React from 'react'

const Tabs = ({activeTab, setActiveTab, tabsList}) => {
  return (
    <div className="tabs-container">
      {tabsList.map(tab => (
        <button
          key={tab.tabId}
          className={`tab ${activeTab === tab.tabId ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.tabId)}
        >
          {tab.displayText}
        </button>
      ))}
    </div>
  )
}

export default Tabs
