import Joi from 'joi'

export class ValidarParametros {
    public static async parametrosControllerNFe(requisitante: string,
        cnpj: string,
        chave: string,
        handleNota: number,
        ambiente: string,
        handleCertificado: string,
        uf: string,
        versaoManual: string) {
        const schema = Joi.object({
            requisitante: Joi.string()
                .alphanum()
                .max(30)
                .required(),

            cnpj: Joi.string()
                .alphanum()
                .min(11)
                .max(14)
                .required()
                .pattern(new RegExp(/^[0-9]*$/)),

            chave: Joi.string()
                .optional()
                .alphanum()
                .max(44)
                .pattern(new RegExp(/^[0-9]*$/)),

            handleNota: Joi.number()
                .optional(),

            ambiente: Joi.string()
                .alphanum()
                .min(1)
                .max(1)
                .required()
                .pattern(new RegExp(/^[1-2]*$/)),
            handleCertificado: Joi.string()
                .alphanum()
                .max(10)
                .required()
                .pattern(new RegExp(/^[0-9]*$/)),
            uf: Joi.string()
                .alphanum()
                .max(2)
                .required(),
            versaoManual: Joi.string()
                .max(6)
                .required()
        })

        let result: any
        await schema.validateAsync({
            requisitante: requisitante, cnpj: cnpj, chave: chave, handleNota: handleNota,
            ambiente: ambiente, handleCertificado: handleCertificado, uf: uf, versaoManual: versaoManual
        }, { abortEarly: false })
    }
}