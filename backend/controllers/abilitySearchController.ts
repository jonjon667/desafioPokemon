import SkillSearchService from "../services/skillSearchService";

export async function searchAbilityDetailById(req, res) {
    const service = new SkillSearchService();
    console.log(req.params.id);
    try {
        let skill = await service.searchSkillDetail(req.params.id);
        return res.json(skill);
    } catch (error: any) {
        console.log(error);
        return res.status(500).send(error);
    }

}
