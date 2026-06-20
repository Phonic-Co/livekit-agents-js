// SPDX-FileCopyrightText: 2026 LiveKit, Inc.
//
// SPDX-License-Identifier: Apache-2.0
import type { Phonic } from 'phonic';

/**
 * Sent by Phonic on a barge-in when the conversation runs in
 * `stream_ahead_of_real_time` mode, signalling that the client should drop any
 * assistant audio it is still holding ahead of the playout clock. Not exported by
 * the `phonic` SDK, so it is declared locally here.
 */
export interface InterruptedResponsePayload {
  type: 'interrupted_response';
  text: string;
}

export type ServerEvent =
  | Phonic.ReadyToStartConversationPayload
  | Phonic.ConversationCreatedPayload
  | Phonic.InputTextPayload
  | Phonic.InputCancelledPayload
  | Phonic.AudioChunkResponsePayload
  | Phonic.UserStartedSpeakingPayload
  | Phonic.UserFinishedSpeakingPayload
  | Phonic.DtmfPayload
  | Phonic.ToolCallPayload
  | Phonic.ToolCallOutputProcessedPayload
  | Phonic.ToolCallInterruptedPayload
  | Phonic.AssistantChoseNotToRespondPayload
  | Phonic.AssistantEndedConversationPayload
  | Phonic.AssistantStartedSpeakingPayload
  | Phonic.AssistantFinishedSpeakingPayload
  | InterruptedResponsePayload
  | Phonic.ErrorPayload;

export type Voice =
  | 'sabrina'
  | 'grant'
  | 'virginia'
  | 'landon'
  | 'eleanor'
  | 'shelby'
  | 'nolan'
  | string;
