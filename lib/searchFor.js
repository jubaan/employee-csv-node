export default function searchFor(query, list) {
    if (query.length < 1) return list;

    let output = {};

    list.forEach((employee) => {
        for (let prop in employee) {

            if (employee[prop] === query[0]) {
                if (query.length === 1) return output = employee;

                query.forEach((attribute) => {
                    output[prop] = employee[prop];

                    for (let prop in employee) {
                        if (prop === attribute) {
                           output[prop] = employee[prop];
                        }
                    }
                })
            }
        }
    })

    return output;
};
