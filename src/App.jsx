import React, { useContext, useEffect } from 'react';
import { Context } from './context';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Login from './containers/login';
import Homepage from './containers/homepage';
import RequireAuth from './components/RequireAuth';
import Cookies from 'js-cookie';
import Loader from './components/Loader'

const App = () => {
  const user = Cookies.get('user');
  const { setUser } = useContext(Context);

  useEffect(() => {
    if (user) {
      console.log(user, " user")
      const parsed = JSON.parse(user);
      setUser(parsed);
    }
  }, [user]);

  return (
    <MainLayout>
      <Loader />
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Homepage />} />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default App;
