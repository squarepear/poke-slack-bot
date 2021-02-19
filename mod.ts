import "https://deno.land/x/dotenv@v2.0.0/load.ts";

import { getCards } from "./deps.ts";
import { socketModeClient } from "./src/socketmodeclient.ts";
import { webClient } from "./src/webclient.ts";

socketModeClient.addEventListener(
  "app_mention",
  async (data) => {
    await data.detail.ack();

    const event = data.detail.body.event;
    const args: string[] = event.text.split(" ");

    args.shift();

    console.log(event.text);
    console.log(args);

    const card = (await getCards({ name: args.join(" ").trim() }))[0];

    await webClient.chat.postMessage({
      channel: event.channel,
      text: card?.name || "Card not found",
      // user: event.user,
      attachments: [
        {
          fallback: card?.name,
          image_url: card?.imageUrlHiRes,
        },
      ],
    });
  },
);

await socketModeClient.start();
