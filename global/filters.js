function byParams(filters) {
    let query = { status: new RegExp('w', 'i') };
    let locationFilter = [];
    if (filters) {
        if (filters.status) {
            query.status = new RegExp(filters.status, 'i');
        }

        if (filters.location) {
            query.location = new RegExp(filters.status, 'i');
        }
    }
    const pipeline = [{ '$match': query }]
    if (locationFilter.length > 0) {
        pipeline.push({ '$match': { '$or': locationFilter } });
    }
    return pipeline;
}

function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export { byParams, byId }