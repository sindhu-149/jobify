import express from 'express'
const router =express.Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message:
    'Too many requests from this IP address try again after 15 min'
})

import authenticateUser from "../middleware/auth.js"

import {
    register, 
    login, 
    updateUser,
    }  from "../controller/authController.js"

router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser);


export default router
