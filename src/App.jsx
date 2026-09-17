import { useState } from 'react'

const events = [
  {
    id: 1,
    name: 'Future Founders Forum',
    date: 'October 18, 2026',
    venue: 'Innovation Hub · Main Auditorium',
    organizer: 'Centre for Entrepreneurship',
    description: 'A sharp afternoon of founder stories, practical workshops, and honest conversations about building what matters.',
    category: 'Talks & panels',
    accent: 'coral',
  },
  {
    id: 2,
    name: 'Night at the Observatory',
    date: 'October 24, 2026',
    venue: 'North Campus · Observatory Deck',
    organizer: 'Astronomy & Physics Society',
    description: 'Trade lecture halls for the night sky with guided stargazing, telescope time, and a little cosmic perspective.',
    category: 'Science & culture',
    accent: 'blue',
  },
  {
    id: 3,
    name: 'Inter-University Hackday',
    date: 'November 07, 2026',
    venue: 'Digital Futures Lab · Building C',
    organizer: 'School of Computing',
    description: 'Bring a question, find your people, and prototype a thoughtful solution in one high-energy day.',
    category: 'Build & create',
    accent: 'yellow',
  },
]

const countries = `Afghanistan|+93
Albania|+355
Algeria|+213
Andorra|+376
Angola|+244
Antigua and Barbuda|+1-268
Argentina|+54
Armenia|+374
Australia|+61
Austria|+43
Azerbaijan|+994
Bahamas|+1-242
Bahrain|+973
Bangladesh|+880
Barbados|+1-246
Belarus|+375
Belgium|+32
Belize|+501
Benin|+229
Bhutan|+975
Bolivia|+591
Bosnia and Herzegovina|+387
Botswana|+267
Brazil|+55
Brunei|+673
Bulgaria|+359
Burkina Faso|+226
Burundi|+257
Cambodia|+855
Cameroon|+237
Canada|+1
Cape Verde|+238
Central African Republic|+236
Chad|+235
Chile|+56
China|+86
Colombia|+57
Comoros|+269
Congo, Democratic Republic|+243
Congo, Republic|+242
Costa Rica|+506
Cote d'Ivoire|+225
Croatia|+385
Cuba|+53
Cyprus|+357
Czechia|+420
Denmark|+45
Djibouti|+253
Dominica|+1-767
Dominican Republic|+1-809
Ecuador|+593
Egypt|+20
El Salvador|+503
Equatorial Guinea|+240
Eritrea|+291
Estonia|+372
Eswatini|+268
Ethiopia|+251
Fiji|+679
Finland|+358
France|+33
Gabon|+241
Gambia|+220
Georgia|+995
Germany|+49
Ghana|+233
Greece|+30
Grenada|+1-473
Guatemala|+502
Guinea|+224
Guinea-Bissau|+245
Guyana|+592
Haiti|+509
Honduras|+504
Hungary|+36
Iceland|+354
India|+91
Indonesia|+62
Iran|+98
Iraq|+964
Ireland|+353
Israel|+972
Italy|+39
Jamaica|+1-876
Japan|+81
Jordan|+962
Kazakhstan|+7
Kenya|+254
Kiribati|+686
Kuwait|+965
Kyrgyzstan|+996
Laos|+856
Latvia|+371
Lebanon|+961
Lesotho|+266
Liberia|+231
Libya|+218
Liechtenstein|+423
Lithuania|+370
Luxembourg|+352
Madagascar|+261
Malawi|+265
Malaysia|+60
Maldives|+960
Mali|+223
Malta|+356
Marshall Islands|+692
Mauritania|+222
Mauritius|+230
Mexico|+52
Micronesia|+691
Moldova|+373
Monaco|+377
Mongolia|+976
Montenegro|+382
Morocco|+212
Mozambique|+258
Myanmar|+95
Namibia|+264
Nauru|+674
Nepal|+977
Netherlands|+31
New Zealand|+64
Nicaragua|+505
Niger|+227
Nigeria|+234
North Korea|+850
North Macedonia|+389
Norway|+47
Oman|+968
Pakistan|+92
Palau|+680
Palestine|+970
Panama|+507
Papua New Guinea|+675
Paraguay|+595
Peru|+51
Philippines|+63
Poland|+48
Portugal|+351
Qatar|+974
Romania|+40
Russia|+7
Rwanda|+250
Saint Kitts and Nevis|+1-869
Saint Lucia|+1-758
Saint Vincent and the Grenadines|+1-784
Samoa|+685
San Marino|+378
Sao Tome and Principe|+239
Saudi Arabia|+966
Senegal|+221
Serbia|+381
Seychelles|+248
Sierra Leone|+232
Singapore|+65
Slovakia|+421
Slovenia|+386
Solomon Islands|+677
Somalia|+252
South Africa|+27
South Korea|+82
South Sudan|+211
Spain|+34
Sri Lanka|+94
Sudan|+249
Suriname|+597
Sweden|+46
Switzerland|+41
Syria|+963
Taiwan|+886
Tajikistan|+992
Tanzania|+255
Thailand|+66
Timor-Leste|+670
Togo|+228
Tonga|+676
Trinidad and Tobago|+1-868
Tunisia|+216
Turkey|+90
Turkmenistan|+993
Tuvalu|+688
Uganda|+256
Ukraine|+380
United Arab Emirates|+971
United Kingdom|+44
United States|+1
Uruguay|+598
Uzbekistan|+998
Vanuatu|+678
Vatican City|+39
Venezuela|+58
Vietnam|+84
Yemen|+967
Zambia|+260
Zimbabwe|+263`.split('\n').map((country) => {
  const [name, code] = country.split('|')
  return { name, code }
})

