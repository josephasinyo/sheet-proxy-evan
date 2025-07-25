export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxIKlw9fQbWGOL8Rt-fm1yiyeEss1i73ZTn6ucSK-swAxhq0KBnumxmDNYNYjEW2XYk/exec';
  
      const googleRes = await fetch(scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
  
      const data = await googleRes.text(); // Handle Google’s HTML response
      res.status(200).send(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  