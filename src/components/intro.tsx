import {ReactElement} from "react";

type NameProps = {
    partnerName1: string;
    partnerName2: string;
}

const Intro = ({partnerName1, partnerName2}: NameProps): ReactElement => {
    return (
        <p>Our names are {partnerName1} and {partnerName2}! Our hobbies are basketball and ____, respectively.
        We are both sophomore CS majors, and Yara has a double major in ___.</p>
    )
}

export default Intro;