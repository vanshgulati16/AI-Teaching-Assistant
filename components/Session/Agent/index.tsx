import React, { memo, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Loader2 } from "lucide-react";
import { VoiceEvent } from "realtime-ai";
import { useVoiceClientEvent, VoiceClientVideo } from "realtime-ai-react";

import ModelBadge from "./model";
import WaveForm from "./waveform";

import styles from "./styles.module.css";

interface AgentProps {
  isReady: boolean;
  statsAggregator: StatsAggregator;
  showVideo: boolean;
}

export const Agent: React.FC<AgentProps> = memo(
  ({ isReady, statsAggregator, showVideo }) => {
    const [hasStarted, setHasStarted] = useState<boolean>(false);
    const [botStatus, setBotStatus] = useState<
      "initializing" | "connected" | "disconnected"
    >("initializing");
    const [botIsTalking, setBotIsTalking] = useState<boolean>(false);

    useEffect(() => {
      // Update the started state when the transport enters the ready state
      if (!isReady) return;
      setHasStarted(true);
      setBotStatus("connected");
    }, [isReady]);

    useVoiceClientEvent(
      VoiceEvent.BotDisconnected,
      useCallback(() => {
        setHasStarted(false);
        setBotStatus("disconnected");
      }, [])
    );

    useVoiceClientEvent(
      VoiceEvent.BotStartedSpeaking,
      useCallback(() => {
        setBotIsTalking(true);
      }, [])
    );

    useVoiceClientEvent(
      VoiceEvent.BotStoppedSpeaking,
      useCallback(() => {
        setBotIsTalking(false);
      }, [])
    );

    // Cleanup
    useEffect(() => () => setHasStarted(false), []);

    const cx = clsx(
      styles.agentWindow,
      hasStarted && styles.ready,
      botIsTalking && styles.talking
    );

    return (
      <div className={styles.agent}>
        <div className={cx}>
          <ModelBadge />
          {!hasStarted ? (
            <span className={styles.loader}>
              <Loader2 size={32} className="animate-spin" />
            </span>
          ) : (
            <WaveForm />
          )}
        </div>
        {showVideo && (
          <VoiceClientVideo
            participant="local"
            className={styles.video}
          />
        )}
      </div>
    );
  },
  (p, n) => 
    p.isReady === n.isReady && 
    p.showVideo === n.showVideo
);
Agent.displayName = "Agent";

export default Agent;
