import React, { useEffect, useState } from 'react';

const ScheduleLayout = ({ scheduleTitle, repeat, clock, calendar, listAlerts, alarmIc, time }) => {
  const repeatText = repeat.length > 10 ? repeat.slice(0, 10) + '...' : repeat;
  const listLimits = listAlerts.length > 19 ? listAlerts.slice(0, 19) + '...' : listAlerts;

  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setIsBottomSheetVisible(true);
      } else {
        setIsBottomSheetVisible(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div>
      {isBottomSheetVisible ? (
        <div className="absolute h-32 w-64 radiu pr" style={{ backgroundColor: '#F3F3F3', borderRadius: '10px'}}>
          <div className="flex">
            <div className='ml-5'>
              <p className='mt-4 text-xl'>{scheduleTitle}</p>
            </div>

            <div className="flex" style={{ marginTop: '45px', marginLeft: '130px', position: 'absolute' }}>
              <img className='p-1 w-11 h-11' src={alarmIc} alt={alarmIc} />
              <div className="text-lg" style={{ marginTop: '-20px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', textOverflow: 'ellipsis', maxWidth: '80px' }}>
                {listLimits}
              </div>
            </div>
          </div>
          <div className="flex ml-4" style={{ position: 'absolute', top: '45px', maxHeight: '40px', overflowY: 'auto' }}>
            <img className='p-1 w-9 h-9' src={clock} alt={clock} />
            <div>
              <p className='mt-2 text-sm text-gray-500' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {time}
              </p>
            </div>
          </div>
          <div className="flex ml-4" style={{ position: 'absolute', top: '78px' }}>
            <img className='p-1 w-9 h-9' src={calendar} alt={calendar} />
            <div>
              <p className='mt-2.5 text-sm text-gray-500' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {repeatText}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-32 w-74 radiu pr" style={{ backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
          <div className="flex mt-5">
            <div className='ml-5'>
              <p className='mt-4 text-xl'>{scheduleTitle}</p>
            </div>
  
            <div className="flex" style={{ marginTop: '45px', marginLeft: '130px', position: 'absolute' }}>
              <img className='p-1 w-11 h-11' src={alarmIc} alt={alarmIc} />
              <div className="text-lg" style={{ marginTop: '-20px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', textOverflow: 'ellipsis', maxWidth: '80px' }}>
                {listLimits}
              </div>
            </div>
          </div>
          <div className="flex ml-4" style={{ position: 'absolute', top: '45px', maxHeight: '40px', overflowY: 'auto' }}>
            <img className='p-1 w-9 h-9' src={clock} alt={clock} />
            <div>
              <p className='mt-2 text-sm text-gray-500' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {time}
              </p>
            </div>
          </div>
          <div className="flex ml-4" style={{ position: 'absolute', top: '78px' }}>
            <img className='p-1 w-9 h-9' src={calendar} alt={calendar} />
            <div>
              <p className='mt-2.5 text-sm text-gray-500' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {repeatText}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleLayout;
