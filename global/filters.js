function byParams(filters) {
    let query = {}; 
    if (filters) {
        if (filters) {
            if (filters.location_descreption) { 
                query.location_descreption = new RegExp(filters.location_descreption, 'i'); 
        }

            if (filters.status_descreption) { 
            query.status_descreption = new RegExp(filters.status_descreption, 'i'); 
        }
            
            if (filters.priority_descreption) { 
            query.priority_descreption = new RegExp(filters.priority_descreption, 'i'); 
        }

    }

    const pipeline = [{ '$match': query }];
    return pipeline;
}}


function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export { byParams, byId }