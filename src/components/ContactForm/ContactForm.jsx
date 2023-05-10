import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/Contacts/operations';
import { useState } from 'react';
import {
  FormWrap,
  AddModalBtn,
  UserIcon,
  PhoneIcon,
  InputForm,
  AddModal,
  OpenAddModal,
} from './ContactForm.styled'; // стилі
import { PlusCircleOutlined } from '@ant-design/icons'; // іконки

export const ContactForm = () => {
  const [open, setOpen] = useState(false); // стейт для відкриття модалки
  const [form] = FormWrap.useForm();
  const currentContacts = useSelector(state => state.contacts.items); // масив контактів
  const loader = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const showModal = () => {
    form.resetFields(); // очищаємо форму
    setOpen(true); // відкриваємо модалку
  };

  const submit = value => {
    // форматуємо номер телефону
    const formatTel = () => {
      const number = value.number;
      const phoneLength = number.length;

      // перевіряємо чи номер телефону відповідає формату
      if (phoneLength < 7) {
        return `(${number.slice(0, 3)}) ${number.slice(3)}`; // якщо менше 7 то виводимо тільки перші 3 цифри
      }

      // якщо більше 7 то виводимо 3 цифри, потім 3 і потім 4
      return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
        6,
        10
      )}`;
    };

    const newContact = { name: value.name, number: formatTel() }; // створюємо новий контакт
    const newContactName = newContact.name.toLowerCase();

    // перевіряємо чи такий контакт вже є в списку
    if (
      currentContacts.find(
        contact => contact.name.toLowerCase() === newContactName
      )
    ) {
      alert(`${newContact.name} is already in contact`); // якщо є то виводимо повідомлення
    } else {
      dispatch(addContact(newContact)); // якщо немає то додаємо контакт

      // якщо контакт додано то очищаємо форму і закриваємо модалку
      if (!loader) {
        form.resetFields();
        setOpen(false);
      }
    }
  };

  return (
    <>
      <OpenAddModal
        type="primary"
        onClick={showModal}
        title="add new contact"
        size={'large'} // розмір кнопки
      >
        <PlusCircleOutlined />
        Add contact
      </OpenAddModal>

      <AddModal
        footer={null}
        title="Add new contact"
        open={open}
        onCancel={() => setOpen(false)}
      >
        <FormWrap
          form={form}
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={submit}
        >
          <FormWrap.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input Name!',
                type: 'text',
              },
            ]}
          >
            <InputForm
              prefix={<UserIcon />}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </FormWrap.Item>

          <FormWrap.Item
            name="number"
            rules={[
              {
                required: true,
                message: 'Please input Number!',
                type: 'phone',
              },
            ]}
          >
            <InputForm
              prefix={<PhoneIcon />}
              type=""
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
          </FormWrap.Item>

          <FormWrap.Item>
            <AddModalBtn type="primary" htmlType="submit">
              Create contact
            </AddModalBtn>
          </FormWrap.Item>
        </FormWrap>
      </AddModal>
    </>
  );
};
