document.getElementById('enterButton').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    showSection('home'); // Show the home section when entering
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleServiceInfo(serviceId) {
    const serviceInfo = document.getElementById(serviceId);
    if (serviceInfo.classList.contains('hidden')) {
        serviceInfo.classList.remove('hidden');
    } else {
        serviceInfo.classList.add('hidden');
    }
}

let allTickets = [];

function buyTicket() {
    const ticketType = document.getElementById('ticketType').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;
    const ticketInfo = {
        type: ticketType,
        quantity: ticketQuantity
    };
    allTickets.push(ticketInfo);
    displayAllTickets();
    document.getElementById('ticketDetails').classList.remove('hidden');
}

function displayAllTickets() {
    const ticketInfoDiv = document.getElementById('ticketInfo');
    ticketInfoDiv.innerHTML = '';
    allTickets.forEach((ticket, index) => {
        ticketInfoDiv.innerHTML += `
            <p>Ticket ${index + 1}:</p>
            <p>Type: ${ticket.type}</p>
            <p>Quantity: ${ticket.quantity}</p>
            <hr>
        `;
    });
}

function resetTicketForm() {
    // Reset the booking form
    document.getElementById('bookingForm').reset();
    document.getElementById('bookingDetails').classList.add('hidden');
    
    // Navigate back to the booking form section
    showSection('home');
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departure = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;
    const passengers = document.getElementById('passengers').value;

    const bookingInfo = `
        Name: ${name}<br>
        From: ${from}<br>
        To: ${to}<br>
        Departure Date: ${departure}<br>
        Return Date: ${returnDate}<br>
        Number of Passengers: ${passengers}
    `;

    // Display booking info in the booking details section
    document.getElementById('bookingInfo').innerHTML = bookingInfo;
    document.getElementById('bookingDetails').classList.remove('hidden');

    // Display the same booking info in the ticket section
    document.getElementById('ticketInfo').innerHTML = bookingInfo;

    // Navigate to the ticket page
    showSection('ticketPage');
});