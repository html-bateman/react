import BookingForm from "./BookingForm";
import { useState, useEffect } from "react";

export default function BookingPage() {
    const today = new Date().toISOString().slice(0, 10);
    console.log(today)
    const [date,setDate] = useState(today)
    const [result, setResult] = useState({ reserved_slots: [], bookings: '' });

    useEffect(() => {
        fetchData(date);
    }, [date]); // Empty dependency array ensures useEffect runs only once

    const handleDateChange=(date)=>{
        setDate(date)
    }

    async function fetchData(date) {
        try {
            const response = await fetch("http://localhost:8000/bookings/?date=" + date);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const fetched = {
                reserved_slots: [],
                bookings: ''
            };

            for (let item of data) {
                fetched.reserved_slots.push(item.fields.reservation_slot);
                fetched.bookings += `<p>${item.fields.first_name} - ${formatTime(item.fields.reservation_slot)}</p>`;
            }
            console.log("fetched data",fetched.reserved_slots,fetched.bookings)

            setResult(fetched);
        } catch (error) {
            console.error('[fetch error]', error);
            // Handle error here, like showing a message to the user
        }
    }

    function formatTime(time) {
        const ampm = time < 12 ? 'AM' : 'PM';
        const t = time < 12 ? time : time > 12 ? time - 12 : time;
        const label = `${t} ${ampm}`;
        return label;
    }

    console.log("before rendering",result.reserved_slots,result.bookings)
    //result.bookings&&(document.getElementById('bookings').innerHTML = (result.bookings.length===0?"No bookings.":result.bookings))
    return (
        <div>
            <h1>Booking Now!</h1>
            <BookingForm availableTimes={result.reserved_slots} bookings={result.bookings}
            onDateChange={handleDateChange}></BookingForm>
        </div>
    );
}
