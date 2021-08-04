import { Checkbox, Form, FormInstance, Input } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { useEffect } from 'react';
import { useStore } from 'src/store';
import { PersonalInformation as IPersonalInformation } from 'src/utilities/interface/personal-information.interface';
import { DatePicker } from './datetime';

interface PersonalInformationProps {
  form: FormInstance;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ form }) => {
  const { personalInformation, authorized, setAuthorized } = useStore();

  useEffect(() => {
    if (personalInformation && Object.keys(personalInformation).length > 1) {
      const { firstName, lastName, email, phoneNumber, address, company } =
        personalInformation;

      form.setFieldsValue({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        company,
      });
    }
  }, [form, personalInformation]);

  function onChange(e: CheckboxChangeEvent) {
    setAuthorized(e.target.checked);
  }

  return (
    <Form<IPersonalInformation>
      name='personal_details_form'
      form={form}
      layout='vertical'
    >
      <Form.Item
        label='Date of visit'
        name='visitDate'
        initialValue={new Date()}
      >
        <DatePicker className='w-full' format='YYYY/MM/DD' disabled />
      </Form.Item>
      <Form.Item
        label='First name'
        name='firstName'
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Last name'
        name='lastName'
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Phone number'
        name='phoneNumber'
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Address'
        name='address'
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Company'
        name='company'
        rules={[{ required: true, message: 'Please input your company!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Have you traveled to any other cities outside of your city of residence/work? If yes, please list.'
        name='city'
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='authorized'
        valuePropName='checked'
        initialValue={authorized}
      >
        <Checkbox className='text-justify' onChange={onChange}>
          I hereby authorize KMC Solutions, to collect and process the data
          indicated herein for the purpose of contact tracing effecting control
          of the COVID-19 transmission. I understand that my personal
          information is protected by RA 10173, Data Privacy Act of 2012, and
          that this form will be destroyed after 30 days from the date of
          accomplishment, following the National Archives of the Philippines
          protocol.
        </Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PersonalInformation;
