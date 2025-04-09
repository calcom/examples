import Booking from "../../../components/booking/BookingPage";

export default async function BookingPage({ params }: { params: Promise<{ bookingUid: string }> }) {
  const { bookingUid } = await params;
  return (
    <Booking bookingUid={bookingUid} />
  )
}
