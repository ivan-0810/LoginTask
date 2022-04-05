import React,{ useContext, useEffect } from 'react';
import { Context } from '../../context';

const Homepage = () => {
  const { isLoged, setIsLoged , isLoading, setIsLoading} = useContext(Context);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
      <div
      >
      <div className="container">
      home

    </div>
      </div>
    
  );
};

export default Homepage;
