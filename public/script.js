document.getElementById('scheduleForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const route = document.getElementById('route').value;
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
  
    // Send schedule to the backend
    const response = await fetch('/api/schedules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ route, departure, arrival })
    });
  
    const result = await response.json();
    if (result.success) {
      alert('Schedule added successfully!');
      loadSchedules();
    } else {
      alert('Failed to add schedule');
    }
  });
  
  // Load schedules
  async function loadSchedules() {
    const response = await fetch('/api/schedules');
    const schedules = await response.json();
  
    const scheduleContainer = document.getElementById('scheduleContainer');
    scheduleContainer.innerHTML = '';
  
    schedules.forEach(schedule => {
      const listItem = document.createElement('li');
      listItem.textContent = `${schedule.route} | Departure: ${schedule.departure} | Arrival: ${schedule.arrival}`;
      scheduleContainer.appendChild(listItem);
    });
  }
  
  // Initial load
  loadSchedules();
  