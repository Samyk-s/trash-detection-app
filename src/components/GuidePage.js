import React from 'react';
import TabBar from './TabBar';
import '../styles/GuidePage.css';
import recyclingImage from '../assets/recycling.jpg';
import nonRecyclingImage from '../assets/non-recycling.jpg';

const GuidePage = () => {
  return (
    <div>
      <TabBar />
      <div className="guide-container">
        <h2>Recycling and Planting Guide</h2>
        <section className="recycling-section">
          <h3>Recycling Guide</h3>
          <p>Recycling helps to reduce the pollution caused by waste and reduces the need for raw materials so that the rainforests can be preserved. Here are some common recyclable items:</p>
          <ul>
            <li><strong>Plastic Bottles:</strong> Recycle at designated plastic recycling bins.</li>
            <li><strong>Paper:</strong> Recycle at paper recycling centers or use in compost.</li>
            <li><strong>Glass:</strong> Take to glass recycling points.</li>
          </ul>
          <p>Here are some suggestions on what to do with non-recyclable items:</p>
          <ul>
            <li><strong>Plastic Bags:</strong> Reuse them for shopping or storage.</li>
            <li><strong>Batteries:</strong> Dispose of them at designated battery recycling points.</li>
            <li><strong>Ceramics:</strong> Use broken ceramics for mosaic art projects.</li>
          </ul>
          <img src={recyclingImage} alt="Recycling" className="guide-image" />
        </section>
        <section className="non-recycling-section">
          <h3>Non-Recyclable Items Guide</h3>
          <p>It's important to know what items cannot be recycled so we can dispose of them properly and reduce contamination in the recycling stream. Here are some non-recyclable items:</p>
          <ul>
            <li><strong>Food Waste:</strong> Can be composted instead of being thrown in the trash.</li>
            <li><strong>Polystyrene Foam:</strong> Avoid using it; opt for reusable or recyclable alternatives.</li>
            <li><strong>Clothing:</strong> Donate if in good condition, otherwise consider textile recycling options.</li>
          </ul>
          <img src={nonRecyclingImage} alt="Non-Recyclable" className="guide-image" />
        </section>
        <section className="planting-section">
          <h3>Planting Guide</h3>
          <p>Planting trees and maintaining a garden can significantly improve your environment. Here are some tips:</p>
          <ul>
            <li><strong>Choose the Right Plants:</strong> Select plants that are suitable for your climate and soil type.</li>
               <li><strong>Prepare Your Soil:</strong> Use compost and mulch to enrich the soil and retain moisture.</li>
            <li><strong>Watering:</strong> Water your plants regularly, especially during dry spells, but avoid overwatering.</li>
            <li><strong>Maintenance:</strong> Regularly weed and prune your plants to keep them healthy and encourage growth.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GuidePage;
