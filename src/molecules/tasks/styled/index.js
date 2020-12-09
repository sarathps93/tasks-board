import styled from 'styled-components';
import Dropdown from '../../dropdown';
import {
    PortalContainer,
} from '../../../styles/common';

export const Container = styled(PortalContainer)`
    & span {
        display: inline-block;
        font-weight: bold;
        width: 100%;
        text-align: center;
    }
`

export const DropDownContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 18px;
`;

export const StyledDropdown = styled(Dropdown)`
    display: inline-block;
    color: inherit;
    & span {
        display: inline;
        font-weight: 600;
    }
`;
