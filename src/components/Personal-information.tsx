import { Checkbox, Form, FormInstance, Input } from 'antd';
import { PersonalInformation as IPersonalInformation } from 'src/utilities/interface/personal-information.interface';
import { DatePicker } from './datetime';
import { Text } from './Text';

interface PersonalInformationProps {
  form: FormInstance;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ form }) => {
  return (
    <div className='space-y-6'>
      <div>
        <Text className='text-2xl font-bold text-kmc-orange'>
          Personal Information
        </Text>
      </div>
      <Form<IPersonalInformation>
        name='personal_details_form'
        form={form}
        layout='vertical'
      >
        <Form.Item
          label='Date of visit'
          name='dateOfVisit'
          initialValue={new Date(Date.now())}
        >
          <DatePicker className='w-full' format='YYYY/MM/DD' disabled />
        </Form.Item>
        <Form.Item label='First name' name='firstName'>
          <Input />
        </Form.Item>
        <Form.Item label='Last name' name='lastName'>
          <Input />
        </Form.Item>
        <Form.Item label='Phone number' name='phoneNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Company' name='company'>
          <Input />
        </Form.Item>
        <Form.Item
          label='Have you traveled to any other cities outside of your city of residence/work? If yes, please list.'
          name='city'
        >
          <Input />
        </Form.Item>
        <Form.Item name='authorized' valuePropName='checked'>
          <Checkbox className='text-justify'>
            I hereby authorize KMC Solutions, to collect and process the data
            indicated herein for the purpose of contact tracing effecting
            control of the COVID-19 transmission. I understand that my personal
            information is protected by RA 10173, Data Privacy Act of 2012, and
            that this form will be destroyed after 30 days from the date of
            accomplishment, following the National Archives of the Philippines
            protocol.
          </Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInformation;
