export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json([]);
  } else if (req.method === 'POST') {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    // Save contact logic here
    res.status(201).json({ message: 'Contact added' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
