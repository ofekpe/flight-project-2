export class Flight {
  constructor(
    public flightNumber: string,
    public origin: string,
    public destination: string,
    public boardingDate: string,
    public arrivalDate: string,
    public numberOfSeats: number
  ) {}
}
