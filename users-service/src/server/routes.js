import { User, UserSession } from '#root/db/models';
import {addHours} from 'date-fns';
import generateUuid from '#root/helpers/generateUuid';
import hashPassword from '#root/helpers/hashPassword';
import passwordCompareSync from '#root/helpers/passwordCompareSync';

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

  app.post('/sessions', async (req, res, next) => {
    if (!req.body.email || !req.body.email) {
      return next(new Error('Invalid body'));
    }
    try {
      const user = await User.findOne({ attributes: {}, where: {
        email: req.body.email
      }})
      if(!user) return next(new Error("Invalid email address"));
      if(!passwordCompareSync(req.body.password, user.passwordHash)) {
        return next(new Error("Invalid password"))
      } 

      const expiresAt = addHours(new Date(), process.env.USER_SESSION_EXPIRY_HOURS);
      const sessionToken = generateUuid();
      const userSession = await UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id
      })

      return res.json(userSession);
    } catch (err) {
      return next(err);
    }
  });
};

export default setupRoutes;
