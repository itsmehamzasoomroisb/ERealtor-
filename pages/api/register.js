// pages/api/register.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    // Yahan user registration logic add karen (jaise database me save karna)
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // For demo, bas success response bhej rahe hain
    res.status(201).json({ message: 'Registration successful' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
