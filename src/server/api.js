/* eslint-disable no-console */
import express from 'express'
import moment from 'moment'

const router = express.Router()

// get the server time
router.get('/time', (req, res) => {
  res.status(200).json({ time: moment.valueOf() })
})

export default router
