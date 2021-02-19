import { BOT_TOKEN } from "../secrets.ts";
import { WebClient } from "../deps.ts";

export const webClient = new WebClient(BOT_TOKEN);
