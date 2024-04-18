import express from 'express';
import authenticate from './middleware/auth.js';
const router = express.Router();

import readData from '../readData.js';



router.get('/', authenticate, async (req, res) => {
    const getData = await readData();

    res.json({
        'msg': getData
    });
});

// router.get('/:id', (req, res) => {

// })

export default router;