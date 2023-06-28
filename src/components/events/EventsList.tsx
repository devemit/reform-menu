const EventsList = () => {
  return (
    <div>
      <div className='event_two'>
        <img src='figuretop.jpg' alt='figue' className='figure' />
        <div className='content_two' data-aos='fade-left'>
          <h2>Events</h2>
          <ul className='events'>
            <li>Weddings</li>
            <li>Birthdays</li>
            <li>Christenings</li>
            <li>Pre-Wedding Events</li>
            <li>Bachelor Parties</li>
            <li>Business Meetings</li>
          </ul>
          <img src='wavever.png' alt='/' className='wavever' />
        </div>
      </div>
    </div>
  );
};

export default EventsList;
