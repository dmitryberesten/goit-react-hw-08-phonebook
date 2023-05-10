import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

export const FormWrap = styled(Form)`
  width: 300px;
`;

export const LogButton = styled(Button)`
  width: 100%;
  height: 45px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const UserIcon = styled(MailOutlined)`
  color: #c7c6c6;
`;

export const PasswordIcon = styled(LockOutlined)`
  color: #c7c6c6;
`;

export const InputForm = styled(Input)`
  height: 45px;
  font-size: 18px;
  width: 100%;
`;

export const RegLink = styled.div`
  font-size: 18px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

export const TitleReg = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: #2e2d2dbc;
`;
