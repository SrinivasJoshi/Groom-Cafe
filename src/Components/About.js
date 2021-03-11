import abtImg from '../images/abt-img.jpg';
import teamImg from '../images/team-img.jpg';
import Navbar from './Navbar';

const About = () => {
    return ( <div className="aabout">
        <Navbar/>
        <div className="about">
            
            <div className="abt-container">
                <h1>ABOUT US</h1>
                <p> Groom is defined by a focus on the craft of traditional Italian 
                    baking methods. Inspired by iconic shops such as Roscioli in Rome—a 
                    family-owned bakery, café, grocer, and restaurant dating back to 
                    1824—the team works the “old way,” using techniques often sacrificed 
                    in favor of time or ease of production. <br/> <br/> Flour for the focaccia dough 
                    is milled in-house; cannoli are filled to order; quality is never 
                    compromised.
                </p>
                <p>
                    Leonelli offers a dazzling array of Italian Pasticinni (pastries),
                    Biscotti, Cookies, and Confezioni (candies). Says Chef Benno, 
                    <br/> <br/> “We wanted to bring back the traditional Italian pastry shop—and 
                    do it exceptionally well.” This means all confections are made 
                    in-house daily utilizing the best products available.
                </p>
            </div>

            <img src={abtImg} alt=""/>

            <img src={teamImg} alt=""/>

            <div className="abt-container">
                <h1>TEAM</h1>
                <p>Leonelli offers a dazzling array of Italian Pasticinni (pastries),
                    Biscotti, Cookies, and Confezioni (candies). Says Chef Benno, 
                    “We wanted to bring back the traditional Italian pastry shop—and
                    do it exceptionally well.” This means all confections are made
                    in-house daily utilizing the best products available.
                    <br/><br/>
                    “We wanted to bring back the traditional Italian pastry shop—and
                    do it exceptionally well.” This means all confections are made
                    in-house daily utilizing the best products available.
                    <br/><br/>
                    “We wanted to bring back the traditional Italian pastry shop—and
                    do it exceptionally well.” This means all confections are made
                    in-house daily utilizing the best products available.
                </p>
            </div>
         </div>
        </div>
     );
}
 
export default About;