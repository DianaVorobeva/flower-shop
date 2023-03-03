function ChangeQuantity({quantity, setQuantity}) {
    const removeQuantity = () => {
        if(quantity<=1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    return (
        <div className="quantityBox">
            <button onClick={removeQuantity} className="btnChange">-</button>
            <span> {quantity}</span>
            <button onClick={addQuantity} className="btnChange">+</button>
        </div>
    )
}

export default ChangeQuantity;