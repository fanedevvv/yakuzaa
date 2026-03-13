import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BotCommand {
  name: string;
  desc: string;
  usage: string;
  parentName: string;
}

export interface BotCommandsResponse {
  commands: BotCommand[];
  totalRaw: number;
  totalFlattened: number;
}

export const useDiscordBotCommands = () => {
  return useQuery<BotCommandsResponse>({
    queryKey: ["discord-bot-commands"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("discord-bot-commands");
      if (error) throw error;
      return data as BotCommandsResponse;
    },
    networkMode: "always",
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
