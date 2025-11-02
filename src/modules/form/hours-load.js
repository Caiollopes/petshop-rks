import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hour")

export function hoursLoad({date}) {
    const opening = openingHours.map((hour) => {
        // Recupera somente a hora.
        const [scheduleHour] = hour.split(":")
        
        // Adiciona a hora na date e verificar se esta no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }    
    })

    let hourSelect = '<option value="" disabled selected>--:--</option>'

    // Renderiza os horarios no select do form.
    opening.forEach(({hour, available}) => {
        
        if (available) {
            hourSelect = hourSelect + `
            <option value="hour" class="hour-available">${hour}</option>
        `
        } else {
            hourSelect = hourSelect + `
            <option value="hour" class="hour-unavailable" disabled>${hour}</option>
        `
        }
        
        hours.innerHTML = hourSelect
    })

    // Adiciona o evento de click nos horarios disponiveis
    hoursClick()
}