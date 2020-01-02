import path from "path";
import fs from 'fs';

import { message_total, message } from '../utils/tools'

import Collection from '../models/hotel'


export function read(req, res) {

	console.log('ingreso a read', req.params.id);

	let Id = req.params.id

	Collection.findById(Id, (err, response) => {

        if (!err) {
            return res.status(200).json(message(true, [response], "Se consulto exitosamente"));
        } else {
            return res.status(500).json(message(false, err, "Ocurrio un problema al consultar"));
        }

	})

}

export function list(req, res) {

	console.log('ingreso a list');

	Collection.find({}, (err, response) => {
        if (!err) {
                 
            const total = response.length;
            return res.status(200).json(message_total(true, response, "Se consulto exitosamente", total));
        } else {
            return res.status(500).json(message(false, err, "Ocurrio un problema al consultar"));
        }
	})
}

export function create(req, res) {

	console.log('create', req.body);

	Collection.create(req.body, (err, response) => {
		if (err) {
			return res.status(500).send({
				message: `Error al salvar en la base de datos: ${err} `
			})
		} else {
			return res.status(200).send({
				hotel: response
			})
		}

	})
}

export function update(req, res) {

	let Id = req.params.id;

	console.log('ID', Id);

	let dataUpdate = req.body

	Collection.updateOne({_id: Id}, dataUpdate, (err, response) => {
		if (err)
			res.status(500).send({
				message: `Error al intentar actualizar el contacto ${err}`
			})
		else {

			res.status(200).send({
				response
			})
		}

	})
}

export function remove(req, res){

    if (!req.params.id) {
        return res.status(400).json(message(true, null, "No existe el parametro"));
    }

    // Process Delete
    Collection.deleteOne({ _id: req.params.id })
        .then(response => {
            if (response) {
                return res.status(200).json(message(true, response, "Se elimino exitosamente"));
            } else {
                return res.status(400).json(message(true, response, "Se elimino exitosamente"));
            }

        }).catch(err => {
            return res.status(500).json(message(true, err, "Ocurrio un problema al consultar"));
        });
}