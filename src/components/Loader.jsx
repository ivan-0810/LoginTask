import React, { useContext } from 'react';
import { Context } from '../context'
const Spinner = () => {
    const { isLoading } = useContext(Context);
  return (
    <>
      {isLoading && (
        <div className="spinner-wrapper rounded-circle">
        <div className="eclipse_spinner"></div>
      </div>
      )}
    </>
  );
};

export default Spinner;