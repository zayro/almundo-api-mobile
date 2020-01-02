import { message } from '../utils/tools'

export function validateQuery(fields) {

    return (req, res, next) => {

        for(const field of fields) {
            if(!req.query[field]) { // Field isn't present, end request
                return res.status(400).json(message(false, `${field} is missing`, "" ));
            }
        }

        next(); // All fields are present, proceed

    };

}

export function validateBody(fields) {

    return (req, res, next) => {

        for(const field of fields) {
            if(!req.body[field]) { // Field isn't present, end request
                return res.status(400).json(message(false, `${field} is missing`, "" ));
            }
        }

        next(); // All fields are present, proceed

    };

}