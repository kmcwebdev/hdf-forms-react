/* eslint-disable react-hooks/exhaustive-deps */
import { RadioGroup } from '@headlessui/react';
import { Image } from 'antd';
import { useEffect, useState } from 'react';
import { useStore } from 'src/store';

const workType = [
  {
    id: 1,
    type: 'On site',
    imageUrl:
      'https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/onsite.svg',
  },
  {
    id: 2,
    type: 'Working from home',
    imageUrl:
      'https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/wfh.svg',
  },
  {
    id: 3,
    type: 'On leave',
    imageUrl:
      'https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/leave.svg',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const WorkType: React.FC = () => {
  const { workType: workTypePersistent, setWorkType } = useStore();
  const [selected, setSelected] = useState(workTypePersistent || workType[0]);

  useEffect(() => {
    setWorkType(selected);
  }, [selected]);

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className='sr-only'>Work types</RadioGroup.Label>
      <div className='space-y-4'>
        {workType.map((wkt) => (
          <RadioGroup.Option
            key={wkt.id}
            value={wkt}
            className={({ active }) =>
              classNames(
                active ? 'ring-1 ring-offset-2 ring-kmc-orange' : '',
                'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'
              )
            }
          >
            {({ checked }) => (
              <>
                <div className='flex items-center'>
                  <div className='text-sm'>
                    <RadioGroup.Label
                      as='p'
                      className='text-base font-medium text-gray-900'
                    >
                      {wkt.type}
                    </RadioGroup.Label>
                  </div>
                </div>
                <RadioGroup.Description
                  as='div'
                  className='flex mt-2 text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right'
                >
                  <Image
                    height={100}
                    width={100}
                    preview={false}
                    src={wkt.imageUrl}
                  />
                </RadioGroup.Description>
                <div
                  className={classNames(
                    checked ? 'border-kmc-orange' : 'border-transparent',
                    'absolute -inset-px rounded-lg border-2 pointer-events-none'
                  )}
                  aria-hidden='true'
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default WorkType;
