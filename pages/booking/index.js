import { useState } from 'react';
import { useRouter } from 'next/router';
import bookings from '../../data/bookings.json';
import reservedData from '../../data/reserved.json';

export default function Booking() {
  const router = useRouter();
  const { id } = router.query;
  const booking = bookings.find(booking => booking.id === parseInt(id));
  const reserved = reservedData.includes(parseInt(id));
  const [isReserved, setIsReserved] = useState(reserved);

  const handleReservation = () => {
    if (!isReserved) {
      // Reservation simulation: add the ID to the reserved list
      reservedData.push(parseInt(id));
      setIsReserved(true);
    } else {
      // Cancellation simulation: Remove ID from reserved list
      const index = reservedData.indexOf(parseInt(id));
      if (index !== -1) {
        reservedData.splice(index, 1);
      }
      setIsReserved(false);
    }
  };

  if (!booking) {
    return <p>Reservation not found.</p>;
  }

  return (
    <div>
      <h1>{booking.name}</h1>
      <p>Data: {booking.date}</p>
      <button onClick={handleReservation}>
        {isReserved ? 'Cancel Reservation' : 'Reserve'}
      </button>
    </div>
  );
}
