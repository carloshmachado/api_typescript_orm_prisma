export type DataForLogs = {
    requisitante?: string;
    cnpj?: string;
    documento?: string;
    chave?: string;
    handleNota?: number;
    validarTipoParametros?: boolean;
    caminhos3?: string;
    ambiente?: string;
    handleCertificado?: string;
    uf?: string;
    versaoManual?: string;
    obterXmlDBByChave?: boolean;
    obterXmlDBByHandleNota?: boolean;
    consultarNFeChave?: boolean;
    storageXml?: boolean;
}

export type ConsultaNFeGRPCResult = {
    xml?: string;
    message?: string;
}

export type ConsultaNFeStorageXmlResult = {
    xml?: string;
    message?: string;
    status?: number;
}