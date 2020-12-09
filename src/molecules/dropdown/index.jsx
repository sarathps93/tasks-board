import { StyledSelect, StyledLabel } from './styled';

const Dropdown = ({ label, value, setValue, className, contents }) => {
    return (
        <StyledLabel className={className}>
            <span>{label}</span>
            <StyledSelect value={value} onChange={e => setValue(e.target.value)}>
                {contents.map(option => ( 
                    <option key={option.label} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </StyledLabel>
    )
};

export default Dropdown;
