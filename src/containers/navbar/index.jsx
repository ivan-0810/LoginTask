import React, { useContext } from 'react';
import ButtonMain from '../../components/Button';
import { Context } from '../../context';

const Navbar = () => {
  const { logout, user } = useContext(Context);

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarSupportedContent"
        >
          <p className='text-dark me-3 mb-0'>Welcome {user?.name}</p>
          <ButtonMain type="button" className="text-white" onClick={logout}>
            logout
          </ButtonMain>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
