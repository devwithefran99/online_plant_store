document.addEventListener('DOMContentLoaded', () => {

    // 1. Date & Time 
    const el = document.getElementById('current-date-time');
    if (el) setInterval(() => el.innerText = new Date().toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    }), 1000);

    // 2. Contact Form Validation 
    document.querySelectorAll('form[id^="contact-form"]').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name  = (form.querySelector('#name')  || form.querySelector('[placeholder*="Name"]'))?.value;
            const email = (form.querySelector('#email') || form.querySelector('[placeholder*="Email"]'))?.value;
            name && email
                ? (alert(`Thank you, ${name}! We will contact you at ${email} shortly.`), form.reset())
                : alert('Please fill in all required fields.');
        });
    });

    // 3. Membership Section Collapse 
    document.querySelectorAll('.custom-collapse-toggle').forEach(btn =>
        btn.addEventListener('click', () =>
            document.querySelector(btn.dataset.target).classList.toggle('show')
        )
    );

});
