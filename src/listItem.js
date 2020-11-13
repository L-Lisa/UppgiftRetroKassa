import React, { useState } from "react"
import styled from "styled-components/macro"


export const ListItem = ({ Product, Quantity, item, Price }) => {

    return (
        <li key={Product}>{Quantity} {item}Kr</li>
    )
}