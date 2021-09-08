import { Image, Space } from 'antd';
import { format } from 'date-fns';
import { Fragment } from 'react';
import { CurrentVisit } from 'src/utilities/interface/current-visit.interface';
import Result from '../Result';
import { Link, Text } from '../Text';

interface PdfProps {
  data: CurrentVisit | undefined;
}

const Pdf: React.FC<PdfProps> = ({ data }) => {
  return (
    <div className='space-y-6'>
      {Object.keys(data!).length < 1 && (
        <Result
          status='404'
          title='Not Found'
          subTitle='Visit information not found.'
        />
      )}
      {data && Object.keys(data).length > 0 && (
        <Fragment>
          <Space direction='vertical'>
            <Image
              width={248}
              height={64}
              preview={false}
              src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/kmc-logo-2018.png'
            />
            <Text className='text-lg font-bold'>
              {data.guest ? 'Guest' : 'Member'} Declaration Form - COVID-19
            </Text>
            <p className='text-xs text-justify'>
              In light of the recent news concerning the COVID-19 virus, KMC
              Solutions will be taking further additional steps to ensure the
              safety and health of the KMC Community. Kindly fill out our
              self-declaration form for visitors and members to declare recent
              travel and health status. For our Privacy Policy Statement, please
              click the link - https://kmc.solutions/privacy-policy/ I hereby
              authorize KMC Solutions to collect and process the data indicated
              herein for the purpose of effecting control of the COVID-19
              infection. I understand that my personal information is protected
              by RA 10173, Data Privacy Act of 2012, and that I am required by
              RA 11469, Bayanihan to Heal as One Act, to provide truthful
              information.
            </p>
          </Space>
          <Space className='p-6 border border-black' direction='vertical'>
            <p className='text-xs text-justify'>
              For purposes of going out of their homes for acquiring essential
              goods or services or other allowed essential purposes, Taguig
              residents may use their Taguig Unified Quarantine Pass (UQP) or
              any valid government issued ID indicating their place of
              residence.
            </p>
            <p className='text-xs text-justify'>
              Taguig T.R.A.C.E is a QR Code based COVID-19 contact tracing
              solution. It is a web-based solution which allows individuals to
              log their basic personal information upon registration.
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
            {(data.workType?.type === 'On site' || data.guest) && (
              <Fragment>
                <Text>
                  Site:{' '}
                  <Text className='font-bold'>
                    {data.site.siteName} {data.floor.floor}
                  </Text>
                </Text>
                <Text>
                  Date of Visit:{' '}
                  <Text className='font-bold'>
                    {format(new Date(), 'eeee, MMMM dd, yyyy')}
                  </Text>
                </Text>
              </Fragment>
            )}
            <Text>
              Status:{' '}
              <Text className='font-bold text-red-500'>
                {data.visitorStatus.isClear ? 'CLEAR' : 'NEEDS ATTENTION'}
              </Text>
            </Text>
            <Text>
              Full Name:{' '}
              <Text className='font-bold'>
                {data.visitor.firstName} {data.visitor.lastName}
              </Text>
            </Text>
            <Text>
              Email: <Text className='font-bold'>{data.visitor.email}</Text>
            </Text>
            <Text>
              Company: <Text className='font-bold'>{data.visitor.company}</Text>
            </Text>
            <Text>
              Current Address:{' '}
              <Text className='font-bold'>{data.visitor.address}</Text>
            </Text>
            {data.guest && (
              <Fragment>
                <Text>
                  Contact Name: <Text className='font-bold'>{data.poc}</Text>
                </Text>
                <Text>
                  Contact Email:{' '}
                  <Text className='font-bold'>{data.pocEmail}</Text>
                </Text>
                <Text>
                  Purpose Of Visit:{' '}
                  <Text className='font-bold'>{data.purposeOfVisit}</Text>
                </Text>
              </Fragment>
            )}
            <Text>
              Travel History Outside Current Residency:{' '}
              <Text className='font-bold'>
                {data.travelLocations.length ? data.travelLocations : 'N/A'}
              </Text>
            </Text>
          </Space>
          <Space className='ml-0 md:ml-6' direction='vertical'>
            <Space>
              <Text className='text-base font-bold'>Health Information</Text>
            </Space>
            <Text>
              1. Have you experienced any of the following symptoms in the past
              10 days?:{' '}
              <Text className='font-bold'>{data.surveys[0].answers}</Text>
            </Text>
            <Text>
              2. Have you had face-to-face contact with a probable or confirmed
              COVID-19 for the past 14 days?:{' '}
              <Text className='font-bold'>{data.surveys[1].answers}</Text>
            </Text>
            <Text>
              3. Have you provided direct care for a patient with a probable or
              confirmed COVID-19 case for the past 14 days?:{' '}
              <Text className='font-bold'>{data.surveys[2].answers}</Text>
            </Text>
            <Text>
              4. Have you travelled outside the Philippines in the last 14
              days?:{' '}
              <Text className='font-bold'>{data.surveys[3].answers}</Text>
            </Text>
          </Space>
          <p className='text-xs text-justify'>
            If you answer “no” to all of the above, you warrant that you do not
            suffer from any COVID-19 symptoms nor have any reasonable belief of
            contracting COVID-19 based on your current social activities. Such
            warranty shall be the basis for your entry within the facility and
            the same shall be used against you in case of misdeclaration.
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default Pdf;
