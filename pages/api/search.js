import bookings from '../../data/bookings.json';

export default function handler(req, res) {
  const { query } = req.query;
  const filteredBookings = bookings.filter(booking =>
    booking.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(filteredBookings);
}
