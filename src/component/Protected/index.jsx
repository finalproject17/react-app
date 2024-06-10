import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({ isSinUp, children }) {
  console.log(isSinUp,children);
  if (isSinUp=='false') {
    return <Navigate to="/signUp" />;
  }
    else {
      return children
    }
  
  
}
