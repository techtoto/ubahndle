<div align="center">
  <h1>Ubahndle</h1>

  A [Wordle](https://www.nytimes.com/games/wordle/index.html)-like rapid transit game.

  <img width="450" alt="ubahndle_light" src="https://github.com/user-attachments/assets/09c30d9d-75ab-45b2-b983-77b79ccf5cae#gh-light-mode-only">
  <img width="450" alt="ubahndle_dark" src="https://github.com/user-attachments/assets/81442ceb-8268-4fac-9d1e-e4ebf4012456#gh-dark-mode-only">
</div>

## Game
You are given 2 stations, guess the correct combination of lines needed to take the daily connection.

## Cities

This repository hosts the code for different versions of Ubahndle for different cities.

They utilize shared code in the [ubahndle-core](./ubahndle-core) directory.

### Frankfurt

The code for the [Frankfurt am Main](https://en.wikipedia.org/wiki/Frankfurt) version lives in the [frankfurt](./frankfurt) directory.
All S and U lines are available in this version.

It's available to play at https://frankfurt.ubahndle.techtoto.dev.

### Cologne

The code for the [Cologne](https://en.wikipedia.org/wiki/Cologne) version lives in the [cologne](./cologne) directory.
Only tram lines are available in this version.

It's available to play at https://stadtbahndle-cologne.marie.cologne.

### Berlin

The code for the [Berlin](https://en.wikipedia.org/wiki/Berlin) version lives in the [berlin](./berlin) directory.
It's based on [Hnagzhi](https://github.com/Hnagzhi/)'s [fork](https://github.com/Hnagzhi/subwaydle-berlin), but also incorporates newer changes from the [London fork](https://github.com/blahblahblah-/subwaydle-london).

It's available to play at https://berlin.ubahndle.techtoto.dev.

## Development

This repository utilizes [pnpm](https://pnpm.io) and [Turborepo](https://turbo.build) for managing multiple projects in a monorepo.

Install dependencies using pnpm:
```shell
pnpm install --frozen-lockfile
```

To run a single city project in development mode use the following command:

```shell
pnpm turbo watch dev --filter <subproject name in package.json>

# Frankfurt
pnpm turbo watch dev --filter @ubahndle/frankfurt
# Cologne
pnpm turbo watch dev --filter @ubahndle/cologne
# Berlin
pnpm turbo watch dev --filter @ubahndle/berlin
```

To run all projects at the same time, omit the filter argument:

```shell
pnpm turbo watch dev
```

Run `pnpm build` to create a production build for all projects.

## Credits

- [OpenStreetMap](https://www.openstreetmap.org/copyright/)
- [Versatiles](https://versatiles.org/) for providing map tiles
- [KVB](https://kvb.koeln) for their [Open Data Service](https://kvb.koeln/service/open_data.html)

### Other Subwaydles
- [Subwaydle New York](https://github.com/blahblahblah-/subwaydle)
- [Subwaydle London](https://github.com/blahblahblah-/subwaydle-london)
- [Hnagzhi's Subwaydle Berlin](https://github.com/Hnagzhi/subwaydle-berlin)
