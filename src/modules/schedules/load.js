import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
import { hoursLoad } from "../form/hours-load.js";

export async function schedulesDay(){
    
    // 1. Pega os valores dos inputs
    const dateForSchedulesInput = document.getElementById("date");
    const scheduleDate = dateForSchedulesInput.value; // Data da lista de visualização

    const dateForHoursInput = document.getElementById("date-schedule");
    const hoursDate = dateForHoursInput.value; // Data da marcação de horário
    
    // Busca agendamentos na API para a data de visualização
    const listSchedules = await scheduleFetchByDay({ date: scheduleDate });

    // Lista os agendamentos realizado do dia, utilizando o inpur 'date'
    schedulesShow({ dailySchedules: listSchedules });

    
    // Faz uma nova busca na API para os agendamentos que precisam ser excluídos do select.
    const bookedHoursList = await scheduleFetchByDay({ date: hoursDate });

    // Renderiza as horas disponiveis, usando a data do 'date-schedule'
    hoursLoad({ date: hoursDate, dailySchedules: bookedHoursList });
}


