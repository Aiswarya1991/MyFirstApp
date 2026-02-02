import React, { createContext, useContext, useState } from 'react';

type AttendanceStatus =
  | 'IDLE'
  | 'CLOCKED_IN'
  | 'ON_BREAK'
  | 'CLOCKED_OUT';

interface AttendanceState {
  status: AttendanceStatus;
  clockInTime: number | null;
  clockOutTime: number | null;
  breakStart: number | null;
  totalBreakMinutes: number;
}

const AttendanceContext = createContext<any>(null);

export const AttendanceProvider = ({ children }: any) => {
  const [attendance, setAttendance] = useState<AttendanceState>({
    status: 'IDLE',
    clockInTime: null,
    clockOutTime: null,
    breakStart: null,
    totalBreakMinutes: 0,
  });

  const clockIn = () => {
  setAttendance({
    status: 'CLOCKED_IN',
    clockInTime: Date.now(),
    clockOutTime: null,
    breakStart: null,
    totalBreakMinutes: 0,
  });
};

  const startBreak = () => {
    setAttendance(prev => ({
      ...prev,
      status: 'ON_BREAK',
      breakStart: Date.now(),
    }));
  };

  const endBreak = () => {
    if (!attendance.breakStart) return;

    const breakMinutes = Math.floor(
      (Date.now() - attendance.breakStart) / 60000
    );

    setAttendance(prev => ({
      ...prev,
      status: 'CLOCKED_IN',
      breakStart: null,
      totalBreakMinutes:
        prev.totalBreakMinutes + breakMinutes,
    }));
  };

 const clockOut = () => {
  setAttendance(prev => ({
    ...prev,
    status: 'CLOCKED_OUT',
    clockOutTime: Date.now(),
  }));
};

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        clockIn,
        startBreak,
        endBreak,
        clockOut,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () =>
  useContext(AttendanceContext);
