import { Injectable } from '@nestjs/common';
import { ArticleDto } from '../dto/article.dto';
import { IReservation } from 'src/utils/interfaces/reservation.interface';
import { differenceDaysBetweenDates, calculatePercentaje, parseToDate } from '../../../utils/functions/general.function'
import { ARTICLE_VALUE, REFERENCE_DAYS } from '../../../utils/constants/constants';

@Injectable()
export class ArticleService {
    public reservation: IReservation;
    constructor() {}

    registerArticle(article: ArticleDto): string {
        return `El valor de su equipaje es: 
         ${this.getReservationValue(article).value} USD
         su descuento fué de ${this.getReservationValue(article).discount} USD`;
    }

    private getReservationValue(article: ArticleDto): IReservation {
        this.reservation = {
            value: this.calculateBaggageCheckByQuantity(article.quantity),
            discount: 0
        }
        if (this.hasDiscount(article.registrationDate)) {
            this.reservation.value = this.applyDiscount(this.reservation.value);
        } 
        return this.reservation;
    }
    
    private calculateBaggageCheckByQuantity(quantity: number): number {
        const  registerValue = quantity * ARTICLE_VALUE;
        return registerValue;
    }

    private hasDiscount(registrationDate:string): boolean {
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
