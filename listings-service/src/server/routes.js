import { Listing } from '#root/db/models';

const setupRoutes = (app) => {
  app.get('/listings', async (_, res) => {
    try{
    const listings = await Listing.findAll();
    res.json(listings);
    } catch(err) {
      return next(err)
    }
  });

  app.post('/listings', (req, res, next) => {
    if (!req.body.description || !req.body.title)
      return next(new Error('Invalid body'));
    try {
      const listing = await Listing.create({description: req.body.description, title: req.body.description})
      return res.json(listing)
    } catch (err) {
      return next(err);
    }
  });
};

export default setupRoutes;
