import React from 'react';
import { useFormik } from 'formik';

import { Wrapper, Button, Input, InputWrapper, Label, MaskedInput } from './styles';

const cardNumberMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];

export const Form = ({ setFormData, cardFlipped, setCardFlipped }) => {
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            holderName: '',
            expires: '',
            CVV: '',
            // expireMonth: '',
            // expireYear: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validate: values => {
            const validatedFormData = Object.keys(values).reduce((acc, el) => {
                if (values[el] === '') {
                    return acc;
                } else {
                    return { ...acc, [[el]]: values[el] };
                }
            }, {});
            setFormData(validatedFormData);
        },
    });

    const validateCardNumber = e => {
        if (e.target.value.replace(/#/g, '').length < 19) {
            formik.setFieldValue('cardNumber', '');
        }
    };

    const flipCard = () => {
        setCardFlipped(!cardFlipped);
    };

    return (
        <Wrapper onSubmit={formik.handleSubmit}>
            <InputWrapper gridArea="number">
                <Label htmlFor="cardNumber">Card Number</Label>
                <MaskedInput
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.cardNumber}
                    mask={cardNumberMask}
                    placeholderChar={'#'}
                    placeholder={'#### #### #### ####'}
                    onBlur={validateCardNumber}
                />
            </InputWrapper>
            <InputWrapper gridArea="name">
                <Label htmlFor="holderName">Card Holders</Label>
                <Input
                    id="holderName"
                    name="holderName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.holderName}
                    mask={[]}
                    guide={false}
                />
            </InputWrapper>
            <InputWrapper gridArea="expires">
                <Label htmlFor="expires">Expiration Date</Label>
                <MaskedInput
                    id="expires"
                    name="expires"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.expires}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                    placeholder={'MM/YY'}
                />
            </InputWrapper>
            <InputWrapper gridArea="cvv">
                <Label htmlFor="CVV">CVV</Label>
                <MaskedInput
                    id="CVV"
                    name="CVV"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.CVV}
                    onFocus={flipCard}
                    onBlur={flipCard}
                    mask={[/\d/, /\d/, /\d/]}
                    placeholder={'###'}
                />
            </InputWrapper>
            <Button gridArea="button" type="submit">
                Submit
            </Button>
        </Wrapper>
    );
};
