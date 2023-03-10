import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe(
//   "pk_test_51KMZxrFQgdv7KJQw5sgNzfugUW9W6D2NHFp8xnWtjcNZdRqIQjrkmrhR2qxci6VZX703PNbfNSQ2eoihvJ2voaCP00LBnxTOC1"
// );

const stripePromise = loadStripe(
  "pk_test_51LpkpWC4HsoTkYgs0TpSMLY38qzH4Bi793ZZ7j3r9J6eW7slPwf219tAPnmVms91qOsxIREEx36oZy7QUPk5y6bv00Uihle1he"
);

export default function StripeContainer({ order, successPay }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} successPay={successPay} />
    </Elements>
  );
}
