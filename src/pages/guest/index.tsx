import { Dialog } from '@headlessui/react';
import { Button, Form, Space, Steps } from 'antd';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import EmailChecker from 'src/components/Email-checker';
import HealthDeclaration from 'src/components/Health-declaration';
import PersonalInformation from 'src/components/Personal-information';
import PrivacyPolicy from 'src/components/Privacy-policy';
import { Text } from 'src/components/Text';
import VisitInformation from 'src/components/Visit-information';
import { useStore } from 'src/store';
import { FormState } from 'src/utilities/enum/form-state.enum';

const { Step } = Steps;

const Guest: React.FC = () => {
  const { authorized, showForm, form: pathState } = useStore();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: <Text className='text-sm'>Personal details</Text>,
      content: <PersonalInformation form={form} />,
    },
    {
      title: <Text className='text-sm'>Visit details</Text>,
      content: <VisitInformation form={form} />,
    },
    {
      title: <Text className='text-sm'>Health declaration</Text>,
      content: <HealthDeclaration form={form} step={current} />,
    },
  ];

  async function next() {
    await form.validateFields();

    setCurrent(current + 1);
  }

  function prev() {
    setCurrent(current - 1);
  }

  return (
    <Fragment>
      <PrivacyPolicy>
        <div className='mt-3 sm:mt-5'>
          <Dialog.Title
            as='h3'
            className='text-lg font-bold leading-6 text-gray-900'
          >
            COMPANY CORPORATE POLICY
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-justify text-gray-500'>
              KMC shall fully comply with the obligations and requirements of
              the Data Privacy Act and, when applicable, the GDPR. KMC’s
              officers, management, and employees shall, at all times, respect
              the confidentiality and security of all personal data collected
              and/or stored and/or transmitted and/or used for, or on behalf of
              KMC. KMC shall ensure all collection, storage, transmission and
              other handling or usage of personal data by KMC shall be done in
              accordance with the obligations and requirements of the Data
              Privacy Act and when applicable, the GDPR. Where an individual
              legitimately requests access to and/or correction of personal data
              relating him/her, held by KMC, KMC shall provide and/or correct
              that data in accordance with the data privacy laws.
            </p>
          </div>
        </div>
        <div className='mt-3 sm:mt-5'>
          <Dialog.Title
            as='h3'
            className='text-lg font-bold leading-6 text-gray-900'
          >
            SECURITY OF PERSONAL DATA
          </Dialog.Title>
          <div className='mt-2'>
            <p className='text-sm text-justify text-gray-500'>
              Physical records containing personal data are securely stored in
              locked areas when not in use. Computer data are stored on computer
              systems and storage media to which access is strictly controlled
              and/or are located within restricted areas. Access to records and
              data without appropriate management authorization are strictly
              prohibited. Authorizations are granted only on a 'need to know'
              basis. Where KMC holds, uses and/or transmits personal data, the
              data will be adequately protected from accidental and/or
              unauthorized disclosure, change and/or destruction.
            </p>
          </div>
        </div>
      </PrivacyPolicy>
      <div className='flex flex-col items-center p-4 md:p-10'>
        <div className='w-full space-y-4 md:w-2/4'>
          {!showForm && (
            <Fragment>
              <Text className='text-2xl font-bold text-kmc-orange'>
                Guest Health Declaration
              </Text>
              <Space direction='vertical'>
                <p className='text-justify'>
                  In light of the recent news concerning the COVID-19 virus, KMC
                  Solutions will be taking further additional steps to ensure
                  the safety and health of the KMC Community.
                </p>
                <p className='text-justify'>
                  This visit is subject for approval. If you are a community
                  member or employee, kindly fill out the{' '}
                  <Link
                    className='font-semibold cursor-pointer text-kmc-orange'
                    to='/member'
                  >
                    Member Declaration Form.
                  </Link>
                </p>
              </Space>
              <EmailChecker />
            </Fragment>
          )}
          {showForm && pathState === FormState.Guest && (
            <Fragment>
              <Steps current={current} responsive>
                {steps.map((item, idx) => (
                  <Step key={idx} title={item.title} />
                ))}
              </Steps>
              <div className='steps-content'>{steps[current].content}</div>
              <div className='float-right steps-action'>
                {current < steps.length - 1 && (
                  <Button
                    className='w-28'
                    type='primary'
                    disabled={!authorized}
                    onClick={() => next()}
                  >
                    Next
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button type='primary'>Done</Button>
                )}
                {current > 0 && (
                  <Button className='ml-2 w-28' onClick={() => prev()}>
                    Previous
                  </Button>
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Guest;
