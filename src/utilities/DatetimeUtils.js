import { MONTHS, DAYS } from './DateConstants';

export function getWeekDays() {
  const dayInAWeek = new Date().getDay();
  const days = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );
  return days;
}

export function getDayMonthFromDate() {
  const date = new Date();
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getUTCDate();

  return day + ' ' + month;
}

export function transformDateFormat() {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Kolkata' });
  const day = date.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Kolkata' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata'
  });

  const newFormatDate = `${year}-${month}-${day} ${time}`;
  return newFormatDate;
}

export function getUTCDatetime() {
  const date = new Date();
  const istTime = date.toLocaleString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata',
  });

  const isoDateString = date.toISOString();
  const istDate = `${isoDateString.split('T')[0]} ${istTime}`;
  return istDate;
}

export function getUTCTime() {
  const date = new Date();
  const istTime = date.toLocaleString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Kolkata',
  });

  return istTime;
}
