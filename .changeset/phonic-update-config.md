---
'@livekit/agents-plugin-phonic': patch
---

Add `updateConfig()` to the Phonic realtime model/session to change config fields mid-session (e.g. `defaultLanguage`, `voice`, `boostedKeywords`, no-input-poke settings). The merged config is applied immediately via a Phonic `reset`, so it can be called around a task advance — e.g. `model.updateConfig({ defaultLanguage: 'es' })` — to switch the language for the next question. Fields left unset keep their current values; instructions and tools remain driven by the Agent handoff.
