/*
    Вычислить сумму всех чисел от 1 до заданного числа (например 100000000 => 1 + 2 + 4 + .....100000000).
    Вывести результат в консоль
    Число кратно тысячи
    Метод Гауса использовать нельзя)
*/

const sum = (end: number): void => {
    (async () => {
        let sumPart = async (start: number, end: number): Promise<number> => {
            let total = 0;
            for (let i = start; i <= end; i++) {
                total += i;
            }
            return total;
        };

        let promises: Promise<number>[] = [];
        const chunkSize = 1000;

        for (let i = 1; i <= end; i += chunkSize) {
            let start = i;
            let partEnd = Math.min(i + chunkSize - 1, end);
            promises.push(sumPart(start, partEnd));
        }

        const results = await Promise.all(promises);
        const totalSum = results.reduce((acc, curr) => acc + curr, 0);

        console.log(totalSum);
    })();
};


sum(100000000);