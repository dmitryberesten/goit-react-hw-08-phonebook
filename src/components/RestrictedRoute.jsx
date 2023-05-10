import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoaggedIn } = useSelector(state => state.auth); // це для того щоб не було редіректу на логін поки не завантажиться токен
  return isLoaggedIn ? <Navigate to={redirectTo} /> : Component; // якщо залогінений, то рендеримо компонент
};
