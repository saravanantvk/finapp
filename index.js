// index.js
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    return res.json({ message: 'Hello from Appwrite Function API!' });
  }
  if (req.method === 'POST') {
    const body = req.body && typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    return res.json({ ok: true, received: body });
  }
  res.status(405).send('Method Not Allowed');
};