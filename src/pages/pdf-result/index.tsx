import { message } from 'antd';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import LazyLoad from 'src/components/Lazy-load';
import Pdf from 'src/components/pdf';
import { VisitorAPI } from 'src/services/api/visitor.api';
import { HttpError } from 'src/services/http.service';
import { ApiError } from 'src/utilities/api-error.utils';
import { useQueryParams } from 'src/utilities/use-query-param.utils';

const PdfResult: React.FC = () => {
  const visitId = useQueryParams().get('visitId');

  const { isLoading, data, error, isError } = useQuery({
    queryKey: 'currentVisit',
    queryFn: () => VisitorAPI.currentVisit(visitId!),
    enabled: visitId ? true : false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className='h-screen'>
        <LazyLoad fullHeight />
      </div>
    );
  }

  if (isError) {
    message.error(ApiError(error as HttpError));
  }

  if (!visitId) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='flex flex-col items-center p-4 md:p-10'>
      <div className='w-full space-y-4 md:w-2/3'>
        <Pdf data={data} />
      </div>
    </div>
  );
};

export default PdfResult;
