import React, { useCallback, useRef } from "react";
import { X } from "lucide-react";
import { VoiceEvent } from "realtime-ai";
import { useVoiceClientEvent } from "realtime-ai-react";
import { Button } from "../../ui/button";
import * as Card from "../../ui/card";

interface TranscriptOverlayProps {
  onClose: () => void;
  sentences: string[];
  onTranscriptUpdate: (transcript: string) => void;
}

const TranscriptOverlay: React.FC<TranscriptOverlayProps> = ({ 
  onClose, 
  sentences,
  onTranscriptUpdate 
}) => {
  const transcriptRef = useRef<HTMLDivElement>(null);

  useVoiceClientEvent(
    VoiceEvent.BotTranscript,
    useCallback((transcript: string) => {
      onTranscriptUpdate(transcript);
      // Auto-scroll to bottom
      if (transcriptRef.current) {
        transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
      }
    }, [onTranscriptUpdate])
  );

  return (
    <Card.Card className="fixed bottom-20 right-4 w-80 max-h-[60vh] shadow-lg flex flex-col z-50">
      <Card.CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 flex-shrink-0">
        <Card.CardTitle className="text-base">Transcript</Card.CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </Card.CardHeader>
      <Card.CardContent 
        className="flex-1 overflow-y-auto p-4 space-y-2 min-h-0"
        ref={transcriptRef}
      >
        <div className="space-y-2">
          {sentences.map((sentence, index) => (
            <p 
              key={index} 
              className="text-sm text-gray-600 break-words whitespace-pre-wrap"
            >
              {sentence}
            </p>
          ))}
        </div>
      </Card.CardContent>
    </Card.Card>
  );
};

export default TranscriptOverlay;