function EventCard({ event, onRegister }) {
  return (
    <article className={`event-card ${event.accent}`}>
      <div className="event-card__topline">
        <span className="event-number">0{event.id}</span>
        <span className="event-category">{event.category}</span>
      </div>
      <h2>{event.name}</h2>
      <p className="event-description">{event.description}</p>
      <dl className="event-details">
        <div>
          <dt>Date</dt>
          <dd>{event.date}</dd>
        </div>
        <div>
          <dt>Venue</dt>
          <dd>{event.venue}</dd>
        </div>
        <div>
          <dt>Organizer</dt>
          <dd>{event.organizer}</dd>
        </div>
      </dl>
      <button className="register-button" type="button" onClick={() => onRegister(event)}>
        Register <span aria-hidden="true">↗</span>
      </button>
    </article>
  )
}

function RegistrationForm({ event, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    studentName: '',
    enrollmentId: '',
    email: '',
    country: 'United States',
    countryCode: '+1',
    phone: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    if (name === 'country') {
      const selectedCountry = countries.find((country) => country.name === value)
      setFormData((current) => ({ ...current, country: value, countryCode: selectedCountry.code }))
      return
    }
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <section className="registration-panel" aria-labelledby="registration-heading">
      <div className="registration-panel__header">
        <div>
          <p className="eyebrow">Your seat starts here</p>
          <h2 id="registration-heading">Register for {event.name}</h2>
        </div>
        <button className="close-button" type="button" onClick={onClose} aria-label="Close registration form">×</button>
      </div>
      <p className="selected-event">{event.date} <span>·</span> {event.venue}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Student name
            <input name="studentName" value={formData.studentName} onChange={handleChange} placeholder="e.g. Amara Okafor" required />
          </label>
          <label>
            Enrollment ID
            <input name="enrollmentId" value={formData.enrollmentId} onChange={handleChange} placeholder="e.g. U2026-0142" required />
          </label>
          <label>
            University email
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@university.edu" required />
          </label>
          <label className="phone-field">
            Phone number
            <span className="phone-inputs">
              <select name="country" value={formData.country} onChange={handleChange} aria-label="Country code">
                {countries.map((country) => <option key={country.name} value={country.name}>{country.name} ({country.code})</option>)}
              </select>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="555 000 0000" required />
            </span>
          </label>
        </div>
        <button className="submit-button" type="submit">Confirm registration <span aria-hidden="true">→</span></button>
      </form>
    </section>
  )
}

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [confirmation, setConfirmation] = useState('')
  const [registrations, setRegistrations] = useState([])

  function handleRegister(event) {
    setSelectedEvent(event)
    setConfirmation('')
  }

  function handleSubmit(formData) {
    setRegistrations((current) => [
      ...current,
      { ...formData, eventId: selectedEvent.id, eventName: selectedEvent.name },
    ])
    setConfirmation(`You're in, ${formData.studentName.split(' ')[0]}! Your place at ${selectedEvent.name} is reserved.`)
    setSelectedEvent(null)
  }

  function handleDeleteRegistration(registrationIndex) {
    setRegistrations((current) => current.filter((_, index) => index !== registrationIndex))
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Campus Gatherings home">
          <span className="brand-mark">CG</span>
          <span>Campus<br />Gatherings</span>
        </a>
        <span className="header-note">Student life / 2026—27</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">The university events desk</p>
          <h1>Make room<br /><em>for something</em><br />worth showing up for.</h1>
          <p className="hero-intro">A handpicked calendar of talks, experiments, and late-night ideas for the curious campus mind.</p>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>OPEN<br />TO ALL</span>
          <strong>✳</strong>
        </div>
      </section>

      <section className="events-section" aria-labelledby="events-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">On the calendar</p>
            <h2 id="events-heading">Find your next<br /><em>good idea.</em></h2>
          </div>
          <p className="event-count">03 events<br />this season</p>
        </div>
        <div className="events-grid">
          {events.map((event) => <EventCard key={event.id} event={event} onRegister={handleRegister} />)}
        </div>
        <section className="registrations-section" aria-labelledby="registrations-heading">
          <div className="registrations-heading">
            <div>
              <p className="eyebrow">Live sign-up list</p>
              <h2 id="registrations-heading">Registered<br /><em>students.</em></h2>
            </div>
            <p className="event-count">{registrations.length.toString().padStart(2, '0')} registrations<br />across all events</p>
          </div>
          {registrations.length === 0 ? (
            <p className="empty-registrations">No registrations yet. Choose an event above to reserve a place.</p>
          ) : (
            <div className="registrations-list">
              {registrations.map((registration, index) => (
                <div className="registration-row" key={`${registration.enrollmentId}-${index}`}>
                  <span className="registration-index">{String(index + 1).padStart(2, '0')}</span>
                  <strong>{registration.studentName}</strong>
                  <span>{registration.enrollmentId}</span>
                  <span>{registration.countryCode} {registration.phone}</span>
                  <span className="registration-event">{registration.eventName}</span>
                  <button
                    className="delete-registration"
                    type="button"
                    onClick={() => handleDeleteRegistration(index)}
                    aria-label={`Delete registration for ${registration.studentName}`}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </section>

      {selectedEvent && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelectedEvent(null)}>
          <RegistrationForm event={selectedEvent} onClose={() => setSelectedEvent(null)} onSubmit={handleSubmit} />
        </div>
      )}

      {confirmation && (
        <div className="toast" role="status">
          <span className="toast-icon">✓</span>
          <span>{confirmation}</span>
          <button type="button" onClick={() => setConfirmation('')} aria-label="Dismiss confirmation">×</button>
        </div>
      )}

      <footer><span>Campus Gatherings</span><span>Make the ordinary less ordinary.</span></footer>
    </main>
  )
}

export default App
