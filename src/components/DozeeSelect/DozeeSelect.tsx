import React, { useState } from 'react';

const DozeeSelect = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
        {isOpen && (
          <div>
            <p>Option A</p>
            <p>Option B</p>
            <p>Option C</p>
          </div>
        )}
      </div>
    );
}

export default DozeeSelect