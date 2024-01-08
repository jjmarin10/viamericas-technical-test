export const differenceDaysBetweenDates =  (date1, date2) => {
    const diffTime = (date2 - date1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}

export const calculatePercentaje =  (luggageValue: number) => {
    return (50 /100) * luggageValue; 
}

export const parseToDate = (string: string | number | Date) => new Date(string);

