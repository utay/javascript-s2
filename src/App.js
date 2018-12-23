import React, { Component, Suspense } from 'react';
import ThemeContext, { themes } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import ToggleButton from './components/ToggleButton';
import UserContext from './contexts/UserContext';
import ImageLoading from './components/ImageLoading';
const LoginForm = React.lazy(() => import('./components/LoginForm'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));

class App extends Component {
  state = {
    theme: themes.dark,
    toggleTheme: this.toggleTheme,
    username: undefined,
    isLoggedIn: false
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark,
    });
  };

  onSubmit = (username, password) => {
   if (username && password) {
     this.setState({
       username: username,
       isLoggedIn: true,
     })
   }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value={this.state}>
          <MainLayout>
            <Suspense fallback={<ImageLoading/>}>
              {
                this.state.isLoggedIn
                ? <UserProfile/>
                : <LoginForm onSubmit={this.onSubmit}/>
              }
            </Suspense>
            <ToggleButton onClick={this.toggleTheme}/>
          </MainLayout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
