import { Form, FormInstance, Input, Select } from 'antd';
import { Fragment, useState } from 'react';
import { useQuery } from 'react-query';
import { SiteAPI } from 'src/services/api/site.api';
import { useStore } from 'src/store';
import { FormState } from 'src/utilities/enum/form-state.enum';

const { Option } = Select;

interface VisitInformationProps {
  form: FormInstance;
}

const VisitInformation: React.FC<VisitInformationProps> = ({ form }) => {
  const [siteId, setSiteId] = useState<number>(0);
  const { form: pathState } = useStore();

  const { isLoading: isLoadingSites, data: sites } = useQuery({
    queryKey: 'sites',
    queryFn: SiteAPI.sites,
  });

  const { isLoading: isLoadingFloors, data: floors } = useQuery({
    queryKey: ['floors', siteId],
    queryFn: () => SiteAPI.floors(siteId),
    enabled: siteId ? true : false,
  });

  return (
    <Form name='visit_information_form' form={form} layout='vertical'>
      <Form.Item
        label='KMC branch'
        name='siteId'
        rules={[{ required: true, message: 'Please select a KMC branch!' }]}
      >
        <Select
          className='w-full'
          onChange={(_: number, options) => {
            const { value } = options as { value: number };

            setSiteId(value);
          }}
          loading={isLoadingSites}
        >
          {sites?.map((site) => (
            <Option key={site.siteId} value={site.siteId}>
              {site.siteName}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label='Floor'
        name='floorId'
        rules={[{ required: true, message: 'Please select a branch floor!' }]}
      >
        <Select className='w-full' loading={isLoadingFloors}>
          {floors?.map((data) => (
            <Option key={data.floorId} value={data.floorId}>
              {data.floor}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {pathState === FormState.Guest && (
        <Fragment>
          <Form.Item
            label='Full name of person being visited'
            name='poc'
            rules={[
              { required: true, message: 'Please input the name of poc!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Email address of person being visited'
            name='pocEmail'
            rules={[
              { required: true, message: 'Please input the email of poc!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Purpose of visit'
            name='purposeOfVisit'
            rules={[
              { required: true, message: 'Please input purpose of visit!' },
            ]}
          >
            <Input />
          </Form.Item>
        </Fragment>
      )}
    </Form>
  );
};

export default VisitInformation;