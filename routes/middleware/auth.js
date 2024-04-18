import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.SUPER_SECRET_TOKEN

const authenticate = (req, res, next) => {
    const {authorization} = req.headers;
    if (authorization === secretKey) {
        next();
    } else
        res.status(401).send('Unauthorized');
};

export default authenticate;