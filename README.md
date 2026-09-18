# School Network Mapping — Supabase Build

Nuxt 4 + Supabase application for maintaining the school's switch inventory, switch-port mapping, data points, VLAN reference and testing/fault records.

## Setup
1. Create/open your Supabase project.
2. In Supabase SQL Editor run `supabase/schema.sql` once.
3. Copy `.env.example` to `.env` and enter your Supabase Project URL and anon/publishable key.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the address shown by Nuxt (the dev command is configured to listen on the LAN as well).

## Included
- Live dashboard counts
- Switch add/edit/delete and inventory
- Per-switch port mapping
- Data point add/edit/delete and switch/patch-panel trace information
- VLAN add/edit/delete reference
- Testing/fault log and resolve action
- Search on switches and data points
- Responsive admin-style interface

## Security note
The supplied starter schema intentionally gives anon + authenticated users CRUD access so it works immediately on an internal deployment. Before publishing the site to the public Internet, replace the `snm_all_*` policies with authenticated ICT-user policies.
