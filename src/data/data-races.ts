import { F1 } from './data-source';

export class DataRaces extends F1 {

    constructor() {
        super();
    }

    async getYear(year: string) {

        const currentYear = new Date().getFullYear();

        if ( isNaN(+year) || +year < 150 || +year > currentYear ) {
            year = String(currentYear);
        }

        return await this.get(`${year}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

}