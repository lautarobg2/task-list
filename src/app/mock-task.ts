import { task } from "./task-interface"
export const TASKS: task[] = [                     //Importamos el interface para mantener la integridad de
    {                                              //los datos y aprovechamos el potencial de typescript y le
        id: 1,                                     //decimos que es un array de Task[]
        text: "Ir a la clínica",
        date: "Lunes a las 7:30h.",
        reminder: true
    },
    {
        id: 2,
        text: "Lavar las zapas",
        date: "Lunes a las 13:30h.",
        reminder: false
    },
    {
        id: 3,
        text: "Avanzar en el proyecto",
        date: "Lunes a las 14:00h.",
        reminder: true
    }

]