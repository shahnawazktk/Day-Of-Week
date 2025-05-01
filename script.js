document.addEventListener('DOMContentLoaded', function() {
    // Update the date information
    updateDateInfo();
    
    // Update the current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Update the date every minute (in case the page stays open)
    setInterval(updateDateInfo, 60000);
});

function updateDateInfo() {
    const now = new Date();
    
    // Days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getDay()];
    document.getElementById('dayOfWeek').textContent = dayOfWeek;
    
    // Months of the year
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const monthOfYear = months[now.getMonth()];
    document.getElementById('monthOfYear').textContent = monthOfYear;
    
    // Full date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const fullDate = now.toLocaleDateString('en-US', options);
    document.getElementById('fullDate').textContent = fullDate;
    
    // Add some visual feedback when the date updates
    const dateElements = document.querySelectorAll('.info p');
    dateElements.forEach(el => {
        el.classList.add('updated');
        setTimeout(() => el.classList.remove('updated'), 500);
    });
}