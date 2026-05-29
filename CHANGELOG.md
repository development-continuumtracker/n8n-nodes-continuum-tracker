# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-05-29

### Added

- Initial release of `@continuumtracker/n8n-nodes-continuum-tracker`.
- **Continuum Tracker** node with declarative-style routing against `https://api.continuumtracker.com`.
- **Feedback** resource: Get Many, Get (with optional embedded painpoints), Create, Update, Archive.
- **Signal** resource: Get Many, Get, Create.
- **Me** resource: Get current authenticated user (with `role`, `api_key`, `company_analyses`, `hd` stripped from the response).
- Project picker (`projectId`) populated dynamically via `/v1/projects` with full pagination.
- `Return All` toggle and `Filters` collection on list operations; `Update Fields` collection on update operations.
- **Continuum Tracker API** credentials using bearer-token authentication with a `/v1/me` test request.
