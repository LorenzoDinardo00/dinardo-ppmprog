import React from 'react';
import './FinalButton.css';

function FinalButton() {
  return (
    <div className="FinalButton">
      <button type="button" className="final-button btn-left">I più visti</button>
      <button type="button" className="final-button btn-right">I più letti</button>
    </div>
  );
}

export default FinalButton;
