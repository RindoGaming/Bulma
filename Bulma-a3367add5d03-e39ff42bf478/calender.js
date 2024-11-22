const timeGrid = document.getElementById('timeGrid');
    const datePicker = document.getElementById('datePicker');
    const selectedDate = document.getElementById('selectedDate');

    function renderTimeSlots(date) {

      timeGrid.innerHTML = '';

      selectedDate.textContent = `Schedule for ${date.toLocaleDateString()}`;

      for (let hour = 8; hour < 16; hour++) {
        const grid = document.getElementById('timeGrid');
        grid.classList.add('grid');
        grid.classList.add('is-col-min-10');
        const hourDiv = document.createElement('div');
        hourDiv.textContent = hour < 10 ? `0${hour}:00` : `${hour}:00`;
        hourDiv.classList.add('hour');
        hourDiv.classList.add('cell');

        const timeSlotDiv = document.createElement('button');
        timeSlotDiv.classList.add('time-slot');
        timeSlotDiv.classList.add('button');
        timeSlotDiv.classList.add('has-background-warning-dark');
        timeSlotDiv.textContent = 'Click to add task';

        timeSlotDiv.addEventListener('click', () => {
          const task = prompt(`Enter task for ${hourDiv.textContent}`);
          if (task) {
            timeSlotDiv.textContent = task;
            timeSlotDiv.style.background = '#00d1b2';
            timeSlotDiv.style.color = 'white';
          }
        });

        timeGrid.appendChild(hourDiv);
        timeGrid.appendChild(timeSlotDiv);
      }
    }

    // Handle date change
    datePicker.addEventListener('change', (event) => {
      const selected = new Date(event.target.value);
      renderTimeSlots(selected);
    });

    // Initialize with current day
    const today = new Date();
    renderTimeSlots(today);