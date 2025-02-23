# AI Teaching Assistant Demo

An interactive AI teaching assistant powered by real-time voice communication and computer vision capabilities. This application enables natural conversations with an AI tutor that can see, hear, and respond to students in real-time.

## Features

- 🎙️ Real-time voice communication
- 👁️ Computer vision capabilities
- 🤖 Powered by Claude 3.5 Sonnet
- 🔄 Interactive conversations
- 📊 Real-time performance metrics
- 🎯 Low-latency responses
- 🌐 Multi-language support
- 🎥 Camera integration
- 🔊 Audio device management

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **AI Integration**: 
  - Anthropic's Claude 3.5 Sonnet
  - Cartesia's Real-time AI
- **Voice/Video**: Daily.co SDK

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- A Daily.co API key
- Cartesia API key
- Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vanshgulati16/AI-Teaching-Assistant
cd AI-Teaching-Assistant
```

2. Install dependencies:
Use Yarn 
```bash
yarn 
```

3. Create a `.env.local` file in the root directory:
```bash
cp env.example .env.local
```

4. Start the development server:
```bash
yarn dev
```
or
```bash
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Initial Setup**:
   - Grant microphone and camera permissions
   - Select your preferred audio/video devices
   - Choose to start with microphone muted/unmuted

2. **During Session**:
   - Speak naturally with the AI tutor
   - Show materials to the camera for visual analysis
   - Use the interrupt button when needed
   - Monitor performance metrics in real-time
   - Configure devices on the fly

3. **Controls**:
   - Mute/Unmute microphone
   - Interrupt bot while speaking
   - View statistics
   - Configure devices
   - End session


## Key Components

- **Session**: Manages the main teaching session
- **UserMicBubble**: Controls user audio input
- **Agent**: Handles AI agent visualization
- **TranscriptOverlay**: Displays real-time transcriptions
- **Configure**: Manages device settings

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Daily.co](https://daily.co) for real-time communication infrastructure
- [Anthropic](https://anthropic.com) for Claude AI model
- [Cartesia](https://play.cartesia.ai/) for real-time AI capabilities
- [Vercel](https://vercel.com) for hosting and deployment platform

---
