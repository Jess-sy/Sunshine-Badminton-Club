let slotsData = [
    { day: 'Monday', time: '9:00 AM - 10:00 AM', status: 'Available' },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', status: 'Booked' },
    { day: 'Monday', time: '11:00 AM - 12:00 PM', status: 'Booked' },
    { day: 'Monday', time: '12:00 PM - 1:00 PM', status: 'Available' },
    { day: 'Monday', time: '1:00 PM - 2:00 PM', status: 'Booked' },
    { day: 'Monday', time: '2:00 PM - 3:00 PM', status: 'Available' },
    { day: 'Monday', time: '3:00 PM - 4:00 PM', status: 'Available' },
    { day: 'Monday', time: '4:00 PM - 6:00 PM', status: 'Booked' },
    { day: 'Monday', time: '6:00 PM - 8:00 PM', status: 'Available' },
    { day: 'Monday', time: '8:00 PM - 9:00 PM', status: 'Booked' },

    { day: 'Tuesday', time: '9:00 AM - 10:00 AM', status: 'Available' },
    { day: 'Tuesday', time: '10:00 AM - 11:00 AM', status: 'Booked' },
    { day: 'Tuesday', time: '11:00 AM - 12:00 PM', status: 'Available' },
    { day: 'Tuesday', time: '12:00 PM - 1:00 PM', status: 'Booked' },
    { day: 'Tuesday', time: '1:00 PM - 2:00 PM', status: 'Available' },
    { day: 'Tuesday', time: '2:00 PM - 3:00 PM', status: 'Available' },
    { day: 'Tuesday', time: '3:00 PM - 4:00 PM', status: 'Booked' },
    { day: 'Tuesday', time: '4:00 PM - 5:00 PM', status: 'Booked' },
    { day: 'Tuesday', time: '5:00 PM - 6:00 PM', status: 'Available' },
    { day: 'Tuesday', time: '6:00 PM - 7:00 PM', status: 'Available' },
    { day: 'Tuesday', time: '7:00 PM - 8:00 PM', status: 'Booked' },
    { day: 'Tuesday', time: '8:00 PM - 9:00 PM', status: 'Available' },

    { day: 'Wednesday', time: '9:00 AM - 10:00 AM', status: 'Available' },
    { day: 'Wednesday', time: '10:00 AM - 11:00 AM', status: 'Available' },
    { day: 'Wednesday', time: '11:00 AM - 12:00 PM', status: 'Booked' },
    { day: 'Wednesday', time: '1:00 PM - 2:00 PM', status: 'Booked' },
    { day: 'Wednesday', time: '2:00 PM - 3:00 PM', status: 'Booked' },
    { day: 'Wednesday', time: '3:00 PM - 4:00 PM', status: 'Available' },
    { day: 'Wednesday', time: '4:00 PM - 5:00 PM', status: 'Available' },
    { day: 'Wednesday', time: '5:00 PM - 6:00 PM', status: 'Booked' },
    { day: 'Wednesday', time: '6:00 PM - 7:00 PM', status: 'Available' },
    { day: 'Wednesday', time: '7:00 PM - 8:00 PM', status: 'Booked' },
    { day: 'Wednesday', time: '8:00 PM - 9:00 PM', status: 'Available' },

    { day: 'Thursday', time: '9:00 AM - 10:00 AM', status: 'Booked' },
    { day: 'Thursday', time: '10:00 AM - 11:00 AM', status: 'Available' },
    { day: 'Thursday', time: '11:00 AM - 12:00 PM', status: 'Available' },
    { day: 'Thursday', time: '2:00 PM - 3:00 PM', status: 'Booked' },
    { day: 'Thursday', time: '3:00 PM - 4:00 PM', status: 'Booked' },
    { day: 'Thursday', time: '4:00 PM - 5:00 PM', status: 'Available' },
    { day: 'Thursday', time: '5:00 PM - 6:00 PM', status: 'Available' },
    { day: 'Thursday', time: '6:00 PM - 7:00 PM', status: 'Booked' },
    { day: 'Thursday', time: '7:00 PM - 8:00 PM', status: 'Available' },
    { day: 'Thursday', time: '8:00 PM - 9:00 PM', status: 'Booked' },

    { day: 'Friday', time: '9:00 AM - 10:00 AM', status: 'Available' },
    { day: 'Friday', time: '10:00 AM - 11:00 AM', status: 'Available' },
    { day: 'Friday', time: '11:00 AM - 12:00 PM', status: 'Booked' },
    { day: 'Friday', time: '12:00 PM - 1:00 PM', status: 'Available' },
    { day: 'Friday', time: '1:00 PM - 2:00 PM', status: 'Booked' },
    { day: 'Friday', time: '2:00 PM - 3:00 PM', status: 'Booked' },
    { day: 'Friday', time: '3:00 PM - 4:00 PM', status: 'Available' },
    { day: 'Friday', time: '4:00 PM - 5:00 PM', status: 'Available' },
    { day: 'Friday', time: '5:00 PM - 6:00 PM', status: 'Booked' },
    { day: 'Friday', time: '6:00 PM - 7:00 PM', status: 'Available' },
];
function displaySlots(selectedDay) {
    const slotsTable = document.getElementById('bookedSlotsBody');
    slotsTable.innerHTML = ''; 

    slotsData.forEach(slot => {
        if (slot.day === selectedDay) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${slot.day}</td>
                <td>${slot.time}</td>
                <td class="${slot.status === 'Booked' ? 'booked-status' : ''}">${slot.status}</td>
                <td>${slot.status === 'Available' ? '<button onclick="bookSlot(this)" class="expand-button">Book</button>' : ''}</td>
            `;
            slotsTable.appendChild(row);
        }
    });
}

function bookSlot(button) {
    const row = button.parentElement.parentElement;
    const day = row.children[0].innerText;
    const court = row.children[1].innerText;
    const time = row.children[2].innerText;
    
    slotsData = slotsData.map(slot => {
        if (slot.day == day && slot.time == time) {
            slot.status = 'Booked';
        }
        return slot;
    });
    
    displaySlots(day); 
}
function selectDay(selectElement) {
    const selectedDay = selectElement.value;
    displaySlots(selectedDay);
}
const initialSelectedDay = document.getElementById('daySelect').value;
displaySlots(initialSelectedDay);

window.addEventListener('scroll', function() {
    const navbar = document.getElementById("myTopnav");
    const distance = navbar.offsetTop;
  
    if (window.pageYOffset > distance) {
      navbar.classList.add("fixed");
      document.body.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed");
      document.body.classList.remove("fixed-nav");
    }
});