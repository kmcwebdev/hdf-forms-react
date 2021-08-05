import { Checkbox, Radio, RadioChangeEvent, Skeleton } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { QuestionAPI } from 'src/services/api/question.api';
import { useStore } from 'src/store';
import { FormState } from 'src/utilities/enum/form-state.enum';
import { Text } from './Text';

interface HealthDeclarationProps {
  step: number;
}

const HealthDeclaration: React.FC<HealthDeclarationProps> = ({ step }) => {
  const {
    form,
    symptoms,
    setSymptoms,
    hdfQ2,
    setHdfQ2,
    hdfQ3,
    setHdfQ3,
    hdfQ4,
    setHdfQ4,
  } = useStore();

  //Manual fixed
  let SYMPTOMS = 2;
  let HEALTH_DEC = 3;
  let T_AND_C = 4;

  if (form === FormState.Member) {
    SYMPTOMS = 3;
    HEALTH_DEC = 4;
    T_AND_C = 5;
  }

  const { isLoading, data } = useQuery({
    queryKey: 'questions',
    queryFn: QuestionAPI.questions,
  });

  function symptomsOnChange(checkedValues: CheckboxValueType[]) {
    setSymptoms({ questionId: 1, answers: checkedValues });
  }

  function HealthDeclarationOnChangeQ2(radioValues: RadioChangeEvent) {
    setHdfQ2({ questionId: 2, answers: [radioValues.target.value] });
  }

  function HealthDeclarationOnChangeQ3(radioValues: RadioChangeEvent) {
    setHdfQ3({ questionId: 3, answers: [radioValues.target.value] });
  }

  function HealthDeclarationOnChangeQ4(radioValues: RadioChangeEvent) {
    setHdfQ4({ questionId: 4, answers: [radioValues.target.value] });
  }

  return (
    <Skeleton loading={isLoading}>
      {step === SYMPTOMS && (
        <Fragment>
          <div className='mb-5'>
            <Text className='text-base'>{data && data[0].question}</Text>
          </div>
          <Checkbox.Group
            className='flex flex-col gap-y-4'
            defaultValue={symptoms.answers}
            onChange={symptomsOnChange}
          >
            {data &&
              data[0].answers.map(({ id, answer }) => (
                <div key={id}>
                  <Checkbox
                    value={answer}
                    disabled={
                      answer !== 'None of the above' &&
                      symptoms.answers.includes('None of the above')
                    }
                  >
                    {answer}
                  </Checkbox>
                </div>
              ))}
          </Checkbox.Group>
        </Fragment>
      )}
      {step === HEALTH_DEC && (
        <div className='space-y-10'>
          <div>
            <div className='mb-5'>
              <Text className='text-base'>{data && data[1].question}</Text>
            </div>
            <Radio.Group
              onChange={HealthDeclarationOnChangeQ2}
              defaultValue={hdfQ2.answers[0]}
            >
              {data &&
                data[1].answers.map(({ id, answer }) => (
                  <Radio key={id} value={answer}>
                    {answer}
                  </Radio>
                ))}
            </Radio.Group>
          </div>
          <div>
            <div className='mb-5'>
              <Text className='text-base'>{data && data[2].question}</Text>
            </div>
            <Radio.Group
              onChange={HealthDeclarationOnChangeQ3}
              defaultValue={hdfQ3.answers[0]}
            >
              {data &&
                data[2].answers.map(({ id, answer }) => (
                  <Radio key={id} value={answer}>
                    {answer}
                  </Radio>
                ))}
            </Radio.Group>
          </div>
          <div>
            <div className='mb-5'>
              <Text className='text-base'>{data && data[3].question}</Text>
            </div>
            <Radio.Group
              onChange={HealthDeclarationOnChangeQ4}
              defaultValue={hdfQ4.answers[0]}
            >
              {data &&
                data[3].answers.map(({ id, answer }) => (
                  <Radio key={id} value={answer}>
                    {answer}
                  </Radio>
                ))}
            </Radio.Group>
          </div>
        </div>
      )}
      {step === T_AND_C && (
        <div className='space-y-6'>
          {form === FormState.Guest && (
            <p className='text-base font-medium text-justify'>
              All visitor requests are subject for approval by the person in
              charge of the visit. Failure to receive a response will be
              considered as invalid.
            </p>
          )}
          <p className='text-base font-medium text-justify'>
            If you answer "NO" to all of the above, you warrant that you do not
            suffer from any COVID-19 symptoms nor have any reasonable belief of
            contracting COVID-19 based on your current social activities. Such
            warranty shall be the basis for your entry within the facility and
            the same shall be used against you in case of misdeclaration.
          </p>
        </div>
      )}
    </Skeleton>
  );
};

export default HealthDeclaration;
