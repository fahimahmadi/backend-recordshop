import { db, reqCounter } from '../data/config.js';

//custom middleware
export const incReqCounter = async (req, res, next) => {
    reqCounter.val += 1;
    await db.write();

    //jump to next mw or controller
    next()
}