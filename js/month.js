let currentYear, currentMonth;
    const calendarContainer = document.getElementById('calendar');
    const monthSelector = document.getElementById('monthSelector');
    const yearSelector = document.getElementById('yearSelector');

    const events = [
      { date: '2023-11-10', title: 'Friendly Match with Taylor', details: 'We are having a friendly match with Taylor University at 3:00p.m - 5:00p.m at Taylor University Badminton Court', image: 'image_for_calender/taylor.jpg' },
      { date: '2023-11-11', title: 'Neighborhood Doubles Showdown', details: 'Organize a doubles badminton tournament within a neighborhood or community. Teams can sign up and compete for the title of the best doubles duo in the area. Encourage spectators to come and cheer for their favorite teams.', image: 'image_for_calender/neighbor.png' },
      { date: '2023-11-7', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-11-14', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-11-21', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-11-28', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-10-3', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-10-10', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-10-17', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-10-24', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-10-31', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-12-5', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-12-19', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-12-12', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
      { date: '2023-12-26', title: 'Weekly Badminton Training Session', details: 'Every Tuesday, 6:00 PM to 8:00 PM at Endah Parade for warm-up, skill drills, and practice matches.',image:'image_for_calender/logo.jpg'},
  	  { date: '2023-12-25', title: 'Club Badminton Tournament', details: '9:00 AM to 5:00 PM at Endah Parade featuring a Doubles Round-Robin followed by Single Elimination.', image: 'image_for_calender/tournament.png' },
  	  { date: '2023-12-15', title: 'Friendly Inter-Club Match ', details: 'Negotiate date and time with the other club for matches (2:00 PM to 6:00 PM) followed by a social gathering, alternating locations.',image:'image_for_calender/logo.jpg'},
  	  { date: '2023-11-15', title: 'Junior Badminton Camp', details: '9:00 AM to 3:00 PM at Bukit Jalil for ages 10-15, focusing on skill development and team-building.',image:'image_for_calender/logo.jpg'},
  	  { date: '2023-10-17', title: 'Badminton Social Night', details: ' 7:00 PM to 10:00 PM in APU University for casual games, snacks, and socializing.',image:'image_for_calender/logo.jpg' },
  	  { date: '2023-10-25', title: 'Friendly Match with Sunway', details: 'We are having a friendly match with Sunway University at 3:00p.m - 5:00p.m at Sunway University Badminton Court', image: 'image_for_calender/sunway.png' },
  	  { date: '2023-11-10', title: 'Badminton League Matches', details: 'Refer to the local badminton league schedule for specific match dates and times.',image:'logo.jpg'},
  	  { date: '2023-11-30', title: 'Malaysia VS China Male Solo Match', details: 'Great opportunities to learn through the technique! 8:00p.m onwards! Stay tuned in front of your device', image: 'image_for_calender/winner.jpeg' },
  	   // Add more events as needed
    ];

    function createCalendar(year, month) {
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const firstDayOfMonth = new Date(year, month, 1).getDay();

      const table = document.createElement('table');
      const headerRow = table.insertRow();

      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (const day of daysOfWeek) {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
      }

      let currentDay = 1;
      for (let i = 0; i < 6; i++) {
        const row = table.insertRow();

        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDayOfMonth) {
            const emptyCell = row.insertCell();
            emptyCell.textContent = '';
          } else if (currentDay > daysInMonth) {
            const emptyCell = row.insertCell();
            emptyCell.textContent = '';
          } else {
            const cell = row.insertCell();
            cell.textContent = currentDay;

            const event = events.find(e => e.date === `${year}-${month + 1}-${currentDay}`);
            if (event) {
              const eventTitle = document.createElement('div');
              eventTitle.className = 'event-title';
              eventTitle.textContent = event.title;
              cell.appendChild(eventTitle);

              const popup = document.createElement('div');
              popup.className = 'popup';
              
              const image = document.createElement('img');
              image.src = event.image;
              popup.appendChild(image);
              
              const details = document.createElement('div');
              details.textContent = event.details;
              popup.appendChild(details);

              cell.appendChild(popup);
            }
            cell.classList.add('day-number');
            currentDay++;
          }
        }
      }

      return table;
    }

    function updateCalendar() {
      calendarContainer.innerHTML = '';
      calendarContainer.appendChild(createCalendar(currentYear, currentMonth));
    }

    function previousMonth() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
      monthSelector.value = currentMonth;
      yearSelector.value = currentYear;
    }

    function nextMonth() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
      monthSelector.value = currentMonth;
      yearSelector.value = currentYear;
    }

    function changeMonth() {
      currentMonth = parseInt(monthSelector.value);
      updateCalendar();
    }

    function changeYear() {
      currentYear = parseInt(yearSelector.value);
      updateCalendar();
    }

    const currentDate = new Date();
    currentYear = 2023;
    currentMonth = currentDate.getMonth();

    monthSelector.value = currentMonth;
    yearSelector.value = currentYear;

    updateCalendar();
