import config from "../config"
import { ConsultaNFeStorageXmlResult } from "./types"
import axios from "axios"
import https from "https"

export class StorageXml {
    public static async consultaNFeStorageXml(requisitante: string, cnpj: string, documento: string, caminhoS3: string): Promise<ConsultaNFeStorageXmlResult> {
        let consultaNFeStorageXml: ConsultaNFeStorageXmlResult = {}
        try {
            const agent = new https.Agent({
                rejectUnauthorized: false
            });
            consultaNFeStorageXml.xml, consultaNFeStorageXml.status = await axios.get(
                `${config.STORAGEXML_URL}/v1/getxmls3?requisitante=${requisitante}&cnpj=${cnpj}&documento=${documento}&caminhos3=${caminhoS3}`,
                {
                    headers: {
                        Authorization: config.TOKEN_STORAGEXML,
                    },
                    httpsAgent: agent
                },
            );

            return consultaNFeStorageXml;
        } catch (error: any) {
            consultaNFeStorageXml.status = error.response.status
            consultaNFeStorageXml.message = error.response.data.message
            return consultaNFeStorageXml
        }
    }
}