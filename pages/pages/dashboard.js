import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>Dashboard - Contacts</h1>
      <ul>
        {contacts.map((c, i) => (
          <li key={i}>{c.name} - {c.phone}</li>
        ))}
      </ul>
    </div>
  );
}
