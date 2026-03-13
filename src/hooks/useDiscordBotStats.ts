import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface DiscordBotStats {
  bot: {
    username: string;
    discriminator: string;
    id: string;
    avatar: string;
  };
  servers: number;
  totalMembers: number;
  guilds: {
    id: string;
    name: string;
    icon: string | null;
    memberCount: number;
    owner: boolean;
  }[];
  shards: number;
  sessionStartLimit: {
    total: number;
    remaining: number;
    resetAfter: number;
    maxConcurrency: number;
  };
}

export const useDiscordBotStats = () => {
  return useQuery<DiscordBotStats>({
    queryKey: ["discord-bot-stats"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("discord-bot-stats");
      if (error) throw error;
      return data as DiscordBotStats;
    },
    networkMode: "always",
    retry: 1,
    refetchInterval: 60000,
    staleTime: 30000,
  });
};
