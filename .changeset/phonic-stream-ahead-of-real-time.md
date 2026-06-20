---
'@livekit/agents-plugin-phonic': patch
---

Add `streamAheadOfRealTime` option to the phonic plugin. When enabled, assistant audio is forwarded ahead of the real-time playout clock instead of being paced, reducing occasional stutter, and Phonic's `interrupted_response` message is handled to flush buffered audio on barge-in.
