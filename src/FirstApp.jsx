import React from "react";
import PropTypes from 'prop-types'

const nombre = 'Luciano'

const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ({title, subTitle}) => {

    return (
        <>
            <h1 data-testid = "test-title">{title}</h1>
            <p>{subTitle}</p>
            <h2>{nombre}</h2>
            <p>{getResult()}</p>
        </>

    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subTitle: "No hay subtitulo"
}