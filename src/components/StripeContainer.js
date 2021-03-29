import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const PUBLIC_KEY = "pk_test_51Ia2i2EEWroQWkKLKjVJR93ppNNP1tl7sxzDYZ1K0AnkEsrWgaiHaRTofNesXFPEavQTN42wZARMGTuRj9wUhGVK00zjRW8REs"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}
