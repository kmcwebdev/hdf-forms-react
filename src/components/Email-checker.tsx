/* eslint-disable react-hooks/exhaustive-deps */
import MailOutlined from '@ant-design/icons/MailOutlined';
import { Button, Form, Input, message } from 'antd';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { VisitorAPI } from 'src/services/api/visitor.api';
import { HttpError } from 'src/services/http.service';
import { useStore } from 'src/store';
import { ApiError } from 'src/utilities/api-error.utils';

const EmailChecker: React.FC = () => {
  const { personalInformation, setPersonalInformation, setShowForm } =
    useStore();
  const [email, setEmail] = useState<string>('');
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  const { isLoading, data, mutateAsync } = useMutation(VisitorAPI.checkEmail, {
    onSuccess: () => {
      setTimeout(() => setShowForm(true), 2000);
    },
    onMutate: (email) => {
      setEmail(email);
      setBtnLoading(true);
    },
    onError: (error: HttpError) => {
      message.error(ApiError(error));
    },
  });

  useEffect(() => {
    if (data && Object.keys(data).length > 1) {
      const { firstName, lastName, email, phoneNumber, address, company } =
        data;

      setPersonalInformation({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        company,
      });
    } else {
      setPersonalInformation({ email });
    }
  }, [isLoading, data]);

  useEffect(() => {
    return () => setBtnLoading(false);
  }, []);

  return (
    <Form<{ email: string }>
      name='email_check_form'
      onFinish={async (values) => {
        await mutateAsync(values.email);
      }}
      layout='vertical'
    >
      <Form.Item
        label='Email'
        name='email'
        initialValue={personalInformation?.email}
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<MailOutlined className='text-gray-400' />} />
      </Form.Item>
      <Form.Item className='float-right'>
        <div className='flex gap-x-4'>
          <Link to='/home'>
            <Button>Go back</Button>
          </Link>
          <Button
            type='primary'
            loading={isLoading || btnLoading}
            htmlType='submit'
          >
            Submit
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default EmailChecker;
