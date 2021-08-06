import { Form, FormInstance, Input, Select } from 'antd';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { LeaveTypeAPI } from 'src/services/api/leave-type.api';
import { SiteAPI } from 'src/services/api/site.api';
import { useStore } from 'src/store';
import { FormState } from 'src/utilities/enum/form-state.enum';
import { validateEmail } from 'src/utilities/validate-email.utils';

const { Option } = Select;

interface VisitInformationProps {
  form: FormInstance;
}

const VisitInformation: React.FC<VisitInformationProps> = ({ form }) => {
  const {
    form: pathState,
    workType,
    siteId,
    setSiteId,
    setFloorId,
  } = useStore();

  const NOT_WFH_OR_ON_LEAVE =
    workType?.type !== 'Working from home' && workType?.type !== 'On leave';

  const IS_ON_LEAVE = workType?.type === 'On leave';

  const { isLoading: isLoadingSites, data: sites } = useQuery({
    queryKey: 'sites',
    queryFn: SiteAPI.sites,
    enabled: NOT_WFH_OR_ON_LEAVE ? true : false,
  });

  const { isLoading: isLoadingFloors, data: floors } = useQuery({
    queryKey: ['floors', siteId],
    queryFn: () => SiteAPI.floors(siteId),
    enabled: NOT_WFH_OR_ON_LEAVE ? true : false,
  });

  const { isLoading: isLoadingLeaveTypes, data: leaveTypes } = useQuery({
    queryKey: 'leaveTypes',
    queryFn: LeaveTypeAPI.getLeaveTypes,
    enabled: IS_ON_LEAVE ? true : false,
  });

  return (
    <Form name='visit_information_form' form={form} layout='vertical'>
      {NOT_WFH_OR_ON_LEAVE && (
        <Fragment>
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
            rules={[
              { required: true, message: 'Please select a branch floor!' },
            ]}
          >
            <Select
              className='w-full'
              onChange={(_: number, options) => {
                const { value } = options as { value: number };

                setFloorId(value);
              }}
              loading={isLoadingFloors}
            >
              {floors?.map((data) => (
                <Option key={data.floorId} value={data.floorId}>
                  {data.floor}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Fragment>
      )}
      {IS_ON_LEAVE && (
        <Form.Item
          label='Leave type'
          name='leaveTypeId'
          rules={[{ required: true, message: 'Please select a leave type!' }]}
        >
          <Select className='w-full' loading={isLoadingLeaveTypes}>
            {leaveTypes?.map((leave) => (
              <Option key={leave.id} value={leave.id}>
                {leave.type}
              </Option>
            ))}
          </Select>
        </Form.Item>
      )}
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
              () => ({
                validator(_, value) {
                  if (!value || validateEmail(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Please input a valid email!')
                  );
                },
              }),
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
