document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    const closeButton = document.getElementById('close-form');
    const bookingForm = document.getElementById('booking-form');
    const successMessage = document.getElementById('success-message');

    closeButton.addEventListener('click', () => {
        appointmentForm.classList.remove('active');
        window.location.href = "index.html"; // Redirect to index.html
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const appointment = {
            name: document.getElementById('name').value,
            location: document.getElementById('location').value,
            phone: document.getElementById('phone').value,
            doctor: document.getElementById('doctor').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            symptoms: document.getElementById('symptoms').value
        };

        // Get existing appointments from local storage or initialize an empty array
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

        // Add the new appointment to the array
        appointments.push(appointment);

        // Save the updated appointments array back to local storage
        localStorage.setItem('appointments', JSON.stringify(appointments));

        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
            appointmentForm.classList.remove('active');
            window.location.href = "index.html"; // Redirect to index.html after booking
        }, 2000);
    });
});
