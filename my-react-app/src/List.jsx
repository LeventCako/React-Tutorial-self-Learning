import { useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
function List(props) {

    const category = props.category;
    const itemList = props.items;

   /*  fruits.sort((a,b) => a.name.localeCompare(b.name)) *//* Alphabetical */

   /*  fruits.sort((a,b) => a.cal - b.cal)/* Sort cal */
 


    /* how to filter arrays for certai criterias */

   /*  const lowCalFruits = fruits.filter(fruit => fruit.cal < 100); */
    /* This will show any Fruit under 100 cal */

    const listItems = itemList.map(item => <li key={item.id}>{item.name} 
    <br/> calories: {item.cal}</li>)

    return(<>
    <h3 className="list-category">{category}</h3>
    <ul className="list-items">{listItems}</ul>
    </>);
}

/* Here we check that we have the correct valuetype */
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              cal: PropTypes.number
    }))  
}


 /* If something is missing then we have these default values */
List.defaultProps = {
    category: "Category",
    items: []

}
export default List