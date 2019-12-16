import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, Icon} from 'semantic-ui-react'
import './Food.css'
import A1 from '../images/A1.jpg'


class Food extends Component {

    render() {
        return (
            <div className="tacos">
                <div  className="picTacos">
                    <div className="grid-container">
                    <main className="flexbox">
                    <div className="grid-item">
                        <img src={A1} alt='one' height="136px" width="300px" />
                        {/* <h2>Menu</h2> */}Main Menu
                    </div>
                    </main>
                    </div>
                    </div>
                <ul className="leaders">
                    <div className="T1">
                        <li>
                            <span>T1. Cuban</span>
                            <span>$3.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Pull Pork, Caramelized Red Pepper, Swiss Cheese, Cilantro, Avocados & Spicy
                                Honey Mayo Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T2. Brisket</span>
                            <span>$3.75</span>
                        </li>
                        <span>
                            <p className="description">
                                Smoked Marinated Brisket, Caramelized Onion, Queso Fresco Cheese, Banana Pepper,
                                Cilantro & Chipotle Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T1"> */}
                        <li>
                            <span>T3. Bulgogi</span>
                            <span>$3.75</span>
                        </li>
                        <span>
                            <p className="description">
                                Korean BBQ Steak, Coleslaw, Cilantro, Pickled Ginger & Chipotle Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T4. Carne Asada</span>
                            <span>$3.75</span>
                        </li>
                        <span>
                            <p className="description">
                                Marinated Steak, Pico De Gallo, Queso Fresco Cheese, Cilantro & Chipotle Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T1"> */}
                        <li>
                            <span>T5. Tradition Taco</span>
                            <span>$3.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Seasoned Ground Beef, Cheddar Cheese & Pico De Gallo
                            </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T6. Crispy Shrimp</span>
                            <span>$3.75</span>
                        </li>
                        <span>
                            <p className="description">
                                Tempura Shrimp, Coleslaw, Cilantro & Sweet Spicy Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T1"> */}
                        <li>
                            <span>T7. Chicken Honey Crispy</span>
                            <span>$3.75</span>
                        </li>
                        <span>
                            <p className="description">
                                Bread Chicken, Coleslaw, Cilantro, Diced Honey Crisp Apple & Spicy Honey Aioli
                            </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T8. Spicy Salmon Taco</span> 
                            <span>$4.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Spicy Salmon, Avocados, Cucumber & Spicy Mayo
                        </p>
                        </span>
                    {/* </div>

                    <div className="T1"> */}
                        <li>
                            <span>T9. Spicy Tuna Taco</span>
                            <span>$4.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Sushi Rice, Spicy Tuna, Avocado, Cucumber & Spicy Mayo
                        </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T10. Spicy Yellowtail Taco</span>
                            <span>$4.50</span>
                        </li>
                        <span>
                        <p className="description">
                            Sushi Rice, Spicy Yellow, Avocados, Cucumber & Spicy Mayo
                        </p>
                        </span>
                    {/* </div>

                    <div className="T1"> */}
                        <li>
                            <span>T11. Crunchy Crab Taco</span>
                            <span>$4.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Sushi Rice, Crab Mix, Avocado, Cucumber, Flake & Eel Sauce
                        </p>
                        </span>
                    {/* </div>

                    <div className="T2"> */}
                        <li>
                            <span>T12. Tempura Shrimp Taco</span>
                            <span>$4.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Sushi Rice, Tempura Shrimp, Avocado, Cucumber, Flake, Eel & Spicy Mayo Sauce
                        </p>
                        </span>
                    </div>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => {
    return {reduxStore}; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Food);