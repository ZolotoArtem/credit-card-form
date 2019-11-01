import React from 'react';

import { ReactComponent as MastercardLogo } from './images/mastercard.svg';
import { ReactComponent as MirLogo } from './images/mir.svg';
import { ReactComponent as VisaLogo } from './images/visa.svg';
import { Wrapper } from './styles';

const services = {
    mastercard: <MastercardLogo />,
    visa: <VisaLogo />,
    mir: <MirLogo />,
};

export const CardPayService = ({ service }) => {
    return <Wrapper>{services[service]}</Wrapper>;
};
