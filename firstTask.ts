/*
    Дан массив длинной равной кол-ву дней недели.
    Элемент массива равный 1 в таком массиве означает, что некое событие в этот день произойдет, 0 - день без события
    Вычислить кратчайшее растояние м/у событиями.(две единицы подряд - один день, 101 - два дня, все нули - null)
    Вывести в консоль
*/

const calculateGap = (schedule: Array<0 | 1>): void => {
    let minGap: number | null = null;
    let eventDays: number[] = [];

    // Собираем индексы дней с событиями
    schedule.forEach((day, index) => {
        if (day === 1) eventDays.push(index);
    });

    // Если все нули
    if (eventDays.length === 0) {
        console.log(null);
        return;
    } else if (eventDays.length === 1) {
        // Если только одно событие в неделю
        console.log(7);
        return;
    }

    for (let i = 0; i < eventDays.length; i++) {
        let gap = null;
        if (i < eventDays.length - 1) {
            // Обычный промежуток
            gap = eventDays[i + 1] - eventDays[i];
        } else {
            // Циклический промежуток между последним и первым событиями
            gap = schedule.length - eventDays[i] + eventDays[0];
        }

        if (minGap === null || gap < minGap) {
            //console.log(minGap);
            minGap = gap;
        }
    }

    console.log(minGap);

}

calculateGap([1, 0, 0, 0, 0, 1, 0]);