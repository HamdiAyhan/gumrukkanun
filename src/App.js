import React, { useState, useEffect } from 'react';
import kanun from './Data/4458Gumruk';
import categori from './MainCategories';

function App() {
  const [adetz, setadet] = useState(null);

  const handleClick = index => {
    setadet(index -1);
  };

  useEffect(() => {
    if (adetz !== null) { 
      selectAll(adetz);
    }
  }, [adetz]);

  function selectAll(index) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, btnIndex) => {
      if (btnIndex !== index) {
        button.classList.add('disappear');
      } else if (btnIndex == index) {
        button.classList.add('secim');





        
          }
    });
  }

  const [data, setData] = useState(kanun);
  const [categories, setcategori] = useState(categori);

  return (
    <div className="App">
      <h2>4458 No'lu Gümrük Kanunu</h2>

      {categories.map(list => (
        <div key={list.id} className="button-container">
          <button
            id="buton"
            className="button"
            onClick={() => handleClick(list.id)}
          >
            {list.id} - {list.Name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
