export const users = (app) => {
  app.get('/users', (req, res) => {
    return res.status(200).send([
      {
        fistName: 'Cortez',
        lastName: 'Ashley',
      },
    ]);
  });
};
