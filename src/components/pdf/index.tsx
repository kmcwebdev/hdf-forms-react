import { Image, Space } from 'antd';
import { format } from 'date-fns';
import { Link, Text } from '../Text';

const Pdf: React.FC = () => {
  return (
    <div className='space-y-6'>
      <Space direction='vertical'>
        <Image
          width={248}
          height={64}
          preview={false}
          src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/kmc-logo-2018.png'
        />
        <Text className='text-lg font-bold'>
          {'Member'} Declaration Form - COVID-19
        </Text>
        <p className='text-xs text-justify'>
          In light of the recent news concerning the COVID-19 virus, KMC
          Solutions will be taking further additional steps to ensure the safety
          and health of the KMC Community. Kindly fill out our self-declaration
          form for visitors and members to declare recent travel and health
          status. For our Privacy Policy Statement, please click the link -
          https://kmc.solutions/privacy-policy/ I hereby authorize KMC Solutions
          to collect and process the data indicated herein for the purpose of
          effecting control of the COVID-19 infection. I understand that my
          personal information is protected by RA 10173, Data Privacy Act of
          2012, and that I am required by RA 11469, Bayanihan to Heal as One
          Act, to provide truthful information.
        </p>
      </Space>
      <Space className='p-6 border border-black' direction='vertical'>
        <p className='text-xs text-justify'>
          For purposes of going out of their homes for acquiring essential goods
          or services or other allowed essential purposes, Taguig residents may
          use their Taguig Unified Quarantine Pass (UQP) or any valid government
          issued ID indicating their place of residence.
        </p>
        <p className='text-xs text-justify'>
          Taguig T.R.A.C.E is a QR Code based COVID-19 contact tracing solution.
          It is a web-based solution which allows individuals to log their basic
          personal information upon registration.
        </p>
        <p className='text-xs text-justify'>
          Please visit{' '}
          <Link
            className='font-bold'
            href='https://trace.taguig.gov.ph'
            target='_blank'
          >
            https://trace.taguig.gov.ph
          </Link>{' '}
          to get a copy of your QR Code.
        </p>
      </Space>
      <Space direction='vertical'>
        <Text>
          Site: <Text className='font-bold'>PICADILLY 20F</Text>
        </Text>
        <Text>
          Date of Visit:{' '}
          <Text className='font-bold'>
            {format(new Date(), 'eeee, MMMM dd, yyyy')}{' '}
            {format(new Date(), 'hh:mm a')}
          </Text>
        </Text>
        <Text>
          Status: <Text className='font-bold text-red-500'>CLEAR</Text>
        </Text>
        <Text>
          Full Name: <Text className='font-bold'>Christian Angelo M Sulit</Text>
        </Text>
        <Text>
          Email:{' '}
          <Text className='font-bold'>christian.sulit@kmc.solutions</Text>
        </Text>
        <Text>
          Company: <Text className='font-bold'>KMC COMMUNITY, INC.</Text>
        </Text>
        <Text>
          Current Address:{' '}
          <Text className='font-bold'>
            4295 Montojo Street Barangay Santa Cruz Makati City
          </Text>
        </Text>
        <Text>
          Travel History Outside Current Residency:{' '}
          <Text className='font-bold'>N/A</Text>
        </Text>
      </Space>
      <Space direction='vertical'>
        <Space>
          <Text className='text-base font-bold'>Health Information</Text>
        </Space>
        <Text>
          1.) Have you experienced any of the following symptoms in the past 10
          days?: <Text className='font-bold'>None of the above</Text>
        </Text>
        <Text>
          2.) Have you had face-to-face contact with a probable or confirmed
          COVID-19 for the past 14 days?: <Text className='font-bold'>NO</Text>
        </Text>
        <Text>
          3.) Have you provided direct care for a patient with a probable or
          confirmed COVID-19 case for the past 14 days?:{' '}
          <Text className='font-bold'>NO</Text>
        </Text>
        <Text>
          4.) Have you travelled outside the Philippines in the last 14 days?:{' '}
          <Text className='font-bold'>NO</Text>
        </Text>
      </Space>
      <p className='text-xs text-justify'>
        If you answer “no” to all of the above, you warrant that you do not
        suffer from any COVID-19 symptoms nor have any reasonable belief of
        contracting COVID-19 based on your current social activities. Such
        warranty shall be the basis for your entry within the facility and the
        same shall be used against you in case of misdeclaration.
      </p>
    </div>
  );
};

export default Pdf;
