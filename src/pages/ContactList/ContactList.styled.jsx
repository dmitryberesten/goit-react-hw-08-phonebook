import styled from 'styled-components';
import { Button, Modal, Input, Spin } from 'antd';
import {
  UserSwitchOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const ButtonRedact = styled(Button)`
  margin-right: 8px;
  margin-left: auto;
`;

export const Item = styled.li`
  background-color: #f5f6f7;
  padding-left: 10px;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const UserIcon = styled(UserSwitchOutlined)`
  color: #c7c6c6;
`;

export const PhoneIcon = styled(PhoneOutlined)`
  color: #c7c6c6;
`;

export const InputForm = styled(Input)`
  height: 40px;
  font-size: 18px;
  width: 100%;
  :nth-child(1) {
    margin-bottom: 12px;
  }
`;

export const ModalRedact = styled(Modal)`
  text-align: center;

  .ant-modal-content {
    width: 330px;
    position: absolute;
    top: 50%;
    left: 20%;
  }
`;

export const UserIconList = styled(UserOutlined)`
  margin-right: 8px;
  color: #1677ff;
`;

export const PhoneiconList = styled(PhoneOutlined)`
  margin: 0 8px;
  color: #1677ff;
`;

export const DivName = styled.div`
  min-width: 220px;
`;

export const Spiner = styled(Spin)`
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  margin: 20px auto;
  color: #2e2d2dbc;
`;

export const Container = styled.div`
  padding: 20px 0;
`;
