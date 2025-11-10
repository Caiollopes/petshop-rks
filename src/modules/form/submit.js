import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedules-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form")
const modal = document.getElementById("modal")

const tutorName = document.getElementById("name")
const petName = document.getElementById("pet-name")
const tutorPhone = document.getElementById("phone")
const petService = document.getElementById("service")

const scheduleDate = document.getElementById("date")
const formDate = document.getElementById("date-schedule")

// Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual no input calendario.
scheduleDate.value = inputToday // input da agenda (incio)
formDate.value = inputToday // input do formulario (modal)

// Bloqueia datas passadas para agendamento, deixando apenas do dia atual para frente.
formDate.min = inputToday // input do formulario (modal)

form.onsubmit = async (event) => {
    // Previne o comportamento do formulario
    event.preventDefault()

    try {
        // Recuperando o nome do cliente.
        const name = tutorName.value.trim()
        const pet = petName.value
        const phone = tutorPhone.value
        const service = petService.value
        
        // Recupera o horario selecionado.
        const hourSelected = document.querySelector(".hour-selected")
        
        if (!hourSelected) {
            return alert("Selecione a hora.")
        }

        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        
        // Insere a hora na data
        const when = dayjs(formDate.value).add(hour, "hour")
         
        // Gera um ID
        const id = new Date().getTime().toString()

        // Faz o agendamento
        scheduleNew({
            id,
            name,
            pet,
            phone,
            service,
            when,
        });

        
        
        // Recarregar os agendamentos
        schedulesDay()

        // Fechar modal
        modal.classList.add('close')


    } catch (error) {
        alert("Nao foi possivel realizar o agendamento.")
        console.log(error);
        
    }
    
}