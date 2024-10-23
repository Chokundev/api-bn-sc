
# api-bn-sc

This repository contains the Cloudflare Workers script for the Nakagame project, which proxies API requests to Google Apps Script and serves endpoints under the custom domain `api.bn-sc.cloud`. The API provides medal rankings, competition results, and summary data.

## Features

- **Medal Ranking API**: Retrieve current rankings of medals by team.
- **Competition Results API**: Access specific competition results.
- **Summary API**: Get summarized results of all competitions.

## Technologies

- **Cloudflare Workers**: Used for handling API requests and routing.
- **Google Apps Script**: Serves as the backend for processing and returning data.

## Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/Chokundev/api-bn-sc.git
    ```
   
2. Upload the `worker.js` script to Cloudflare Workers.
   
3. Configure Cloudflare Worker routes to handle the following API endpoints:
    - `/nakagame/v1/medal-ranking`
    - `/nakagame/v1/compet-result`
    - `/nakagame/v1/sum-compet-result`

4. Each of these routes should point to the appropriate Google Apps Script URL.

## Endpoints

- **Medal Ranking API**: `/nakagame/v1/medal-ranking`
- **Competition Results API**: `/nakagame/v1/compet-result`
- **Summary of Competition Results API**: `/nakagame/v1/sum-compet-result`


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

