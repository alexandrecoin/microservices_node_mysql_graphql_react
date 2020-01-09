import { User } from '#root/db/models';
import generateUuid from '#root/helpers/generateUuid';
import hashPassword from '#root/helpers/hashPassword';

const setupRoutes = (app) => {
  app.post('/users', async (req, res, next) => {
    if (!req.body.email || !req.body.email) {
      return next(new Error('Invalid body'));
    }
    try {
      const newUser = await User.create({
        email: req.body.email,
        id: generateUuid(),
        passwordHash: hashPassword(req.body.password),
      });

      return res.json(newUser);
    } catch (err) {
      return next(err);
    }
  });
};

export default setupRoutes;
