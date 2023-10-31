import React, { useEffect, useState } from 'react';
import Alerts from './alertslayout';
import Schedules from './schedulelayout';
import images from '../../constant/images';
import alertsData from '../../constant/alertsdata';
import scheduleData from '../../constant/shceduledata';

function Sidebar() {
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsBottomSheetVisible(true);
      } else {
        setIsBottomSheetVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);


    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div>
      {isBottomSheetVisible ? (

        <div className='fixed pl-4 h-96 bottom-0 left-0 right-0 bg-white' style={{ zIndex: 1500 }}>
              <p className="text-2xl pt-5">Active Alerts and Schedules</p>
               <div className="fixed h-80 mt-2 left-0 right-0 bg-white border-gray-300 p-2 overflow-x-auto custom-scrollbar" >
                    <div style={{ display: 'grid', gridGap: 270, gridAutoFlow: 'column', marginRight: 360}}>
                            {alertsData.map((alert) => (
                                <Alerts
                                alertTitle={alert.alertTitle}
                                note = {alert.note}
                                src = {alert.src}
                                location={alert.location}
                                distance={alert.distance} />
                            ))} 
                        </div>
                        
                        <div className ='mt-36' style={{ display: 'grid', gridGap: 270, gridAutoFlow: 'column', marginRight: 360}}>
                            {scheduleData.map((schedule) => (
                              <Schedules
                              scheduleTitle={schedule.scheduleTitle}
                              clock={schedule.clock}
                              listAlerts={schedule.listAlerts}
                              calendar={schedule.calendar}
                              alarmIc={schedule.alarmIc}
                              time={schedule.time}
                              repeat={schedule.repeat} />

                          ))}
                        </div>




                    </div>
                    
                  </div>
                ) : (
                  <div className="text-left w-80 bg-white h-screen overflow-y-auto custom-scrollbar">
                    <div className="p-7">
                      <p className="text-2xl pt-2">Active Alerts</p>
                      {alertsData.map((alert) => (
                          <Alerts
                           alertTitle={alert.alertTitle}
                           note = {alert.note}
                           src = {alert.src}
                           location={alert.location}
                           distance={alert.distance}/>

                      ))}
                    </div>

                    <div className="p-7">
                      <p className="text-2xl">Scheduled Alerts</p>
                      <Schedules
                        scheduleTitle="Alert#1"
                        clock={images.clock}
                        listAlerts="School, Work, Office"
                        calendar={images.calendar}
                        alarmIc={images.alarmm}
                        time="3:40pm"
                        repeat="sun, mon, tue"
                      />
                    </div>
                  </div>
                )}
    </div>
  );
}

export default Sidebar;
