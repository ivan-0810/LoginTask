import react from 'react';
import { Button } from 'react-bootstrap';

const ButtonMain = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonMain;
