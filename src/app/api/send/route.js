import { Resend } from "resend";

// Initialisation avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;

    // En développement, envoi à l'email du compte Resend uniquement
    const toEmail = "contact@krislavoixdesanges.com"; // Email associé au compte Resend

    const { data, error } = await resend.emails.send({
      from: "Kris La Voix des Anges <onboarding@resend.dev>",
      to: [toEmail], // Remplacer par l'email associé au compte Resend
      reply_to: email, // L'email du client pour pouvoir lui répondre
      subject: `Nouveau message de ${name} - Kris La Voix des Anges`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f5ff; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 1px solid #d8b4fe; padding-bottom: 10px;">Nouveau message du site Kris La Voix des Anges</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #a78bfa;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            Ce message a été envoyé depuis le formulaire de contact du site krislavoixdesanges.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Erreur générale:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
//
