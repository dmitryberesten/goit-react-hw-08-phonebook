import { useSelector } from 'react-redux';
import { Avatar, Button } from 'antd';
import { Wrap } from './Usermenu.styled';
import { logOut } from 'Redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons'; // для іконки виходу

export const UserMenu = () => {
  const { email } = useSelector(state => state.auth.user); // витягуємо email зі стейта
  const dispatch = useDispatch();

  return (
    <Wrap>

      {/* для аватарки використовуємо першу літеру email */}
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>

      <p>{email}</p>

      {/* для виходу використовуємо іконку */}
      <Button type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Log out
      </Button>{' '} {/* пробіл для відступу */}
    </Wrap>
  );
};
