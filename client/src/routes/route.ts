import Main from '../pages/MainPage/Main';
import Login from '../pages/LoginPage/Login';

type IRouteValue = {
  [key: string]: {
    path: string;
    element: React.FC<any>;
  };
};
export const ROUTE: IRouteValue = {
  HOME: {
    path: '/',
    element: Main,
  },
  LOGIN: {
    path: `/`,
    element: Login,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
