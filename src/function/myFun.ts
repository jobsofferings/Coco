export const getMonthEng = (month: number) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month - 1];

/**
 * 只转正整数 < 100
 **/
export const formatTimeNum = (num: number) => (num <= 0 || num >= 100) ? '' : `${num >= 10 ? '' : '0'}${num}`;