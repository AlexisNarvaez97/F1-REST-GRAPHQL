import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location
    },
    Location: {
        lng: parent => parent.long
    }
};

export default type;