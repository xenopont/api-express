import { Request, Response } from 'express'

const getAllowedOrigin = (origin: string): string => {
    if (origin === '') {
        return '*'
    }
    // you can block origins here,
    // or allow just some of them
    return origin
}

// @todo create a method returning this function to filter allowed origins
export default (request: Request, response: Response, next: () => void): void => {
    const origin: string = request.headers.origin || ''
    response.setHeader('Access-Control-Allow-Origin', getAllowedOrigin(origin))
    response.setHeader('Cache-Control', 'no-store')
    response.setHeader('X-Powered-By', 'Portal')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    if (request.method === 'OPTIONS') {
        response.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        // 'Content-Type' header should not be set here, as it's not allowed by the browser
        response.status(204).send()
    }
    else {
        next()
    }
}
