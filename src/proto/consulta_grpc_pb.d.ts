// package: consultanotas
// file: consulta.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as consulta_pb from "./consulta_pb";

interface IConsultaNotasService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    consultarChaveNFe: IConsultaNotasService_IconsultarChaveNFe;
    healthCheck: IConsultaNotasService_IhealthCheck;
}

interface IConsultaNotasService_IconsultarChaveNFe extends grpc.MethodDefinition<consulta_pb.ConsultaNotasRequest, consulta_pb.ConsultaNotasReply> {
    path: "/consultanotas.ConsultaNotas/consultarChaveNFe";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<consulta_pb.ConsultaNotasRequest>;
    requestDeserialize: grpc.deserialize<consulta_pb.ConsultaNotasRequest>;
    responseSerialize: grpc.serialize<consulta_pb.ConsultaNotasReply>;
    responseDeserialize: grpc.deserialize<consulta_pb.ConsultaNotasReply>;
}
interface IConsultaNotasService_IhealthCheck extends grpc.MethodDefinition<consulta_pb.HealthCheckRequest, consulta_pb.HealthCheckReply> {
    path: "/consultanotas.ConsultaNotas/healthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<consulta_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<consulta_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<consulta_pb.HealthCheckReply>;
    responseDeserialize: grpc.deserialize<consulta_pb.HealthCheckReply>;
}

export const ConsultaNotasService: IConsultaNotasService;

export interface IConsultaNotasServer extends grpc.UntypedServiceImplementation {
    consultarChaveNFe: grpc.handleUnaryCall<consulta_pb.ConsultaNotasRequest, consulta_pb.ConsultaNotasReply>;
    healthCheck: grpc.handleUnaryCall<consulta_pb.HealthCheckRequest, consulta_pb.HealthCheckReply>;
}

export interface IConsultaNotasClient {
    consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: consulta_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: consulta_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    healthCheck(request: consulta_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}

export class ConsultaNotasClient extends grpc.Client implements IConsultaNotasClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    public consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    public consultarChaveNFe(request: consulta_pb.ConsultaNotasRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consulta_pb.ConsultaNotasReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: consulta_pb.HealthCheckRequest, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: consulta_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
    public healthCheck(request: consulta_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: consulta_pb.HealthCheckReply) => void): grpc.ClientUnaryCall;
}
