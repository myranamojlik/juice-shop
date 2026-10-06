/*
 * DEMO ONLY - intentionally insecure code used to show Aikido's pull request checks.
 * This route is not registered anywhere. Do not merge this pull request.
 */

import { type Request, type Response } from 'express'

module.exports = function calculate () {
  return (req: Request, res: Response) => {
    const result = eval(String(req.query.expression))
    res.json({ result })
  }
}
