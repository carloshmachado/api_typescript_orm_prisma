import config from "../config"
import { ConsultaNotasClient } from "../proto/consulta_grpc_pb"
import { ChannelCredentials } from '@grpc/grpc-js'
import { ConsultaNotasRequest } from "../proto/consulta_pb"
import { ConsultaNFeGRPCResult } from "./types"

export class ConsultaNFeChaveGRPC {
    public static async consultarNFeSefaz(requisitante: string, documento: string, cnpj: string, chave: string, handleCertificado: string, ambiente: string, uf: string, versaoManual: string): Promise<ConsultaNFeGRPCResult> {
        let consultaNFeGRPCResult: ConsultaNFeGRPCResult = {}

        try {
            let consultaClient: ConsultaNotasClient

            if (config.NODE_ENV == 'production') {
                consultaClient = new ConsultaNotasClient(config.CONSULTACHAVENFEGRPC_URL, ChannelCredentials.createSsl(), {
                    'grpc.ssl_target_name_override': 'tecnospeed.com.br'
                })
            } else {
                consultaClient = new ConsultaNotasClient(config.CONSULTACHAVENFEGRPC_URL, ChannelCredentials.createInsecure())
            }

            const requestParams = new ConsultaNotasRequest()
            requestParams.setRequisitante(requisitante)
            requestParams.setDocumento(documento)
            requestParams.setCnpj(cnpj)
            requestParams.setChavenfe(chave)
            requestParams.setHandlecertificado(handleCertificado)
            requestParams.setAmbiente(ambiente)
            requestParams.setUf(uf)
            requestParams.setVersaomanual(versaoManual)

            consultaNFeGRPCResult.xml = await new Promise((resolve, reject) => {
                consultaClient.consultarChaveNFe(requestParams, function (err, response) {
                    if (err) return reject(err)

                    resolve(response.getMessage())
                })
            })

            return consultaNFeGRPCResult
        } catch (error: any) {
            if (error.details) {
                consultaNFeGRPCResult.message = error.details
            }
            return consultaNFeGRPCResult
        }

    }
}