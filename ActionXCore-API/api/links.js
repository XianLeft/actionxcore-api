export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Pi Day Bundle",
      url: "https://www.paypal.com/ncp/payment/6PNN74X8EWHHN",
      description: "Pi Day 540",
      flow: "Possibility",
      price: 540.00,
      tags: ["Membership", "Training"],
      status: "Active"
    },
    {
      name: "Commercial Deposit",
      url: "https://www.paypal.com/ncp/payment/3XMH5FQGG9CEC",
      description: "Tithe + Mastermind $800",
      flow: "Possibility",
      price: 800.00,
      tags: ["Payment Link"],
      status: "Active"
    }
  ]);
}
