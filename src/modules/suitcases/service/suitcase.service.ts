import { Injectable } from '@nestjs/common';
import { SuitcaseDto } from '../dto/suitcase.dto';
import { differenceDaysBetweenDates, calculatePercentaje, parseToDate } from '../../../utils/functions/general.function'
import { IReservation } from 'src/utils/interfaces/reservation.interface';
import { REFERENCE_WEIGHT, REFERENCE_DAYS } from '../../../utils/constants/constants'

@Injectable()
export class SuitcaseService {
    public reservation: IReservation;
    constructor() {}

    public registerSuitcase(suitcase: SuitcaseDto): string {
        return `El valor de su equipaje es: 
         ${this.getReservationValue(suitcase).value} USD
         su descuento fué de ${this.getReservationValue(suitcase).discount} USD`;
    }

    private getReservationValue(suitcase: SuitcaseDto): IReservation {
        this.reservation = {
            value: this.calculateBaggageCheckByWeight(suitcase.weight),
            discount: 0
        }
        if (this.hasDiscount(suitcase.registrationDate)) {
            this.reservation.value = this.applyDiscount(this.reservation.value);
        } 
        return this.reservation;
    }
    
    private calculateBaggageCheckByWeight(weight: number): number {
        let registerValue: number = 0;
        weight < REFERENCE_WEIGHT ? registerValue = 20 : registerValue = 30
        return registerValue;
    }

    private hasDiscount(registrationDate: string): boolean {
        const convertedDate: Date = parseToDate(registrationDate);
        const itineraryDate: Date = new Date();
        const days = differenceDaysBetweenDates(convertedDate, itineraryDate);
        return days > REFERENCE_DAYS ? true : false;
    }

    private applyDiscount(valueRegistration: number): number {
        this.reservation.discount = calculatePercentaje(valueRegistration);
        const discount: number = valueRegistration - calculatePercentaje(valueRegistration);
        return  discount;
    }
}
