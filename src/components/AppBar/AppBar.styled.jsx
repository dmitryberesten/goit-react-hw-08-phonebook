import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  IssuesCloseOutlined,
  LoginOutlined,
  HomeOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  height: 50px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }
  &.active {
    color: #3a97e8;
    border-top: 2px solid #3a97e8;
  }
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
`;

export const RegIcon = styled(IssuesCloseOutlined)`
  margin-right: 8px;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
`;

export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
`;

export const ContactIcon = styled(ContactsOutlined)`
  margin-right: 8px;
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 1000px;
`;
