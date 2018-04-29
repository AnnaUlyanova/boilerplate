import React from 'react';

import AddForm from '../../containers/AddForm';
import MyEntries from '../../containers/MyEntries';

function MainComponent() {
  return (
    <div>
      <h1>Main Component</h1>
      <MyEntries />
      <AddForm />
    </div>
  );
}

export default MainComponent;
