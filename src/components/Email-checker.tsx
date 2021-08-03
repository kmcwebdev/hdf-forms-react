/* eslint-disable react-hooks/exhaustive-deps */
import MailOutlined from '@ant-design/icons/MailOutlined';
import { Button, Form, Input, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { VisitorAPI } from 'src/services/api/visitor.api';
import { HttpError } from 'src/services/http.service';
import { useStore } from 'src/store';
import { ApiError } from 'src/utilities/api-error.utils';
import { FormState } from 'src/utilities/enum/form-state.enum';
import { mailDomainIs } from 'src/utilities/mail-domain-is.utils';

const EmailChecker: React.FC = () => {
  const {
    form: pathState,
    setEmail,
    setPersonalInformation,
    setShowForm,
  } = useStore();
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  let btnLoadingTimeout = useRef<ReturnType<typeof setTimeout>>();

  const IS_A_GUEST = pathState === FormState.Guest;

  const { isLoading, data, mutateAsync } = useMutation(VisitorAPI.checkEmail, {
    onSuccess: (visitor) => {
      const IS_A_MEMBER =
        IS_A_GUEST &&
        Object.keys(visitor).length &&
        !mailDomainIs(visitor.email, 'kmc.solutions');

      if (IS_A_MEMBER) {
        btnLoadingTimeout.current = setTimeout(() => setShowForm(true), 2000);
      }
    },
    onMutate: (email) => {
      setEmail(email);
      setBtnLoading(true);

      if (IS_A_GUEST && mailDomainIs(email, 'kmc.solutions')) {
        message.warning(
          "Please enter a valid email. If you are not a guest, please use our Member's Declaration Form",
          3
        );

        btnLoadingTimeout.current = setTimeout(
          () => setBtnLoading(false),
          1000
        );
      }
    },
    onError: (error: HttpError) => {
      message.error(ApiError(error), 2);

      btnLoadingTimeout.current = setTimeout(() => setBtnLoading(false), 1000);
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
    }
  }, [isLoading, data]);

  useEffect(() => {
    return () => clearTimeout(btnLoadingTimeout.current!);
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
