import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import {
  isEmpty,
  map,
} from 'ramda';

import Entry from '../Entry';

function MyEntries({ entries }) {
  if (isEmpty(entries)) {
    return (
      <div>Seems you don`t have any entries yet </div>
    );
  }

  return (
    <BrowserRouter>
      <div>
        <h1>My Entries</h1>
        <ul>
          {map(entry => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <li key={entry.id}><Link to={entry.id}>{entry.text}</Link></li>
              ), entries.newState)}
        </ul>

        <Route
          path="/:id"
          component={Entry}
        />

      </div>
    </BrowserRouter>
  );
}

MyEntries.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  entries: PropTypes.object.isRequired,
};

export default MyEntries;
