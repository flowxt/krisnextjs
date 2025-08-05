import { Resend } from "resend";

// Initialisation avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();
    const serviceId = formData.service;

    // Email de destination
    const toEmail = "feronkristelle@gmail.com";

    let emailHtml = "";
    let emailSubject = "";

    // Différents templates selon le type de service
    if (serviceId.includes("Guidance Question")) {
      // Template pour Guidance Question
      const { telephone, email, firstName, lastName, ...questions } = formData;

      // Extraction des questions
      const questionsList = Object.entries(questions)
        .filter(([key]) => key.startsWith("question"))
        .map(([_, value]) => value)
        .filter(Boolean);

      emailSubject = `Nouvelle Guidance Question - ${formData.option}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f5ff; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 1px solid #d8b4fe; padding-bottom: 10px;">Nouvelle Guidance Question</h2>
          <p><strong>Service:</strong> ${formData.service} - ${
        formData.option
      } (${formData.price})</p>
          <p><strong>Nom:</strong> ${lastName} ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${telephone}</p>
          <p><strong>Question(s):</strong></p>
          ${questionsList
            .map(
              (q, i) => `
            <div style="background-color: white; padding: 15px; margin-bottom: 10px; border-radius: 5px; border-left: 4px solid #a78bfa;">
              <p><strong>Question ${i + 1}:</strong></p>
              ${q.replace(/\n/g, "<br>")}
            </div>
          `
            )
            .join("")}
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            Ce formulaire a été soumis le ${new Date(
              formData.date
            ).toLocaleString("fr-FR")}
          </p>
        </div>
      `;
    } else if (serviceId.includes("Carte Cadeau")) {
      // Template pour Carte Cadeau
      const {
        buyerName,
        buyerFirstName,
        buyerEmail,
        buyerPhone,
        recipientName,
        recipientFirstName,
        personalMessage,
      } = formData;

      emailSubject = `Nouvelle Carte Cadeau - ${formData.option}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f5ff; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 1px solid #d8b4fe; padding-bottom: 10px;">Nouvelle Carte Cadeau</h2>
          <p><strong>Service:</strong> ${formData.service} - ${
        formData.option
      } (${formData.price})</p>
          
          <h3 style="color: #7c3aed; margin-top: 20px;">Informations de l'acheteur</h3>
          <p><strong>Nom complet:</strong> ${buyerFirstName} ${buyerName}</p>
          <p><strong>Email:</strong> ${buyerEmail}</p>
          <p><strong>Téléphone:</strong> ${buyerPhone}</p>
          
          <h3 style="color: #7c3aed; margin-top: 20px;">Informations du destinataire</h3>
          <p><strong>Nom complet:</strong> ${recipientFirstName} ${recipientName}</p>
          
          ${
            personalMessage
              ? `
            <h3 style="color: #7c3aed; margin-top: 20px;">Message personnalisé</h3>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #a78bfa;">
              ${personalMessage.replace(/\n/g, "<br>")}
            </div>
          `
              : ""
          }
          
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            Ce formulaire a été soumis le ${new Date(
              formData.date
            ).toLocaleString("fr-FR")}
          </p>
        </div>
      `;
    } else {
      // Template générique pour d'autres services
      emailSubject = `Nouvelle réservation - ${formData.service}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f5ff; border-radius: 10px;">
          <h2 style="color: #7c3aed; border-bottom: 1px solid #d8b4fe; padding-bottom: 10px;">Nouvelle réservation</h2>
          <p><strong>Service:</strong> ${formData.service}</p>
          ${Object.entries(formData)
            .filter(([key]) => !["service", "date"].includes(key))
            .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
            .join("")}
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            Ce formulaire a été soumis le ${new Date(
              formData.date
            ).toLocaleString("fr-FR")}
          </p>
        </div>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: "Kris La Voix des Anges <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: formData.email || formData.buyerEmail,
      subject: emailSubject,
      html: emailHtml,
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
