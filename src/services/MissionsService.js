import { dbContext } from "../db/DbContext.js"

class MissionsService {

    async updateMission(missionId, missionBody) {
        const mission = await dbContext.Missions.findById(missionId)
        if (!mission) throw new Error("Mission with supplied ID could not be found.")


        mission.completed = missionBody.completed ?? mission.completed
        await mission.save()
        await mission.populate('location')
        await mission.populate('rat', '-name -picture')

        return mission
    }

    async getMissionsFromLocation(locationId) {
        const location = await dbContext.Locations.findById(locationId)
        if (!location) throw new Error("Location with supplied ID could not be found.")

        const missions = await dbContext.Missions.find({ locationId: locationId }).populate('location').populate('rat', '-name -picture')
        return missions
    }

    async getMissionsFromRat(ratId) {
        const rat = await dbContext.Rats.findById(ratId)
        if (!rat) throw new Error("Rat with supplied ID could not be found.")

        const missions = await dbContext.Missions.find({ ratId: ratId })
        return missions
    }

    async postMission(body) {
        const mission = await dbContext.Missions.create(body)
        await mission.populate('location')
        await mission.populate('rat', '-name -picture')
        return mission
    }

    async getMissions(query) {
        const missions = await dbContext.Missions.find(query).populate('location').populate('rat', '-name -picture')
        return missions
    }
}

export const missionsService = new MissionsService()