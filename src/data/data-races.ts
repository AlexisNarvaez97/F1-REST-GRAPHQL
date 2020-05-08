import { F1 } from './data-source';
import { checkYear, roundCheck } from '../lib/utils';

export class DataRaces extends F1 {

    constructor() {
        super();
    }

    async getYear(year: string) {
        year = checkYear(year);
        return await this.get(`${year}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

    async getYearByRound(year: string, round: number) {
        round = roundCheck(round);
        year = checkYear(year);
        return await this.get(`${year}/${round}.json`, {
            cacheOptions: { ttl: 60 }
        });
    }

}