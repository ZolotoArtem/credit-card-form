import React from 'react';

import { CardHolder } from '../cardholder/CardHolder';
import { CardExpire } from '../cardexpire/CardExpire';
import { CardNumber } from '../cardnumber/CardNumber';
import { CardPayService } from '../cardpayservice/CardPayService';

import { Wrapper, FrontSide, BackSide, BlackLine } from './styles';

export const Card = ({ formData, cardFlipped }) => {
    const {
        cardNumber = '#### #### #### ####',
        holderName = 'IVAN IVANOV',
        expires = '30/19',
        CVV,
        payService = 'mastercard',
    } = formData;

    return (
        <Wrapper>
            <FrontSide isFlipped={cardFlipped}>
                <CardPayService service={payService} />
                <CardNumber number={cardNumber} />
                <CardHolder name={holderName} />
                <CardExpire month={expires} year={expires} />
            </FrontSide>
            <BackSide isFlipped={cardFlipped}>
                <BlackLine />
            </BackSide>
        </Wrapper>
    );
};
