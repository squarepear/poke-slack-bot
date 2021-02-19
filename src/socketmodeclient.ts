import { APP_TOKEN } from "../secrets.ts";
import { SocketModeClient } from "../deps.ts";

export const socketModeClient = new SocketModeClient({ appToken: APP_TOKEN });
