import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllDetails } from './redux/actions';
import { AppContainer } from './styles/common';
import LandingPage from './organisms/landingPage';
import Header from './organisms/header';


function App() {
  const dispatch = useDispatch();

  const getTheInitialState = useCallback(
    () => dispatch(getAllDetails()),
    [dispatch]
  )
  
  useEffect(() => {
    getTheInitialState();
  }, []);

  return (
    <>
      <Header />
      <AppContainer>
        <LandingPage />
      </AppContainer>
    </>
  );
}

export default App;
