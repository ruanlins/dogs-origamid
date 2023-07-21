import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({ children }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    return <></>;
  }

  //O método abaixo faz o usuário ver a pagina de Login
  //novamente antes de aparecer o usuário caso a página
  //seja recarregada

  // return login ? { children } : <Navigate to="/login" />;
};

export default ProtectedRouter;
