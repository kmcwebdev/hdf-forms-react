import MailOutlined from '@ant-design/icons/MailOutlined';
import { Button, Form, Input, Space } from 'antd';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicy from 'src/components/Privacy-policy';
import { Text } from 'src/components/Text';

const Guest: React.FC = () => {
  return (
    <Fragment>
      <PrivacyPolicy />
      <div className='flex flex-col items-center'>
        <div className='w-full p-10 space-y-4 md:w-2/4 md:p-8'>
          <Text className='text-2xl font-bold text-kmc-orange'>
            Guest Health Declaration
          </Text>
          <Space direction='vertical'>
            <p className='text-justify'>
              In light of the recent news concerning the COVID-19 virus, KMC
              Solutions will be taking further additional steps to ensure the
              safety and health of the KMC Community.
            </p>
            <p className='text-justify'>
              This visit is subject for approval. If you are a community member
              or employee, kindly fill out the{' '}
              <Link
                className='font-semibold cursor-pointer text-kmc-orange'
                to='/member'
              >
                Member Declaration Form.
              </Link>
            </p>
          </Space>
          <div>
            <Form name='email_check_form' layout='vertical'>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input prefix={<MailOutlined className='text-gray-400' />} />
              </Form.Item>
              <Form.Item className='float-right'>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Guest;
