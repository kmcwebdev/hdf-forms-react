import MailOutlined from '@ant-design/icons/MailOutlined';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useStore } from 'src/store';

const EmailChecker: React.FC = () => {
  const { form } = useStore();

  console.log(form);

  return (
    <Form name='email_check_form' layout='vertical'>
      <Form.Item
        label='Email'
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<MailOutlined className='text-gray-400' />} />
      </Form.Item>
      <Form.Item className='float-right'>
        <div className='flex gap-x-4'>
          <Link to='/home'>
            <Button>Go back</Button>
          </Link>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default EmailChecker;
