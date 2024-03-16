import React, { useState,useEffect,useRef } from 'react';

function BookingForm({availableTimes,bookings,onDateChange}) {  
    const [name,setName] = useState("");
    const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

// //   const  availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

        if(bookings==null){
          bookings = "No bookings"
        }
        console.log('fetched times',availableTimes)
        console.log('fetched bookings',bookings)
        console.log('first available time',availableTimes[0])

        // let firstOption=10
        // console.log("availableTime",availableTimes)
        // for(let k=10;k<=20;k++){
        //     if(availableTimes.includes(k)==false){firstOption = k;break}
        // }
        // console.log('firstoption',firstOption)
    
//   useEffect(() => {
//     setDate(date)
//     // console.log('firstoption in useEffect',firstOption)
//     // setTime(firstOption)
//   }, [date]); 

  const handleSubmit = (event) => {
    //event.preventDefault();
    // Handle form submission here
    const data = {
        first_name: name,
        reservation_date: date,
        reservation_slot: time
    };
    fetch("http://localhost:8000/bookings/", {
    method: 'POST',
    headers: {
        // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    })
    .catch(error => {
    console.error('There was a problem posting the data:', error,data);
    });
    alert("Booking Accepted: "+name+"-"+date+"-"+formatTime(time))
  };

    function formatTime(time) {
        const ampm = time < 12 ? 'AM' : 'PM'
        const t = time < 12 ? time : time > 12 ? time - 12 : time
        const label = `${t} ${ampm}`
        return label
    }

  return (
    <div className='container'>
    <form  onSubmit={handleSubmit}>

      
      <label htmlFor='res-name'>Name:</label>
      <input type='string' id='res-name' placeholder='Your name'  value={name} onChange={(e)=>setName(e.target.value)} required/>
    
      <label htmlFor="res-date">Choose date:</label>
      <input type="date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value);onDateChange(e.target.value)}} required/>
      
      <label htmlFor="res-time">Choose time:</label>
      <select id="res-time" value={time}  onChange={(e) => setTime(e.target.value)} required>
        {/* {availableTimes.map((option) => (
          <option key={option}>{formatTime(option)}</option>
        ))} */}
            <option>Select when you will come</option>
            {Array.from({ length: 11 }, (_, index) => {
                const time = index + 10;
                const label = formatTime(time);
                if (availableTimes.includes(time)) {
                return <option key={time} value={time} disabled>{label}</option>;

                } else {
                return <option key={time} value={time}>{label}</option>;
                }
            }).concat(
                       availableTimes.length === 11 ? 
                <option value='' disabled>No Available Tables</option> :
                []
            )}
      </select>
      
      <label htmlFor="guests">Number of guests:</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} required />
      
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Casual Meal</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      
      <input type="submit" id="button" value="Book a table" />
    </form>
    
<section className='bookings'>
    <h3>Bookings For {date}</h3>
    <div id="bookings">
        {bookings.length===0?"No bookings.":<div dangerouslySetInnerHTML={{ __html: bookings }} />}
    </div>
</section>

    </div>
  );
}

export default BookingForm;
