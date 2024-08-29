import React from 'react';

export const ListKategori = ({kategori, text, id, selectAll, adet , adetz}) => {
  const handleClick = index => {
    adet (index);
    console.log ('veri' + adetz);
    selectAll ();
  };

  return (
    <div className="button-container">
      <button
        id="buton"
        key={id}
        className="button"
        onClick={() => handleClick (id)}
      >
        {kategori} - {text}
      </button>

    </div>
  );
};
