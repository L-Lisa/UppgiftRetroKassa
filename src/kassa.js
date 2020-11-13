import React, { useState } from "react"
import styled from "styled-components/macro"


export const Kassa = () => {
    const [Product, SetProduct] = useState("")
    const [Quantity, SetQuantity] = useState("")
    const [Price, SetPrice] = useState("")
    const [List, SetList] = useState([])
    const [Total, SetTotal] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        SetList([...List, <span>{Quantity} {Product}: {Price}</span>])
        SetProduct([" "])
        SetPrice([" "])
        SetQuantity([" "])
        SetTotal([Number(Total) + (Number(Price) * Number(Quantity))])
    }
    return (
        <KassaBox>
            <Form onSubmit={handleSubmit}><label>Product:
            <input type="text" value={Product} onChange={(e) => SetProduct(e.target.value)} />
            </label>
                <label> How many:
            <input required type="number" value={Quantity} onChange={(e) => SetQuantity(e.target.value)} />
                </label>
                <label> Price:
           <input required type="number" placeholder=" Sek" value={Price} onChange={(e) => SetPrice(e.target.value)} />
                </label>
                <button type="submit">💲 Enter 💲</button>
                <ul>
                    {List.map((item) => (
                        <li >{item}Kr</li>
                    ))}
                </ul>
            </Form>
            {Total && <TotalBox>Total: {Total}Kr </TotalBox>}
        </KassaBox>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    line-height: min-height;
    min-height: 300px;
    width: 200px;
    margin: 0 auto;
    justify-content: space-between;
label{
    display: flex;
    flex-direction: column;
    padding: 5px;
}
input{
    text-align: center; 
}
ul{
    width: fit-content;
}
li{
    display:flex;
}
`;
const TotalBox = styled.div`
padding: 10px;
background: whitesmoke;
width: fit-content;
margin: 0 auto;
`;
const KassaBox = styled.main`
width: fit-content;
margin: 0 auto;
padding: 40px;
border-radius: 3px;
box-shadow: 2px 2px 10px lightgrey;
`;