import dayjs from "dayjs";

// Seleciona as secoes
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }){
    try {
        // Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        let sche = ""

        // Renderiza os agendamento por periodo
        dailySchedules.forEach((schedule) => {         


            sche = sche + `
            <li data-id="${schedule.id}">
                <label class="label-med" for="">${dayjs(schedule.when).format("HH:mm")}</label>
                <label class="label-small" for="">${schedule.pet}
                    <p class="p-small">/ ${schedule.name}</p>
                </label>
                <p class="p-small">${schedule.service}</p>
                <p class="p-small">Remover agendamento</p>
            </li>
            `
            // Obtem somente a hora
            const hour = dayjs(schedule.when).hour()
            
             // Renderiza o agendamento na sessão (manhã, tarde ou noite).
             if (hour <= 12) {
                periodMorning.innerHTML = sche
             } else if (hour > 12 && hour <= 18){
                periodAfternoon.innerHTML = sche
             } else {
                periodNight.innerHTML = sche
            }
        });

        

    } catch (error) {
        console.log(error);
        alert("Nao foi possivel exibir os agendamentos")
    }
}