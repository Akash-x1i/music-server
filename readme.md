# Music Server 🎵

A lightweight Node.js and Python-based music server that allows you to search for songs on YouTube and download them as MP3 files on the fly.

## 🚀 Live Demo
You can access the live version here: [https://music-server-5ipd.onrender.com/](https://music-server-5ipd.onrender.com/)

*(Note: The server may take 30-60 seconds to wake up on the first request due to the free tier hosting.)*

## ✨ Features
- **Song Search**: Automatically finds the best match for your song query on YouTube.
- **On-the-fly Conversion**: Downloads and converts video to high-quality MP3 using `yt-dlp` and `FFmpeg`.
- **Easy UI**: Simple Express.js web interface.
- **Dockerized**: Pre-configured `Dockerfile` for easy deployment.

## 🛠️ Technology Stack
- **Backend**: Node.js, Express.js, EJS
- **Processing**: Python 3, `yt-dlp`, `googlesearch-python`
- **Audio Engine**: FFmpeg

## 💻 Local Installation

### Prerequisites
- Node.js (v18+)
- Python 3.x
- FFmpeg installed on your system PATH

### Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Akash-x1i/express-server.git
   cd express-server
   ```

2. **Install Node dependencies**:
   ```bash
   npm install
   ```

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server**:
   ```bash
   npm run devStart
   ```
   The server will be running at `http://localhost:3000`.

## 🐳 Docker Setup
If you prefer using Docker:
```bash
docker build -t music-server .
docker run -p 3000:3000 music-server
```

## 📝 License
This project is licensed under the ISC License.
