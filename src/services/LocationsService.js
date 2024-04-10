import { dbContext } from "../db/DbContext.js"

class LocationsService {
    async getLocations(query) {
        const locations = await dbContext.Locations.find(query)
        return locations
    }
}

export const locactionsService = new LocationsService()