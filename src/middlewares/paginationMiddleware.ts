import { Request, Response, NextFunction } from "express"


export function paginationMiddleware(req: Request, res: Response, next: NextFunction): void {
  const { limit, skip } = req.query  

  if(limit) {
    const parsedLimit = isNaN(Number(limit)) ? 10 : Number(limit)
    req.query.limit = parsedLimit as any
  } else {
    req.query.limit = 10 as any
  }

  if(skip) {
    const parsedSkip = isNaN(Number(skip)) ? 0 : Number(skip)
    req.query.skip = parsedSkip as any
  } else {
    req.query.skip = 0 as any
  }

  return next()
}