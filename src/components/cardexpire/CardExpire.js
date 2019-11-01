import React from 'react';

import { Wrapper, Title, Name } from './styles';

export const CardExpire = ({ month, year }) => {
    return (
        <Wrapper>
            <Title>Expires</Title>
            <Name>
                {month} / {year}
            </Name>
        </Wrapper>
    );
};
