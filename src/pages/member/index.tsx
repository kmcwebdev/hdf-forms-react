import { Space } from 'antd';
import EmailChecker from 'src/components/Email-checker';
import { Text } from 'src/components/Text';

const Member: React.FC = () => {
  return (
    <div className='flex flex-col items-center p-4 md:p-10'>
      <div className='w-full space-y-4 md:w-2/4'>
        <Text className='text-2xl font-bold text-kmc-orange'>
          Member Health Declaration
        </Text>
        <Space direction='vertical'>
          <p className='text-justify'>
            In light of the recent news concerning the COVID-19 virus, KMC
            Solutions will be taking further additional steps to ensure the
            safety and health of the KMC Community.
          </p>
          <Text className='font-semibold'>
            Please use your corporate email address.
          </Text>
        </Space>
        <EmailChecker />
      </div>
    </div>
  );
};

export default Member;
