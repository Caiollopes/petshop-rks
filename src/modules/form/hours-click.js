export function hoursClick() {
    // Encontra todos os elementos <select> que contêm as opções de hora.
    const selectElements = document.querySelectorAll("select"); 
    
    selectElements.forEach((selectElement) => {
        
        // Anexa o evento 'change' ao elemento <select>
        selectElement.addEventListener("change", () => {
            
            // Pega todas as opções dentro deste <select>
            const allOptions = selectElement.options; 

            // Remove a classe 'hour-selected' de TODAS as opções primeiro.
            Array.from(allOptions).forEach((option) => {
                option.classList.remove("hour-selected");
            });

            // Identifica a opção que foi selecionada.
            const selectedOption = allOptions[selectElement.selectedIndex];
            
            // Adiciona a classe 'hour-selected' à opção selecionada.
            // Verifica se a opção está disponível antes de adicionar (opcional, mas bom se for só para horas disponíveis)
            if (selectedOption && selectedOption.classList.contains("hour-available")) {
                 selectedOption.classList.add("hour-selected");
            }
        });
    });
}