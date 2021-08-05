/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Image, Space } from 'antd';
import { useEffect } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import { Link, Text } from 'src/components/Text';
import { useStore } from 'src/store';

const VisitStatus: React.FC = () => {
  const {
    setForm,
    setShowForm,
    setEmail,
    setPersonalInformation,
    setAuthorized,
    setVisitInformation,
  } = useStore();

  useEffect(() => {
    return () => {
      setForm(null);
      setShowForm(false);
      setEmail(null);
      setPersonalInformation(null);
      setAuthorized(false);
      setVisitInformation(null);
    };
  }, []);

  return (
    <div className='space-y-6'>
      <div className='flex justify-center'>
        <Image
          height={300}
          width={300}
          src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/face-mask-shield.jpeg'
          preview={false}
        />
      </div>
      <p className='font-medium text-center'>
        We have sent an approval request to the person you are visiting! Kindly
        check your email for the confirmation of your visit.
      </p>
      <Space direction='vertical'>
        <p className='text-justify'>
          For purposes of going out of their homes for acquiring essential goods
          or services or other allowed essential purposes, Taguig residents may
          use their Taguig Unified Quarantine Pass (UQP) or any valid government
          issued ID indicating their place of residence.
        </p>
        <p className='text-justify'>
          Taguig T.R.A.C.E is a QR Code based COVID-19 contact tracing solution.
          It is a web-based solution which allows individuals to log their basic
          personal information upon registration.
        </p>
        <Text>
          Please visit 
          <Link href='https://trace.taguig.gov.ph/' target='_blank'>
            https://trace.taguig.gov.ph/
          </Link>
           to get a copy of your QR Code.
        </Text>
      </Space>
      <div className='flex justify-center'>
        <ReactRouterDomLink to='/home'>
          <Button>Home</Button>
        </ReactRouterDomLink>
      </div>
    </div>
  );
};

export default VisitStatus;
