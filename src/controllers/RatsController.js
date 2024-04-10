import { missionsService } from "../services/MissionsService.js";
import { ratsService } from "../services/RatsService.js";
import BaseController from "../utils/BaseController.js";

export class RatsController extends BaseController {
    constructor() {
        super('api/rats')
        this.router
            .get('', this.getRats)
            .get('/:ratId/missions', this.getMissionsFromRat)
    }

    async getRats(req, res, next) {
        try {
            const rats = await ratsService.getRats(req.query)
            res.send(rats)
        } catch (error) {
            next(error)
        }
    }

    async getMissionsFromRat(req, res, next) {
        try {
            const missions = await missionsService.getMissionsFromRat(req.params.ratId)
            res.send(missions)
        } catch (error) {
            next(error)
        }
    }
}