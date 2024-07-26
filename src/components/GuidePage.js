import React from 'react';
import '../styles/GuidePage.css';
import TabBar from '../components/TabBar'; // Import TabBar

const GuidePage = () => {
  return (
    <div>
      <TabBar /> {/* Include TabBar at the top */}
      <div className="guide-page">
        <h1>Recycling Guidelines and Processes</h1>
        <div className="intro">
          <p>Recycling is an essential process for managing waste and conserving resources. By following proper recycling guidelines, we can reduce the amount of waste sent to landfills, conserve natural resources, and protect the environment. This guide provides detailed information on how to properly recycle common household items and highlights the items that cannot be recycled through regular means.</p>
          <p>Understanding what can and cannot be recycled is crucial for effective waste management. This guide aims to educate and inform about the best practices for recycling various materials, ensuring that you contribute positively to the environment.</p>
        </div>
        <div className="guide-section">
          <h2>Common Recyclable Items</h2>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/paper1.jpg')} alt="Paper Products 1" className="item-image" />
              <img src={require('../assets/paper2.jpg')} alt="Paper Products 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Paper Products</h3>
              <p><strong>Guidelines:</strong> Remove any plastic wrappers, flatten paper products</p>
              <p><strong>Process:</strong> Place in a designated paper recycling bin</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/plastic1.jpg')} alt="Plastic Bottles and Containers 1" className="item-image" />
              <img src={require('../assets/plastic2.jpg')} alt="Plastic Bottles and Containers 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Plastic Bottles and Containers</h3>
              <p><strong>Guidelines:</strong> Rinse out any residue, remove caps</p>
              <p><strong>Process:</strong> Place in the plastic recycling bin</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/glass1.jpg')} alt="Glass Bottles and Jars 1" className="item-image" />
              <img src={require('../assets/glass2.jpg')} alt="Glass Bottles and Jars 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Glass Bottles and Jars</h3>
              <p><strong>Guidelines:</strong> Rinse out residue, remove lids</p>
              <p><strong>Process:</strong> Place in the glass recycling bin</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/metal1.jpg')} alt="Metal Cans and Foil 1" className="item-image" />
              <img src={require('../assets/metal2.jpg')} alt="Metal Cans and Foil 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Metal Cans and Foil</h3>
              <p><strong>Guidelines:</strong> Rinse and flatten cans, clean foil</p>
              <p><strong>Process:</strong> Place in the metal recycling bin</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/cardboard1.jpg')} alt="Cardboard 1" className="item-image" />
              <img src={require('../assets/cardboard2.jpg')} alt="Cardboard 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Cardboard</h3>
              <p><strong>Guidelines:</strong> Flatten boxes, remove any non-paper packing materials</p>
              <p><strong>Process:</strong> Place in the cardboard recycling bin</p>
            </div>
          </div>
        </div>

        <div className="guide-section">
          <h2>Common Non-Recyclable Items</h2>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/food1.jpg')} alt="Food Waste 1" className="item-image" />
              <img src={require('../assets/food2.jpg')} alt="Food Waste 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Food Waste</h3>
              <p><strong>Guidelines:</strong> Use composting if available</p>
              <p><strong>Process:</strong> Place in organic waste bin or compost bin</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/plastic_bags1.jpg')} alt="Plastic Bags and Wrappers 1" className="item-image" />
              <img src={require('../assets/plastic_bags2.jpg')} alt="Plastic Bags and Wrappers 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Plastic Bags and Wrappers</h3>
              <p><strong>Guidelines:</strong> Avoid if possible, use reusable bags</p>
              <p><strong>Process:</strong> Dispose of in regular trash or check for local recycling programs</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/styrofoam1.jpg')} alt="Styrofoam 1" className="item-image" />
              <img src={require('../assets/styrofoam2.jpg')} alt="Styrofoam 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Styrofoam</h3>
              <p><strong>Guidelines:</strong> Avoid using, look for alternatives</p>
              <p><strong>Process:</strong> Place in regular trash unless a local recycling program is available</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/electronics1.jpg')} alt="Electronics 1" className="item-image" />
              <img src={require('../assets/electronics2.jpg')} alt="Electronics 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Electronics</h3>
              <p><strong>Guidelines:</strong> Do not dispose of in regular trash</p>
              <p><strong>Process:</strong> Take to e-waste recycling centers</p>
            </div>
          </div>

          <div className="item">
            <div className="item-images">
              <img src={require('../assets/hazardous1.jpg')} alt="Hazardous Materials 1" className="item-image" />
              <img src={require('../assets/hazardous2.jpg')} alt="Hazardous Materials 2" className="item-image" />
            </div>
            <div className="item-text">
              <h3>Hazardous Materials</h3>
              <p><strong>Guidelines:</strong> Follow local disposal guidelines</p>
              <p><strong>Process:</strong> Take to hazardous waste disposal facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
