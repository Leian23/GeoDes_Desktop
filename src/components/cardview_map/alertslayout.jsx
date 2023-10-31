import React, { useEffect, useState } from 'react';

const AlertsLayout = ({ src, alertTitle, note, location, distance }) => {
  // Add ellipsis if distance text is longer than 8 characters
  const distanceText = distance.length > 6 ? distance.slice(0, 6) + '...' : distance;
  const noteText = note.length > 35 ? note.slice(0, 35) + '...' : note;

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
    <div className="absolute h-28 w-64 mt-1 pr" style={{ backgroundColor: '#F3F3F3', borderRadius: '10px'}}>
    <div className="flex">
      <img className='p-1' src={src} alt={src} />
      <div>
        <p className='mt-4 text-xl'>{alertTitle}</p>
      </div>
    </div>

    <div style={{ marginTop: '-10px', maxWidth: '135px' }}>
      <p className='w-30 ml-5 text-sm italic text-gray-500' style={{ marginBottom: '-30px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
        {note.length > 0 ? noteText : "No notes"}
      </p>
    </div>

    <div className="flex ml-44" style = {{marginTop: -65}}>
      <div>
      <img className=' ml-3 w-7 h-9' src={location} alt={location} />
        <p className='text-lg' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {distanceText}
        </p>
      </div>
    </div>
  </div>
      ) : (
        <div className="relative h-32 mt-5 pr" style={{ maxWidth: 'px', backgroundColor: '#F3F3F3', borderRadius: '10px' }}>
          <div className="flex">
            <img className='p-1' src={src} alt={src} />
            <div>
              <p className='mt-4 text-xl'>{alertTitle}</p>
            </div>
          </div>

          <div className="flex ml-40">
            <img className='p-1 w-8 h-10' src={location} alt={location} />
            <div>
              <p className='mt-2 text-lg' style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {distanceText}
              </p>
            </div>
          </div>

          <div style={{ marginTop: '-50px', maxWidth: '135px' }}>
            <p className='w-30 ml-5 text-sm italic text-gray-500' style={{ marginBottom: '-30px', whiteSpace: 'pre-wrap', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
              {note.length > 0 ? noteText : "No notes"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertsLayout;
