import VolunteerRepo from '../repositories/VolunteerRepo.js';
import baseService from './baseService.js';

class VolunteerService extends baseService{
    constructor(repo){
        super(repo);
    }
    
    async add(data){
        try{
            let vol = await this.repo.add(data);
            return vol;
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to add volunteer.")
        }
    }
}
export default new VolunteerService(VolunteerRepo);