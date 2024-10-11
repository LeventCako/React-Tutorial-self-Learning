import react, {useState} from 'react';

/* onChange: event Handler used primarilly with form elements 
z.B <input>, <textarea>, <select>, <radio>
Triggers a function every time the Value of the input changes */


function onChange(){


  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState("Delivery")
  function handleNameChange(event){
    
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value)
  }

  function handleCommentChange(event){
    setComment(event.target.value)
  }
  function handlePaymentChange(event){
    setPayment(event.target.value)
  }

  function handleShippingChange(event) {
    setShipping(event.target.value)
  }

    return(
        <>
        <div className='OnChangeDiv'>
            <input value={name} onChange={handleNameChange}></input>
            <input type="text" value={quantity} onChange={handleQuantityChange} />
            
            <p>
                Name: {name}
            </p>
            <p>
                Quantity: {quantity}
            </p>
            <textarea value={comment} onChange={handleCommentChange} 
            placeholder='add delivery Instruction here...'/>
            <p>
                
                Comment: <br></br> {comment}
            </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value=""> Select Payment Option</option>
                <option value="Visa"> Visa</option>
                <option value= "Cash"> Cash</option>
                <option value= "PayPal"> PayPal</option>
            </select>

            <p>
                Payment: {payment}
            </p>

           <label>
            <input type='radio' value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}/>
            Pick Up
           </label>

           <label>
           <input type='radio' value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}/>
            Delivery
           </label>
           <p>Shipping: {shipping}</p>
        </div>
        
        </>
    )
}

export default onChange;