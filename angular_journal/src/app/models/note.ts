/*INote как interface описывает note как объект, чтобы приложение могло понимать,
что такое note и как с ним взаимодействовать.
Для списка дел, note это объект у которого есть описание (description) и он может быть выполнен (done).*/
export interface INote {
  id: number
  description: string
  done: boolean
}
