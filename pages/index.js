import Link from 'next/link';
import bookings from '../data/bookings.json';

export default function Home() {
  return (
    <div>
      <h1>Booking List</h1>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <Link href={`/booking/${booking.id}`}>
              <a>{booking.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
