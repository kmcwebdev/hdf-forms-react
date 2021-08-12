import Pdf from 'src/components/pdf';

const PdfResult: React.FC = () => {
  return (
    <div className='flex flex-col items-center p-4 md:p-10'>
      <div className='w-full space-y-4 md:w-2/3'>
        <Pdf />
      </div>
    </div>
  );
};

export default PdfResult;
