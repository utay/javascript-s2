import React from 'react';

const UserContext = React.createContext({
  username: undefined,
  isLoggedIn: false,
  onSubmit: () => {}
});

export default UserContext;
