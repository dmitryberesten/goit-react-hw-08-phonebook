import styled, { keyframes } from 'styled-components';
import {
  UsergroupAddOutlined,
  EditOutlined,
  PhoneOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { fadeInLeftBig } from 'react-animations';
import img from '../../img/exampleList.png';

const fadeAnimation = keyframes`${fadeInLeftBig}`; // для анімації

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #2e2d2dbc;
`;

export const Wrap = styled.div`
  margin-bottom: 60px;
  padding: 40px 0;
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const UnderTitle = styled.h2`
  color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 8px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 5px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 20px;
  :hover {
    opacity: 0.8;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
  height: 40em;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.96),
      rgba(255, 255, 255, 0.97)
    ),
    url(${img});
  border-radius: 1.1em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeEdit = styled(EditOutlined)`
  animation: 2.5s ${fadeAnimation};
  svg {
    color: #1677ff;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;

export const HomePhoneIcon = styled(PhoneOutlined)`
  animation: 2s ${fadeAnimation};
  svg {
    color: #1677ff;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;

export const HomeUserGroup = styled(UsergroupAddOutlined)`
  animation: 1.5s ${fadeAnimation};
  svg {
    color: #1677ff;
    display: block;
    height: 220px;
    margin: 0 auto;
    width: 250px;
  }
`;

export const HomeContactList = styled(ContactsOutlined)`
  animation: 1s ${fadeAnimation};

  svg {
    color: #1677ff;
    width: 220px;
    display: block;
    height: 220px;
    margin: 0 auto;
  }
`;
