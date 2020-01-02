export const message = (status, response, mensaje) => {

    const data = {};
    data.status = status;
    data.hotel = response;
    data.message = mensaje;

    return data;
};

export const message_total = (status, response, mensaje, total) => {

    const data = {};
    data.status = status;
    data.hotel = response;
    data.message = mensaje;
    data.total = total;

    return data;
};
