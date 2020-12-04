const { carsService } = require('../services');

module.exports = {
    getCars: async (req, res) => {
        try {
            const cars = await carsService.findCars();

            console.log(cars);

            res.json(cars);
            // userService.getUsers(req.body).then((users) => {
            //     res.status(200).json(users);
            // });
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
