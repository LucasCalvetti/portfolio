const API_URL = "https://vercel.com/lucascalvettis-projects/portfolio-back/654Kp9upiKyN9Lhp8t7zmk5ZABnU";
const form = document.querySelector(".contact-form");

async function sendEmail(name, email, description) {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error al enviar el correo: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al enviar la solicitud: ", error);
    return { error: "Error al enviar la solicitud" };
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;

  const result = await sendEmail(name, email, description);
  if (!result.error) {
    document.getElementById("form").reset();
    alert("mensaje enviado con éxito! Lucas se pondra en contacto contigo en cuanto pueda, si quieres, tambien puedes hablarle por linkedin https://www.linkedin.com/in/lucas-calvetti/");
  } else {
    alert(result.error + " Por favor contáctate a través de linkedin con Lucas https://www.linkedin.com/in/lucas-calvetti/");
  }
});
