import { Checkbox, Radio, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Fragment } from 'react';
import { useQuery } from 'react-query';
import { QuestionAPI } from 'src/services/api/question.api';
import { useStore } from 'src/store';
import { Text } from './Text';

interface HealthDeclarationProps {
  step: number;
}

const HealthDeclaration: React.FC<HealthDeclarationProps> = ({ step }) => {
  const { symptoms, setSymptoms } = useStore();

  const { isLoading, data } = useQuery({
    queryKey: 'questions',
    queryFn: QuestionAPI.questions,
  });

  function symptomsOnChange(checkedValues: CheckboxValueType[]) {
    setSymptoms(checkedValues);
  }

  function HealthDeclarationOnChange(radioValues: RadioChangeEvent) {
    console.log(radioValues.target.value);
  }

  return (
    <Fragment>
      {step === 2 && (
        <Fragment>
          <div className='mb-5'>
            <Text className='text-base'>{data && data[0].question}</Text>
          </div>
          <Checkbox.Group
            className='flex flex-col gap-y-4'
            defaultValue={symptoms}
            onChange={symptomsOnChange}
          >
            {data &&
              data[0].answers.map(({ id, answer }) => (
                <div key={id}>
                  <Checkbox
                    value={answer}
                    disabled={
                      answer !== 'None of the above' &&
                      symptoms.includes('None of the above')
                    }
                  >
                    {answer}
                  </Checkbox>
                </div>
              ))}
          </Checkbox.Group>
        </Fragment>
      )}
      {step === 3 && (
        <div className='space-y-10'>
          <div>
            <div className='mb-5'>
              <Text className='text-base'>{data && data[1].question}</Text>
            </div>
            <Radio.Group
              onChange={HealthDeclarationOnChange}
              defaultValue='Yes'
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
              onChange={HealthDeclarationOnChange}
              defaultValue='Yes'
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
              onChange={HealthDeclarationOnChange}
              defaultValue='Yes'
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
    </Fragment>
  );
};

export default HealthDeclaration;
