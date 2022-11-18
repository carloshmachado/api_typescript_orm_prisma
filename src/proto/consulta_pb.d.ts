// package: consultanotas
// file: consulta.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ConsultaNotasRequest extends jspb.Message { 
    getRequisitante(): string;
    setRequisitante(value: string): ConsultaNotasRequest;
    getDocumento(): string;
    setDocumento(value: string): ConsultaNotasRequest;
    getCnpj(): string;
    setCnpj(value: string): ConsultaNotasRequest;
    getChavenfe(): string;
    setChavenfe(value: string): ConsultaNotasRequest;
    getHandlecertificado(): string;
    setHandlecertificado(value: string): ConsultaNotasRequest;
    getAmbiente(): string;
    setAmbiente(value: string): ConsultaNotasRequest;
    getUf(): string;
    setUf(value: string): ConsultaNotasRequest;
    getVersaomanual(): string;
    setVersaomanual(value: string): ConsultaNotasRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsultaNotasRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ConsultaNotasRequest): ConsultaNotasRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsultaNotasRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsultaNotasRequest;
    static deserializeBinaryFromReader(message: ConsultaNotasRequest, reader: jspb.BinaryReader): ConsultaNotasRequest;
}

export namespace ConsultaNotasRequest {
    export type AsObject = {
        requisitante: string,
        documento: string,
        cnpj: string,
        chavenfe: string,
        handlecertificado: string,
        ambiente: string,
        uf: string,
        versaomanual: string,
    }
}

export class ConsultaNotasReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): ConsultaNotasReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConsultaNotasReply.AsObject;
    static toObject(includeInstance: boolean, msg: ConsultaNotasReply): ConsultaNotasReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConsultaNotasReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConsultaNotasReply;
    static deserializeBinaryFromReader(message: ConsultaNotasReply, reader: jspb.BinaryReader): ConsultaNotasReply;
}

export namespace ConsultaNotasReply {
    export type AsObject = {
        message: string,
    }
}

export class HealthCheckRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckRequest): HealthCheckRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckRequest;
    static deserializeBinaryFromReader(message: HealthCheckRequest, reader: jspb.BinaryReader): HealthCheckRequest;
}

export namespace HealthCheckRequest {
    export type AsObject = {
    }
}

export class HealthCheckReply extends jspb.Message { 
    getMessage(): number;
    setMessage(value: number): HealthCheckReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckReply.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckReply): HealthCheckReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckReply;
    static deserializeBinaryFromReader(message: HealthCheckReply, reader: jspb.BinaryReader): HealthCheckReply;
}

export namespace HealthCheckReply {
    export type AsObject = {
        message: number,
    }
}
