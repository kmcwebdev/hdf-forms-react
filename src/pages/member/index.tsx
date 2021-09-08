import { Button, Form, message, Space, Steps } from 'antd';
import classnames from 'classnames';
import { Fragment, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import EmailChecker from 'src/components/Email-checker';
import HealthDeclaration from 'src/components/Health-declaration';
import PersonalInformation from 'src/components/Personal-information';
import { Text } from 'src/components/Text';
import VisitInformation from 'src/components/Visit-information';
import { MemberAPI } from 'src/services/api/member.api';
import { HttpError } from 'src/services/http.service';
import { useStore } from 'src/store';
import { ApiError } from 'src/utilities/api-error.utils';
import { FormState } from 'src/utilities/enum/form-state.enum';
import { PersonalInformation as IPersonalInformation } from 'src/utilities/interface/personal-information.interface';
import { VisitInformation as IVisitInformation } from 'src/utilities/interface/visit-information.interface';
import { sanitizeObjProperty } from 'src/utilities/sanitize-obj-property.utils';
import { useWindowSize } from 'src/utilities/use-window-size.utils';
import VisitStatus from './visit-status';
import WorkType from './work-type';

const { Step } = Steps;

const Member: React.FC = () => {
  const {
    email,
    personalInformation,
    setPersonalInformation,
    visitInformation,
    setVisitInformation,
    workType,
    symptoms,
    hdfQ2,
    hdfQ3,
    hdfQ4,
    authorized,
    showForm,
    setVisitId,
    form: pathState,
  } = useStore();
  const [form] = Form.useForm();
  const [current, setCurrent] = useState(0);
  const [stepsDone, setStepsDone] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);

  const { width } = useWindowSize();

  let btnLoadingTimeout = useRef<ReturnType<typeof setTimeout>>(
    setTimeout(() => null, 100)
  );

  const steps = [
    {
      title: <Text className='text-xs'>Personal details</Text>,
      content: <PersonalInformation form={form} />,
    },
    {
      title: <Text className='text-xs'>Work type</Text>,
      content: <WorkType />,
    },
    {
      title: <Text className='text-xs'>Visit details</Text>,
      content: <VisitInformation form={form} />,
    },
    {
      title: <Text className='text-xs'>Symptoms</Text>,
      content: <HealthDeclaration step={current} />,
    },
    {
      title: <Text className='text-xs'>Health declaration</Text>,
      content: <HealthDeclaration step={current} />,
    },
    {
      title: <Text className='text-xs'>Terms and condition</Text>,
      content: <HealthDeclaration step={current} />,
    },
  ];

  const { mutateAsync, isLoading: isLoadingCreateMemberVisit } = useMutation(
    MemberAPI.createVisit,
    {
      onSuccess: (data) => {
        if (Object.keys(data).length) {
          setResultLoading(true);
          setVisitId(data.visitId);
          btnLoadingTimeout.current = setTimeout(() => {
            setStepsDone(true);
          }, 2500);
        }
      },
      onError: (error: HttpError) => {
        message.error(ApiError(error));
      },
    }
  );

  async function next() {
    await form.validateFields();

    const values = await form.getFieldsValue();

    if (current === 0) {
      const data = values as IPersonalInformation;

      setPersonalInformation({ ...data, email: email! });
    }

    if (current === 2) {
      const data = values as IVisitInformation;

      setVisitInformation(data);
    }

    const step =
      workType?.type === 'Working from home' && current === 1 ? 2 : 1;

    setCurrent(current + step);
  }

  function prev() {
    const step =
      workType?.type === 'Working from home' && current === 3 ? 2 : 1;

    setCurrent(current - step);
  }

  // Manual!!!
  async function createMemberVisit() {
    const payload = sanitizeObjProperty({
      ...personalInformation,
      ...visitInformation,
      workTypeId: workType?.id,
      questions: [symptoms, hdfQ2, hdfQ3, hdfQ4],
      siteId:
        workType?.type === 'On site' ? visitInformation?.siteId : undefined,
      floorId:
        workType?.type === 'On site' ? visitInformation?.floorId : undefined,
      visitDate: undefined,
      authorized: undefined,
    });

    await mutateAsync(payload);
  }

  return (
    <div className='flex flex-col items-center p-4 md:p-10'>
      <div
        className={classnames('w-full space-y-4', {
          'md:w-2/3': showForm,
          'md:w-2/4': !showForm,
        })}
      >
        {stepsDone && <VisitStatus />}
        {!showForm && !stepsDone && (
          <Fragment>
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
          </Fragment>
        )}
        {showForm && pathState === FormState.Member && !stepsDone && (
          <Fragment>
            {width > 768 && (
              <Steps current={current} responsive>
                {steps.map((item, idx) => (
                  <Step key={idx} title={item.title} />
                ))}
              </Steps>
            )}
            <div>{steps[current].content}</div>
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
                <Button
                  type='primary'
                  loading={isLoadingCreateMemberVisit || resultLoading}
                  onClick={createMemberVisit}
                >
                  Submit
                </Button>
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
  );
};

export default Member;
