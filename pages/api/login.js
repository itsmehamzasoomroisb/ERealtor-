// pages/api/login.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Yahan aap user authentication logic add karenge (jaise database check)
    if (email === 'test@example.com' && password === '123456') {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
