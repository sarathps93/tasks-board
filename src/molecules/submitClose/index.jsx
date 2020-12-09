import {
    Submit,
    Close,
} from '../../styles/common';

const SubmitClose = ({ isDisabled, onClose }) => (
    <>
        <Submit disabled={isDisabled} type="submit">
            Submit
        </Submit>
        <Close as="button" onClick={onClose}>
            Close
        </Close>
    </>
);

export default SubmitClose;
