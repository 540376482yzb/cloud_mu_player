import React from 'react';
import { Route } from "react-router-dom";
export const rootRoute = []

export const makeRoute = () => {
  return rootRoute.map((route, key) => <Route key={key} path={route.path} component={route.component} />)
}