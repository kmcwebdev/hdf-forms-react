/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Image } from 'antd';
import { useEffect } from 'react';
import { Link, Link as ReactRouterDomLink } from 'react-router-dom';
import { Text } from 'src/components/Text';
import { useStore } from 'src/store';

const VisitStatus: React.FC = () => {
  const {
    setForm,
    setShowForm,
    setEmail,
    setPersonalInformation,
    setWorkType,
    setAuthorized,
    setVisitInformation,
    visitId,
    setVisitId,
  } = useStore();

  useEffect(() => {
    return () => {
      setForm(null);
      setShowForm(false);
      setEmail(null);
      setPersonalInformation(null);
      setWorkType(null);
      setAuthorized(false);
      setVisitInformation(null);
      setVisitId(null);
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
      <div className='flex flex-col items-center justify-center gap-y-6'>
        <Text className='text-xl font-bold text-kmc-orange'>
          Wear your face mask and face shield at all times.
        </Text>
        <p className='text-center'>
          Please wear face masks and face shields at all times, practicing good
          hand and respiratory hygiene and maintained social distancing.
        </p>
        <p className='text-center'>
          Don't forget to submit your temperature upon entering the building by
          clicking the link sent to your email or by accessing it thru the
          button below.
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Link to={`/pdf-result?visitId=${visitId}`}>
            <Button className='w-48' type='primary'>
              DOWNLOAD RESULT
            </Button>
          </Link>
          <Button className='w-48' type='primary'>
            ADD YOUR TEMPERATURE
          </Button>
        </div>
        <Text>
          Email{' '}
          <Text className='cursor-pointer text-kmc-orange'>
            health@kmc.solutions
          </Text>
           for any health or covid-related inquiries.
        </Text>
      </div>
      <div className='flex justify-center'>
        <ReactRouterDomLink to='/home'>
          <Button>Home</Button>
        </ReactRouterDomLink>
      </div>
    </div>
  );
};

export default VisitStatus;
