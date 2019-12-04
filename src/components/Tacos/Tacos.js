import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'
import './Tacos.css'

class Tacos extends Component {

    render() {
    return (
        <div className="tacos">
            <h2>
                Tacos
            </h2>

        <ul className="leaders">
        <div className="T1">
		<li>
            <span>T1. Cuban</span>
            <span>$3.25</span>
        </li>
			<span><p className="descriptionT1">
                Pull Pork, Caramelized Red Pepper, Swiss Cheese, Cilantro, Avocados & Spicy Honey Mayo Aioli
            </p></span>
        </div>
        <div class="T2">
        <li>
            <span>T2. Brisket</span>
            <span>$3.75</span>
        </li>
            <span><p className="descriptionT1">
                    Smoked Marinated Brisket, Caramelized Onion, Queso Fresco Cheese, Banana Pepper, Cilantro & Chipotle Aioli
            </p></span>
        </div>
        <div class="T1">
            <li>
                <span>T3. Bulgogi</span>
                <span>$3.75</span>
            </li>
                <span><p className="descriptionT1">
                    Korean BBQ Steak, Coleslaw, Cilantro, Pickled Ginger & Chipotle Aioli
                </p></span>
        </div>
        <div class="T2">
            <li>
                <span>T4. Carne Asada</span>
                <span>$3.75</span>
            </li>
                <span><p className="descriptionT1">
                    Marinated Steak, Pico De Gallo, Queso Fresco Cheese, Cilantro & Chipotle Aioli
                </p></span>
        </div>		
        <div class="T1">
            <li> 
                <span>T5. Tradition Taco</span>
                <span>$3.25</span>
            </li>
                <span><p className="descriptionT1">
                    Seasoned Ground Beef, Cheddar Cheese & Pico De Gallo
                </p></span>
        </div>
        <div class="T2">
            <li>
                <span>T6. Crispy Shrimp</span> 
                <span>$3.75</span>
            </li>
                <span><p className="descriptionT1">
                    Tempura Shrimp, Coleslaw, Cilantro & Sweet Spicy Aioli
                </p></span>
        </div>
        <div class="T1">
            <li>
                <span>T7. Chicken Honey Crispy</span> 
                <span>$3.75</span>
            </li>
                <span><p className="descriptionT1">
                    Bread Chicken, Coleslaw, Cilantro, Diced Honey Crisp Apple & Spicy Honey Aioli
                </p></span>
        </div>
        </ul>
        </div> 
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Tacos);