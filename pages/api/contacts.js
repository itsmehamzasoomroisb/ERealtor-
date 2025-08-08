let contacts = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(contacts);
  } else if (req.method === 'POST') {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const newContact = { name, phone };
    contacts.push(newContact);
    res.status(201).json(newContact);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
