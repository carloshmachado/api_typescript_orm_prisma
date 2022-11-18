// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 gRPC authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var consulta_pb = require('./consulta_pb.js');

function serialize_consultanotas_ConsultaNotasReply(arg) {
  if (!(arg instanceof consulta_pb.ConsultaNotasReply)) {
    throw new Error('Expected argument of type consultanotas.ConsultaNotasReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_consultanotas_ConsultaNotasReply(buffer_arg) {
  return consulta_pb.ConsultaNotasReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_consultanotas_ConsultaNotasRequest(arg) {
  if (!(arg instanceof consulta_pb.ConsultaNotasRequest)) {
    throw new Error('Expected argument of type consultanotas.ConsultaNotasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_consultanotas_ConsultaNotasRequest(buffer_arg) {
  return consulta_pb.ConsultaNotasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_consultanotas_HealthCheckReply(arg) {
  if (!(arg instanceof consulta_pb.HealthCheckReply)) {
    throw new Error('Expected argument of type consultanotas.HealthCheckReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_consultanotas_HealthCheckReply(buffer_arg) {
  return consulta_pb.HealthCheckReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_consultanotas_HealthCheckRequest(arg) {
  if (!(arg instanceof consulta_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type consultanotas.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_consultanotas_HealthCheckRequest(buffer_arg) {
  return consulta_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The greeting service definition.
var ConsultaNotasService = exports.ConsultaNotasService = {
  // Sends a greeting
consultarChaveNFe: {
    path: '/consultanotas.ConsultaNotas/consultarChaveNFe',
    requestStream: false,
    responseStream: false,
    requestType: consulta_pb.ConsultaNotasRequest,
    responseType: consulta_pb.ConsultaNotasReply,
    requestSerialize: serialize_consultanotas_ConsultaNotasRequest,
    requestDeserialize: deserialize_consultanotas_ConsultaNotasRequest,
    responseSerialize: serialize_consultanotas_ConsultaNotasReply,
    responseDeserialize: deserialize_consultanotas_ConsultaNotasReply,
  },
  healthCheck: {
    path: '/consultanotas.ConsultaNotas/healthCheck',
    requestStream: false,
    responseStream: false,
    requestType: consulta_pb.HealthCheckRequest,
    responseType: consulta_pb.HealthCheckReply,
    requestSerialize: serialize_consultanotas_HealthCheckRequest,
    requestDeserialize: deserialize_consultanotas_HealthCheckRequest,
    responseSerialize: serialize_consultanotas_HealthCheckReply,
    responseDeserialize: deserialize_consultanotas_HealthCheckReply,
  },
};

exports.ConsultaNotasClient = grpc.makeGenericClientConstructor(ConsultaNotasService);
