const {Router} = require('express');
const controller = require('./controller');
const doctorRouter = Router();

doctorRouter.get('/',controller.getDoctors);
doctorRouter.get('/:id',controller.getDoctorByID);
doctorRouter.post('/',controller.addDoctor);
doctorRouter.delete('/:id',controller.deleteDoctor);
doctorRouter.put('/:id',controller.updateDoctor);
module.exports = doctorRouter;