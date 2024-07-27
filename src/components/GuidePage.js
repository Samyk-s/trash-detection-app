import React, { useState } from 'react';
import '../styles/GuidePage.css';
import TabBar from '../components/TabBar'; // Import TabBar
import Modal from 'react-modal'; // Import Modal

const items = [
  {
    name: 'Paper Products',
    img: require('../assets/paper1.jpg'),
    guidelines: 'Remove any plastic wrappers, flatten paper products, and avoid contamination with food or liquids.',
    process: 'Place in a designated paper recycling bin. Ensure that the paper is dry and clean.'
  },
  {
    name: 'Plastic Bottles and Containers',
    img: require('../assets/plastic1.jpg'),
    guidelines: 'Rinse out any residue, remove caps, and avoid mixing with non-recyclable plastics.',
    process: 'Place in the plastic recycling bin. Crush bottles to save space.'
  },
  {
    name: 'Glass Bottles and Jars',
    img: require('../assets/glass1.jpg'),
    guidelines: 'Rinse out residue, remove lids, and avoid breaking the glass.',
    process: 'Place in the glass recycling bin. Separate by color if required.'
  },
  {
    name: 'Metal Cans and Foil',
    img: require('../assets/metal1.jpg'),
    guidelines: 'Rinse and flatten cans, clean foil, and avoid mixing with other materials.',
    process: 'Place in the metal recycling bin. Remove any food residues.'
  },
  {
    name: 'Cardboard',
    img: require('../assets/cardboard1.jpg'),
    guidelines: 'Flatten boxes, remove any non-paper packing materials, and keep dry.',
    process: 'Place in the cardboard recycling bin. Cut large pieces to fit the bin.'
  },
  {
    name: 'Food Waste',
    img: require('../assets/food1.jpg'),
    guidelines: 'Separate organic waste, avoid contamination with non-compostable items.',
    process: 'Use composting if available. Place in organic waste bin or compost bin.'
  },
  {
    name: 'Plastic Bags and Wrappers',
    img: require('../assets/plastic_bags1.jpg'),
    guidelines: 'Avoid if possible, use reusable bags, and keep separate from other recyclables.',
    process: 'Dispose of in regular trash or check for local recycling programs.'
  },
  {
    name: 'Styrofoam',
    img: require('../assets/styrofoam1.jpg'),
    guidelines: 'Avoid using, look for alternatives, and do not contaminate with food or liquids.',
    process: 'Place in regular trash unless a local recycling program is available.'
  },
  {
    name: 'Electronics',
    img: require('../assets/electronics1.jpg'),
    guidelines: 'Do not dispose of in regular trash, remove batteries if possible.',
    process: 'Take to e-waste recycling centers. Follow local disposal guidelines.'
  },
  {
    name: 'Hazardous Materials',
    img: require('../assets/hazardous1.jpg'),
    guidelines: 'Follow local disposal guidelines, avoid mixing with regular waste.',
    process: 'Take to hazardous waste disposal facilities. Handle with care.'
  }
];

const GuidePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentItem(null);
  };

  return (
    <div>
      <TabBar />
      <div className="guide-page">
        <h1>Recycling Guidelines and Processes</h1>
        <div className="intro">
          <p>Recycling is an essential process for managing waste and conserving resources. By following proper recycling guidelines, we can reduce the amount of waste sent to landfills, conserve natural resources, and protect the environment. This guide provides detailed information on how to properly recycle common household items and highlights the items that cannot be recycled through regular means.</p>
          <p>Understanding what can and cannot be recycled is crucial for effective waste management. This guide aims to educate and inform about the best practices for recycling various materials, ensuring that you contribute positively to the environment.</p>
        </div>
        <div className="guide-section">
          <h2>Common Recyclable Items</h2>
          <div className="item-container">
            {items.slice(0, 5).map((item, index) => (
              <div className="item" key={index} onClick={() => openModal(item)}>
                <img src={item.img} alt={item.name} className="item-image" />
                <div className="item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="guide-section">
          <h2>Common Non-Recyclable Items</h2>
          <div className="item-container">
            {items.slice(5).map((item, index) => (
              <div className="item" key={index} onClick={() => openModal(item)}>
                <img src={item.img} alt={item.name} className="item-image" />
                <div className="item-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Item Details" className="modal">
          {currentItem && (
            <>
              <h3>{currentItem.name}</h3>
              <p><strong>Guidelines:</strong> {currentItem.guidelines}</p>
              <p><strong>Process:</strong> {currentItem.process}</p>
              <button onClick={closeModal}>Close</button>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default GuidePage;
