import React from 'react';
import Logo from '../../Components/Logo';
import Heading from '../../Components/Heading';
import SubHeading from '../../Components/SubHeading';
import SubPara from '../../Components/SubPara';

const text = "Jenem widerklang versuch die  . Nennt froher mich herauf schatten entwöhntes auf das labyrinthisch denen. Träne mich die ihr."

const AboutColumnOne = () => {
    return (
        <div>
            <Logo />
            <Heading intext="ABOUT ADG" />
            <SubHeading intext="THE COOL BOIS" />
            <SubPara intext={text} />
        </div>    
    )
}

export default AboutColumnOne;