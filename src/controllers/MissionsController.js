import { Auth0Provider } from "@bcwdev/auth0provider";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";

export class MissionsController extends BaseController {
    constructor() {
        super('api/missions')
        this.router
            .get('', this.getMissions)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.postMission)
            .put('/:missionId', this.updateMission)
    }

    async getMissions(req, res, next) {
        try {
            const missions = await missionsService.getMissions(req.query)
            res.send(missions)
        } catch (error) {
            next(error)
        }
    }

    async postMission(req, res, next) {
        try {
            const mission = await missionsService.postMission(req.body)
            res.send(mission)
        } catch (error) {
            next(error)
        }
    }

    async updateMission(req, res, next) {
        try {
            const mission = await missionsService.updateMission(req.params.missionId, req.body)
            res.send(mission)
        } catch (error) {
            next(error)
        }
    }
}