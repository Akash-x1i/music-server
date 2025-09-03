import sys
from yt_dlp import YoutubeDL

def main():
    if len(sys.argv) < 2:
        print("Usage: python yt_download.py <youtube_url>")
        return

    url = sys.argv[1]

    # yt-dlp options for audio download
    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": "local/yt/%(id)s.%(ext)s",  # filename = <video_id>.ext
        "postprocessors": [{
            "key": "FFmpegExtractAudio",
            "preferredcodec": "mp3",
        }],
        "quiet": False,
    }

    with YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

if __name__ == "__main__":
    main()













# import subprocess
# import sys


# def main():
#     if len(sys.argv) < 2:
#         print("Usage: python yt_search.py <search query>")
#         return
#     query = " ".join(sys.argv[1:]) 
#     filename = query.split("?v=")[1].split("&")[0]
#     subprocess.run(
#                 "yt-dlp",
#                 "-f", "bestaudio/best",
#                 "--extract-audio",
#                 "--audio-format", "mp3",
#                 "--output", f"{filename}.%(ext)s",
#                 query
#             )
    

# if __name__ == "__main__":
#     main()
