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
                        <h3>Tacos</h3>
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
                    <h3>Sushi Tacos</h3>
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

                        <h3>Sushi (Maki Roll)</h3>

                        <li>
                            <span>S1. California Roll</span>
                            <span>$7.95</span>
                        </li>
                        <span>
                        <p className="description">
                            Crab, Cucumber & Avocado
                        </p>
                        </span>

                        <li>
                            <span>S2. Crunchyroll</span>
                            <span>$7.95</span>
                        </li>
                        <span>
                            <p className="description">
                                Crab Mix, Cucumber, Tempura Flakes, Eel Sauce & Spicy Mayo
                            </p>
                        </span>

                        <li>
                            <span>S3. Philadelphia Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Salmon, Cream Cheese & Cucumber
                            </p>
                        </span>

                        <li>
                            <span>S4. Spicy Salmon Roll</span>
                            <span>$8.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Salmon, Cucumber, Garlic Powder & Chili Oil
                            </p>
                        </span>

                        <li>
                            <span>S5. Spicy Yellowtail Roll</span>
                            <span>$8.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Yellowtail, Scallion, Cucumber, Sriracha & Lime Seasoning
                            </p>
                        </span>

                        <li>
                            <span>S6. Spicy Tuna Roll</span>
                            <span>$8.50</span>
                        </li>
                        <span>
                            <p className="description">
                                Tuna, Spicy Mayo & Cucumber
                            </p>
                        </span>

                        <h3>Specialty Roll</h3>

                        <li>
                            <span>S7. Crunchy Tempura Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Tempura Shrimp, Avocado, Cucumber, Top With Tuna, Jalapeños, Flake, Pouza & Eel Sauce
                            </p>
                        </span>

                        <li>
                            <span>S8. #9 Roll</span> 
                            <span>$12.95</span>
                        </li>
                        <span>
                        <p className="description">
                            Tempura Shrimp, Avocado, Cucumber, Top With Salmon, Avocado, Eel & Spicy Sauce
                        </p>
                        </span>

                        <li>
                            <span>S9. Caterpillar Roll</span>
                            <span>$13.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Freshwater Eel, Cucumber, Top With Avocado & Eel Sauce
                        </p>
                        </span>

                        <li>
                            <span>S10. MA Roll</span>
                            <span>$13.50</span>
                        </li>
                        <span>
                        <p className="description">
                            Tempura Shrimp, Cucumber, Avocado, Top With Spicy Tuna, Jalapeños, Eel & Spicy Mayo Sauce
                        </p>
                        </span>

                        <li>
                            <span>S11. Mahtomedi Roll</span>
                            <span>$14.25</span>
                        </li>
                        <span>
                        <p className="description">
                            Tuna, Salmon, Tilapia, Avocado, Cucumber, Top With Flake, Eel and Spicy Mayo Sauce
                        </p>
                        </span>

                        <h3>Appetizers</h3>

                        <li>
                            <span>A1. Rosemary Parmesan Fries</span>
                            <span>$3.25</span>
                        </li>
                        <span>
                            <p className="description">
                                Serverd With House Basil Garlic Aioli
                            </p>
                        </span>

                        <li>
                            <span>A2. KBBQ Wings (6)</span>
                            <span>$5.99</span>
                        </li>
                        <span>
                            <p className="description">
                                House Make korean BBQ sauce, & Top with Cilantro
                            </p>
                        </span>

                        <li>
                            <span>A3. Pot Sticker (5)</span>
                            <span>$4.99</span>
                        </li>
                        <span>
                            <p className="description">
                                Seasoned Ground Pork, Mix Vegetable, Serve With Sweet Soy
                            </p>
                        </span>

                        <li>
                            <span>A4. Crispy Chicken Feet</span>
                            <span>$4.99</span>
                        </li>
                        <span>
                            <p className="description">
                                Served With House Chipotle Sauce
                            </p>
                        </span>

                        <h3>Drinks</h3>
                        <h4>Margaritas/Cocktails</h4>
                        <h5>$7.00 (13oz.), $9.00 (16oz.), $12.00 (24oz.)</h5>
                        
                        <li>
                            <span>House Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Tequila, Lime, Simple Syrup, Triple Sec, Swet & Sour
                            </p>
                        </span>

                        <li>
                            <span>Triple Smooth Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Jameson Whiskey, Grand Marnier, Lime, Pineapple Juice & Ginger Ale
                            </p>
                        </span>

                        <li>
                            <span>Fiesta Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Reposado Tequila, Grapefruit, Lime, Simple Syrup & Triple Sec
                            </p>
                        </span>

                        <h5>$8.00 (13oz.), $10.00 (16oz.), $13.00 (24oz.)</h5>
                        
                        <li>
                            <span>Extreme Margarita</span>
                        </li>
                        <span>
                            <p className="description">
                                Patron Tequila, Grand Marnier, Lime, Simple Syrup & Triple Sec
                            </p>
                        </span>

                        <h5>$9.00 (16oz.), $12.00 (24oz.)</h5>

                        <li>
                            <span>Green Lady Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Captain Morgan, Malibu Rum, Blue Curacao, Triple Sec & Simple Syrup
                            </p>
                        </span>

                        <li>
                            <span>Sex on the Beach Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Vodka, Rum, Peach Schnapps, Orange, Pineapple, Half & Half, & Cranberry
                            </p>
                        </span>

                        <li>
                            <span>Sex with the Captain Cocktail</span>
                        </li>
                        <span>
                            <p className="description">
                                Captain Morganm Amaretto , Peach Schnapps, Cranberry & Orange
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