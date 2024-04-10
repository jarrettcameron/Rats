import { locactionsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
    constructor() {
        super('api/locations')
        this.router
            .get('', this.getLocations)
            .get('/:locationId/missions', this.getMissionsFromLocation)
    }

    async getMissionsFromLocation(req, res, next) {
        try {
            const missions = await missionsService.getMissionsFromLocation(req.params.locationId)
            res.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async getLocations(req, res, next) {
        try {
            const locations = await locactionsService.getLocations(req.query)
            res.send(locations)
        } catch (error) {
            next(error)
        }
    }
}