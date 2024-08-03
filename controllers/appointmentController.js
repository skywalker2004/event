const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  const { date, description } = req.body;

  try {
    const appointment = new Appointment({ user: req.user.id, date, description });
    await appointment.save();
    res.status(201).json({ message: 'Appointment created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
