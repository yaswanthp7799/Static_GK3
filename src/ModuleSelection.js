// ModuleSelection.js

import React, { useState } from 'react';
import questionsData from './questions.json'; // Import your JSON file

const ModuleSelection = ({ onSelectModule }) => {
  const modules = Object.keys(questionsData); // Get the available modules

  const handleModuleSelect = (module) => {
    onSelectModule(module);
  };

  return (
    <div>
      <h2>Select Module</h2>
      <ul>
        {modules.map((module, index) => (
          <li key={index} onClick={() => handleModuleSelect(module)}>
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleSelection;
