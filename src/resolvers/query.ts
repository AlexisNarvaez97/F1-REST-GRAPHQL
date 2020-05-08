import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonList(_: void, __: any, { dataSources }) {
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, { year }, { dataSources }) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },
        async raceSelect(_:void, { year, round }, { dataSources }) {
            return await dataSources.races.getYearByRound(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );            
        },
        async historyDrivers(_: void, { pageElements, page }, { dataSources }) {
            return await dataSources.drivers.getDrivers(pageElements, page).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYear(_: void, { year }, { dataSources }) {
            return await dataSources.drivers.getYearDrivers(year).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driversYearAndRound(_: void, { year, round }, { dataSources} ) {
            return await dataSources.drivers.driversYearAndRound(year, round).then(
                (data: any) => data.MRData.DriverTable.Drivers
            );
        },
        async driverSelect(_: void, { id }, { dataSources}) {
            return await dataSources.drivers.driverId(id).then(
                (data: any) => data.MRData.DriverTable.Drivers[0]
            );
        },
        async seasonsPilotsRanking(_:void, { year } , { dataSources }) {
            return await dataSources.drivers.seasonsPilot(year).then(
                (data: any) => data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            );
        },
        async circuitList(_: void, { pageElements, page }, { dataSources }) {
            return await dataSources.circuits.getCircuits(pageElements, page).then(
                (data: any) => data.MRData.CircuitTable.Circuits
            );
        }
    }
};

export default query;