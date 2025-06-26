import data from './products.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default defineEventHandler(async () => {
    await delay(2000);
    return data;
});