import { Router } from "express"
import { createOrder, receiveWebhook } from "../controllers/payment.controller.js"

const router = Router()

router.post("/create-order", createOrder)

router.get("/failure")

router.get("/success")

router.get("/pending")

router.post("/webhook", receiveWebhook)

export default router