# Kyoto trip-planner chat

A chat prototype for the Thursday guest test with UX Research. Any message plays a thinking
animation, then returns three cards: Stay, Experience and Food. Built from the
*Card and error-state design spec v0.3*.

**Status:** happy path is built. The error bubble and the `?fail=1` switch come next.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. No login, works on phone and laptop.

## How it works

| Piece | Where |
| --- | --- |
| Mock content, one row per workbook sheet | `src/data/kyoto-weekend.ts` |
| Response shape (cards read these keys only) | `src/lib/types.ts` |
| Fake API: `POST /api/plan` returns 3 items, in order | `src/app/api/plan/route.ts` |
| Chat state, thinking timing, scroll | `src/components/chat/Chat.tsx` |
| One component per card type, picked by `type` | `src/components/cards/` |
| Design tokens (Airbnb palette, elevation, motion) | `src/app/globals.css` |

### Timing

- Thinking appears in the same render as the guest's message (measured ~10 ms).
- It holds for at least 1.5 s, and until the plan's photos are preloaded (capped at 3 s), so
  cards never land with empty image boxes.
- Cards replace it in a fixed order, Stay, Experience, Food, 150 ms apart.

### Design notes

- Colours, shadows and the enter curve come from airbnb.com's live tokens. Rausch pink is used
  only for the send button and the brand mark; each card carries its own accent from the spec
  (indigo, vermilion, matcha).
- Layout: on a laptop the three cards sit in one row at equal height. On a tablet they form a
  swipeable row that snaps card by card. On a phone they stack full width, as the spec asks, so
  guests see all three without having to find the swipe. While thinking, skeleton cards hold the
  row's shape so the real cards drop in without a jump.
- Each card has a different layout as well as a different accent: image on top (Stay), a day
  timeline with a photo strip at the bottom (Experience), a ticket with the meal slot and image
  on top, a tear line, then the restaurant (Food). Colour is never the only cue.
- Research showed guests dropping off at the search filter panel before seeing a listing, so the
  empty state has no filters. One tap on a suggestion gets a full plan.
- Font: DM Sans stands in for Airbnb Cereal, which isn't available for licensing.

## Placeholders to swap

- Values marked `†` in code are placeholders until checked against the Host Reservation Card
  and Kyoto Weekend Card specs.
- `src/data/kyoto-weekend.ts` holds sample rows. Replace them with the Kyoto Weekend Content
  workbook rows. Sample places and prices are illustrative, not real listings.
- Photos are from Unsplash (free licence).
