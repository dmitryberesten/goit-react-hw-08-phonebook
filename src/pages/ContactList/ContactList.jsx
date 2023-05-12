import {
  Item,
  List,
  ButtonRedact,
  UserIcon,
  PhoneIcon,
  InputForm,
  ModalRedact,
  UserIconList,
  PhoneiconList,
  DivName,
  Spiner,
  Title,
  Container,
} from './ContactList.styled'; // для стилів

import { useDispatch, useSelector } from 'react-redux';

import {
  deleteContact,
  redactContatc,
  fetchContacts,
} from 'Redux/Contacts/operations'; // для операцій

import { useEffect, useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button, Popconfirm } from 'antd'; // для кнопки видалення
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'; // для іконок

export default function Contactlist() {
  const [subName, setSubName] = useState(''); // для редагування контакту
  const [subNumber, setSubNumber] = useState('');
  const [subId, setSubId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOk = () => {
    setIsModalOpen(false); // закриваємо модалку
    dispatch(redactContatc({ id: subId, name: subName, number: subNumber })); // редагуємо контакт
  };

  const showModal = (name, number, id) => {
    setSubNumber(number);
    setSubName(name);
    setSubId(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false); // закриваємо модалку
  };

  useEffect(() => {
    dispatch(fetchContacts()); // для отримання контактів з бекенду
  }, [dispatch]);

  const { isLoading } = useSelector(state => state.contacts);
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase(); // для фільтрації

  // фільтруємо контакти по введеному значенню
  const visibleContacts = contacts.filter(subscriber =>
    subscriber.name.toLowerCase().includes(filterData)
  );

  return (
    <section>
      <Container>
        <div>
          {' '}
          {/* якщо контактів немає, то виводимо заголовок, якщо є, то виводимо фільтр */}
          {contacts.length < 1 ? (
            <Title>Add you firs contact</Title>
          ) : (
            <Filter />
          )}
          <ContactForm />
          {isLoading && <Spiner />}
        </div>
        <List>
          {/* виводимо контакти на екран і додаємо кнопки для видалення і редагування */}
          {visibleContacts.map(({ id, name, number }) => (
            <Item key={id}>
              {/* для іконки */}
              <DivName>
                <UserIconList />
                {name}:
              </DivName>
              <PhoneiconList /> {number}
              {/* для кнопок */}
              <ButtonRedact
                onClick={() => showModal(name, number, id)}
                title="Edit contatc"
              >
                <EditOutlined />
                Edit
              </ButtonRedact>

              <Popconfirm
                title="Are you sure delete this task?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => dispatch(deleteContact(id))}
              >
                <Button title="delete contact" type="primary">
                  <DeleteOutlined /> Delete
                </Button>
              </Popconfirm>
            </Item>
          ))}

          <ModalRedact
            title="Edit a contact"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <InputForm
              prefix={<UserIcon />}
              value={subName} // для редагування контакту
              onChange={e => {
                setSubName(e.target.value);
              }}
            />
            <InputForm
              prefix={<PhoneIcon />}
              value={subNumber}
              onChange={e => {
                setSubNumber(e.target.value);
              }}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </ModalRedact>
        </List>
      </Container>
    </section>
  );
}

// Діма Берестень
