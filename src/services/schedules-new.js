import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, pet, phone, service, when}) {
    try {
        // Faz a requisicao para enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name,
                pet,
                phone,
                service,
                when
            })
        })
        // Exibe a mensagem do agendamento realizado
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error);
        alert("Nao foi possivel agendar.")
    }
}