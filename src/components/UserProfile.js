import React from 'react';
import UserContext from '../contexts/UserContext';
import ThemeContext from '../contexts/ThemeContext';

const UserProfile = () => (
  <UserContext.Consumer>
    {({ username }) => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <label style={{ color: theme.textColor }}>
            { username }
          </label>
        )}
      </ThemeContext.Consumer>
    )}
  </UserContext.Consumer>
);

export default UserProfile;
