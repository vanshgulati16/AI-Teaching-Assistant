export const BOT_READY_TIMEOUT = 30 * 1000; // 30 seconds

export const defaultBotProfile = "vision_2024_08";
export const defaultMaxDuration = 60 * 6;

export const defaultServices = {
  // llm: "together",
  llm: "anthropic",
  // llm: "nebius",
  tts: "elevenlabs",
  stt: "deepgram",
};

export interface Language {
  name: string;
  value: string;
  ttsVoice: string;
}

export const LANGUAGES = [
  {
    label: "English",
    value: "en",
    tts_model: "eleven_multilingual_v2",
    stt_model: "nova-2-general",
    default_voice: "21m00Tcm4TlvDq8ikWAM",
  },
  {
    label: "French",
    value: "fr",
    tts_model: "eleven_multilingual_v2",
    stt_model: "nova-2-general",
    default_voice: "AZnzlk1XvdvUeBnXmlld",
  },
  {
    label: "Spanish",
    value: "es",
    tts_model: "eleven_multilingual_v2",
    stt_model: "nova-2-general",
    default_voice: "ErXwobaYiN019PkySvjV",
  },
  {
    label: "German",
    value: "de",
    tts_model: "eleven_multilingual_v2",
    stt_model: "nova-2-general",
    default_voice: "MF3mGyEYCl7XYWbV9V6O",
  },
];

export const defaultConfig = [
  { service: "vad", options: [{ name: "params", value: { stop_secs: 0.5 } }] },
  {
    service: "tts",
    options: [
      { name: "voice", value: "21m00Tcm4TlvDq8ikWAM" },
      { name: "model", value: "eleven_multilingual_v2" },
      { name: "language", value: LANGUAGES[0].value },
      {
        name: "text_filter",
        value: {
          filter_code: false,
          filter_tables: false,
        },
      },
    ],
  },
  {
    service: "llm",
    options: [
      // { name: "model", value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo" },
      { name: "model", value: "claude-3-5-sonnet-20240620" },
      // { name: "model", value: "meta-llama/Meta-Llama-3.1-70B-Instruct-fast" },
      {
        name: "initial_messages",
        value: [
          {
            role: "system",
            content: `You are a focused and efficient AI teaching assistant. Follow these guidelines strictly:

            1. Keep responses brief and direct - aim for 1-2 sentences when possible
            2. Skip pleasantries and get straight to the point
            3. Only elaborate if specifically asked
            4. Use simple, clear language
            5. When analyzing visual content through the camera:
              - State what you see in 1 sentence
              - Provide feedback in 1-2 sentences
              
            Remember: Brevity and clarity are your primary goals.`,
          },
          {
            role: "user",
            content: "Introduce yourself briefly.",
          },
        ],
      },
      { name: "run_on_config", value: true },
    ],
  },
  {
    service: "stt",
    options: [
      { name: "model", value: LANGUAGES[0].stt_model },
      { name: "language", value: LANGUAGES[0].value },
    ],
  },
];

// export const TTS_VOICES = [
//   { name: "Britsh Lady", value: "bdab08ad-4137-4548-b9db-6142854c7525" },
// ];

// export const BOT_READY_TIMEOUT = 30 * 1000; // 30 seconds

// export const defaultBotProfile = "vision_2024_08";
// export const defaultMaxDuration = 60 * 6;

// export const defaultServices = {
//   // llm: "together",
//   llm: "anthropic",
//   tts: "cartesia",
//   stt: "deepgram",
// };

// export interface Language {
//   name: string;
//   value: string;
//   ttsVoice: string;
// }

// export const LANGUAGES = [
//   {
//     label: "English",
//     value: "en",
//     tts_model: "sonic-english",
//     stt_model: "nova-2-general",
//     default_voice: "79a125e8-cd45-4c13-8a67-188112f4dd22",
//   },
//   {
//     label: "French",
//     value: "fr",
//     tts_model: "sonic-multilingual",
//     stt_model: "nova-2-general",
//     default_voice: "a8a1eb38-5f15-4c1d-8722-7ac0f329727d",
//   },
//   {
//     label: "Spanish",
//     value: "es",
//     tts_model: "sonic-multilingual",
//     stt_model: "nova-2-general",
//     default_voice: "846d6cb0-2301-48b6-9683-48f5618ea2f6",
//   },
//   {
//     label: "German",
//     value: "de",
//     tts_model: "sonic-multilingual",
//     stt_model: "nova-2-general",
//     default_voice: "b9de4a89-2257-424b-94c2-db18ba68c81a",
//   },
// ];

// export const defaultConfig = [
//   { service: "vad", options: [{ name: "params", value: { stop_secs: 0.5 } }] },
//   {
//     service: "tts",
//     options: [
//       { name: "voice", value: "79a125e8-cd45-4c13-8a67-188112f4dd22" },
//       { name: "model", value: LANGUAGES[0].tts_model },
//       { name: "language", value: LANGUAGES[0].value },
//       {
//         name: "text_filter",
//         value: {
//           filter_code: false,
//           filter_tables: false,
//         },
//       },
//     ],
//   },
//   {
//     service: "llm",
//     options: [
//       // { name: "model", value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo" },
//       { name: "model", value: "claude-3-5-sonnet-20240620" },
//       {
//         name: "initial_messages",
//         value: [
//           {
//             role: "system",
//             content: `You are a focused and efficient AI teaching assistant. Follow these guidelines strictly:

//             1. Keep responses brief and direct - aim for 1-2 sentences when possible
//             2. Skip pleasantries and get straight to the point
//             3. Only elaborate if specifically asked
//             4. Use simple, clear language
//             5. When analyzing visual content through the camera:
//               - State what you see in 1 sentence
//               - Provide feedback in 1-2 sentences
              
//             Remember: Brevity and clarity are your primary goals.`,
//           },
//           {
//             role: "user",
//             content: "Introduce yourself briefly.",
//           },
//         ],
//       },
//       { name: "run_on_config", value: true },
//     ],
//   },
//   {
//     service: "stt",
//     options: [
//       { name: "model", value: LANGUAGES[0].stt_model },
//       { name: "language", value: LANGUAGES[0].value },
//     ],
//   },
// ];

// export const TTS_VOICES = [
//   { name: "Britsh Lady", value: "bdab08ad-4137-4548-b9db-6142854c7525" },
// ];
