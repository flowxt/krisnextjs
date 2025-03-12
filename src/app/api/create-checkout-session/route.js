// import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(request) {
//   try {
//     const data = await request.json();
//     const { service } = data;

//     // Extraction du prix (enlève le symbole € et convertit en centimes)
//     const priceString = service.price.replace("€", "").trim();
//     const price = parseInt(parseFloat(priceString) * 100);

//     // Création de la session de paiement
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "eur",
//             product_data: {
//               name: service.title,
//               description: `${service.duration} avec ${service.intervenant}`,
//               images:
//                 service.images && service.images[0]
//                   ? [`${process.env.NEXT_PUBLIC_BASE_URL}${service.images[0]}`]
//                   : [],
//             },
//             unit_amount: price,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/reservation-success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
//     });

//     return NextResponse.json({ sessionId: session.id, url: session.url });
//   } catch (error) {
//     console.error("Stripe error:", error);
//     return NextResponse.json(
//       { error: "Error creating checkout session" },
//       { status: 500 }
//     );
//   }
// }
