import React, { useState } from 'react'

const Info = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabContent = [
    {
      title: 'Coffee Origins',
      text: 'Learn about the different regions where coffee is grown and how these locations affect the flavor of your coffee.'
    },
    {
      title: 'Brewing Methods',
      text: 'Discover various ways to brew your coffee, from French Press to Espresso, and how each method impacts the flavor.'
    },
    {
      title: 'Coffee Types',
      text: 'Explore different types of coffee drinks and find out which one suits your taste, from classic Espresso to creamy Lattes.'
    },
    {
      title: 'Coffee and Sustainability',
      text: 'Learn about the importance of sustainability in the coffee industry and how you can make environmentally friendly choices when purchasing coffee.'
    },
  ]

  return <div className='information-box'>
    {/* Tab buttons */}
    <div>
      <button className={`tab ${activeTab === 0 ? 'active' : 'nonactive'}`} onClick={() => setActiveTab(0)}>Origins</button>
      <button className={`tab ${activeTab === 1 ? 'active' : 'nonactive'}`} onClick={() => setActiveTab(1)}>Brewing Methods</button>
      <button className={`tab ${activeTab === 2 ? 'active' : 'nonactive'}`} onClick={() => setActiveTab(2)}>Types</button>
      <button className={`tab ${activeTab === 3 ? 'active' : 'nonactive'}`} onClick={() => setActiveTab(3)}>Sustainability</button>
    </div>

    {/* Tab content */}
    <div className='information-content'>
      <h3>{tabContent[activeTab].title}</h3>
      <p>{tabContent[activeTab].text}</p>
    </div>
  </div>
}

export default Info