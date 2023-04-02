import Counter from './components/Counter';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import Header from './components/Header';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      {isAuthenticated && <Header/>}
      {isAuthenticated ? <UserProfile /> : <Auth/>}
      <Counter />
    </Fragment>
  );
}

export default App;
