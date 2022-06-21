# Smart Home Panel - FE repo

## Background:
* I wanted to build out a **website** to be able to control one of my smart bulbs in my home - instead of being reliant on the 'Smart Life' mobile app. This is the FE repo with the BE repo existing [here](https://github.com/MadeleineSmith/smart-home-panel-be).
* Although, my solution works exactly as intended, arguably a far easier solution would be to buy a Raspberry Pi and install the [Home Assistant OS](https://www.home-assistant.io/) on it. But hey ho, you live and learn.

---

## Running locally:
* Run `npm install` to install dependencies
* Set the following environment variable as the url of the BE:
  * ```REACT_APP_API_URL=http://localhost:{{PORT-NUM}}```
* Run `npm run start` to run the code

---

## Hosting the FE:
* I decided to host the FE on [Netlify](https://www.netlify.com/) as it's free 🤑
* Netlify apparently has a [CLI](https://docs.netlify.com/cli/get-started/) for easy deployment - though I haven't used this yet. Instead, I followed the flow on their website to be able to [deploy from a GitHub repo](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify) - which was pretty straightforward.
* Set the following environment variable as the url of the BE
  * ```REACT_APP_API_URL=https://{{APP-NAME}}.herokuapp.com/```

---
