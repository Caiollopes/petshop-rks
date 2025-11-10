import { schedulesDay } from "../schedules/load.js";

// Seleciona o input da data para HORÁRIOS
const selectedDateSchedule = document.getElementById("date-schedule")
// Seleciona o input da data para AGENDAMENTOS
const selectedDate = document.getElementById("date")

// Ambos os eventos disparam a mesma função, que internamente usa as duas datas
selectedDateSchedule.onchange = () => schedulesDay()
selectedDate.onchange = () => schedulesDay()