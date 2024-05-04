import React from 'react'

const Footer = () => {
    const today = new Date();

    return (
        <footer>{today.getUTCFullYear()}{today.getFullYear()}</footer>
    )
}

export default Footer