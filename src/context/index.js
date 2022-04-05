import React, { useState, createContext, useReducer } from 'react';
import { auth } from '../actions/auth';
import Cookies from 'js-cookie';
import bcrypt from 'bcryptjs';

export const Context = createContext({});
const INITIAL_STATIE = [
  {
    name: 'Ivan',
    email: 'ivan@ivanov.mk',
    password: 'Ivan232@'
  },
  {
    name: 'Marcus',
    email: 'marcus@biel.de',
    password: 'marcus'
  }
];

export const Provider = props => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, dispatch] = useReducer((state = INITIAL_STATIE, action) => {
    switch (action.type) {
      case auth.CHECK_CREDENTIALS:
        const { email, password } = action.payload;
        const user = state.find(
          item => item.email === email && item.password === password
        );
        if (user) {
          let obj;

          const hashedPassword = bcrypt.hashSync(
            user.password,
            '$2a$10$CwTycUXWue0Thq9StjUM0u'
          );
          obj = {
            name: user.name,
            email: user.email,
            password: hashedPassword
          };
          const stringified = JSON.stringify(obj);
          Cookies.set('user', stringified);
          setUser(user);
        }
        return state;
      default:
        return state;
    }
  }, INITIAL_STATIE);

  const logout = () => {
    setIsLoading(true)
    setUser(null);
    Cookies.remove('user');
  };

  const generalData = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    dispatch,
    logout
  };
  return (
    <Context.Provider value={generalData}>{props.children}</Context.Provider>
  );
};
